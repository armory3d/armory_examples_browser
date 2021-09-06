
#if macro
import haxe.macro.Context;
import haxe.macro.Expr;
import sys.FileSystem.*;
import sys.io.File;
#else
import haxe.Timer;
import js.Browser.console;
import js.Browser.document;
import js.Browser.window;
import js.html.CanvasElement;
import js.html.CSSStyleDeclaration;
import js.html.Element;
import js.html.IFrameElement;
import js.html.InputElement;
import js.lib.Promise;
#end

using Lambda;
using StringTools;

typedef Project = {
    var group : String;
    var name : String;
}

class ArmoryExamplesBrowser {
    
    static final REPO_OWNER = "https://github.com/armory3d";
    
    #if macro #elseif js

    @:expose public static var projects(default,null) : Map<String,Array<String>>;
    @:expose public static var project(default,null) : Project;
    
    static var style : CSSStyleDeclaration;
    static var sidebar : Element;
    static var iframe : IFrameElement;
    static var readme : Element;
    static var controls : Element;

    static function main() {
        
        window.addEventListener('load', e -> {
            
            style = window.getComputedStyle(document.documentElement);
            final color_fg = style.getPropertyValue('--fg');
            final color_bg = style.getPropertyValue('--bg');
            
            console.log('%cArmory3D Examples Browser', 'color:$color_fg;background:$color_bg;padding:0.5rem 1rem;');
            
            final body = document.body;
            final mainElement = document.querySelector('main');
            sidebar = body.querySelector('nav');
            controls = document.getElementById('project-controls');
            iframe = cast mainElement.querySelector('iframe');
            readme = mainElement.querySelector('.readme');
            
            final build = getBuildInfo();
            readme.textContent = 'BUILD: '+build.time;

            projects = [
                "tutorials" => addProjectGroup('tutorials', makeProjectsList( 'web/tutorials' )),
                "templates" => addProjectGroup('templates', makeProjectsList( 'web/templates' )),
                "examples" => addProjectGroup('examples', makeProjectsList( 'web/examples' )),
            ];
            
            final searchInput : InputElement = cast sidebar.querySelector('input[type="search"]');
            searchInput.addEventListener('input', e -> {
                final term = searchInput.value.trim();
                if( term.length == 0 ) {
                    for( group in projects.keys() ) {
                        for( li in sidebar.querySelector('section[data-group="$group"] > ol').children )
                            li.classList.remove('hidden');
                    }
                } else {
                    for( group in projects.keys() ) {
                        var found = searchProject( group, searchInput.value );
                        if( found.length > 0 ) {
                            var list = sidebar.querySelector('section[data-group="$group"] > ol');
                            for( li in list.children ) {
                                if( !li.classList.contains('playing') && found.has( li.getAttribute('data-project') ) )
                                    li.classList.remove('hidden');
                                else li.classList.add('hidden');
                            }
                        }
                    }
                }
            });

            iframe.onerror = e -> {
                console.warn('ERROR: $e');
                // console.timeEnd( 'time' );
                console.groupEnd();
                var li = sidebar.querySelector( 'li[data-project=${project.name}]' );
                li.classList.replace('loading','error');
            }
            iframe.onload = e -> {
                // console.timeEnd( 'time' );
                console.groupEnd();
                if( project != null ) {
                    var li = sidebar.querySelector( 'li[data-project=${project.name}]' );
                    li.classList.replace('loading','playing');
                    final iframeDocument = iframe.contentWindow.document;
                    final canvas : CanvasElement = cast iframeDocument.getElementById('khanvas');
                    if( canvas != null ) {
                        canvas.style.background = color_bg;
                        canvas.remove();
                        iframeDocument.body.append( canvas );
                        iframeDocument.body.querySelector('p').remove();
                        fitProject();
                    }
                }
            }
    
            window.onresize = e -> {
                fitProject();
            }
            /*
            window.onblur = e -> {
                // trace(e);
                // sidebar.classList.add('minimized');
            }
            window.onfocus = e -> {
                // trace(e);
                // sidebar.classList.remove('minimized');
            }
            */
            window.onkeydown = e -> {
                if( searchInput == document.activeElement )
                    return;
                switch e.key {
                case 'Escape':
                    sidebar.classList.toggle('hidden');
                    fitProject();
                case 'o': trace("OPEN PROJECT");
                case 'r': reloadProject();
                case 'x': unloadProject();
                case 'f': Timer.delay(searchInput.focus, 0);
                //case 'ArrowRight':
                //case 'ArrowLeft':
                case _:
                }
            }

            if( window.location.hash != '' ) {
                final hash = window.location.hash.substring( 1 );
                final i = hash.indexOf('-');
                if( i != -1 )  {
                    final group = hash.substr(0,i);
                    final project = hash.substr(i+1);
                    loadProject( project, group );
                }
            }
        });
    }

    static function addProjectGroup( group : String, projects : Array<String> ) : Array<String> {

        var section = document.createElement('section');
        section.classList.add('group');
        section.setAttribute('data-group', group);

        var title = document.createElement('h3');
        title.classList.add( 'title', 'icon-link' );
        section.append( title );

        var link = document.createAnchorElement();
        link.href = '$REPO_OWNER/armory_$group';
        link.textContent = group;
        title.append( link );
        
        var list = document.createOListElement();
        list.classList.add( 'list' );
        section.append( list );

        for( project in projects ) {

            var li = document.createLIElement();
            // li.setAttribute("tabindex","1");
            li.classList.add( 'project' );
            li.setAttribute( 'data-project', project );
            li.setAttribute( 'data-group', group );
            list.append(li);
            
           /*  var close = document.createAnchorElement();
            close.title = "Close project";
            close.classList.add('ic-clear');
            close.onclick = e -> unloadProject();
            li.append(close); */

            var name = document.createAnchorElement();
            name.classList.add( 'name' );
            name.href = '#$group-$project';
            name.textContent = project.replace('_',' ');
            name.onclick = e -> {
                e.preventDefault();
                if( li.classList.contains('active')) unloadProject();
                else loadProject( project, group );
            }
            li.append( name );

            var controls = document.createDivElement();
            controls.classList.add('controls');
            li.append( controls );
            
            var close = document.createAnchorElement();
            close.href = "";
            close.title = "Close project";
            close.classList.add('ic-clear');
            close.onclick = e -> {
                e.preventDefault();
                unloadProject();
            }
            controls.append(close);
            
            var open = document.createAnchorElement();
            open.classList.add('src','ic-launch');
            open.target = '_blank';
            open.title = 'Open in new tab';
            open.href = '$group/$project';
            controls.append( open );

            var src = document.createAnchorElement();
            src.classList.add('src','ic-code');
            src.title = 'Open source code on github';
            src.href = src.title = '$REPO_OWNER/armory_$group/tree/master/$project';
            controls.append( src );
        }

        document.getElementById('project-groups').append( section );

        return projects;
    }

    @:expose
    static function searchProject( group : String, term : String ) : Array<String> {
        var expr = new EReg( term, "" );
        return projects.get( group ).filter( p -> return expr.match(p) );
    }

    @:expose
    static function loadProject( name : String, group : String ) {
        
        unloadProject();
        
        final path = '$group/$name';
        project = { name: name, group: group };
        // console.group(path);
        iframe.src = '$path/';
        window.location.hash = '$group-$name';
        // console.time( 'time' );
        
        var li = sidebar.querySelector( 'li[data-project=$name]' );
        li.classList.add('loading');

        // controls.remove();
        // li.append( controls );

        fetchReadme('${path}/README.md').then( html -> {
            if( html == null ) html = '';
            readme.innerHTML = html;
        });
    }

    @:expose
    static function reloadProject() {
        if( project != null )
            loadProject( project.name, project.group );
    }

    @:expose
    static function unloadProject() {
        if( project == null )
            return;
        final name = project.name, group = project.group;
        final li = sidebar.querySelector( 'li[data-project=${name}]' );
        li.classList.remove('playing','loading');
        project = null;
        iframe.src = '';
        readme.innerHTML = '';

        //var hr = window.location.href;
        //trace(hr);

        window.location.href = window.location.href.substr(0, window.location.href.indexOf('#')+1);
    }

    static function fetchMarkdown( path : String ) : Promise<String> {
        return window.fetch( path ).then( res -> {
            if( res.status == 200 ) {
                return res.text().then( text -> return text );
            }
            return null;
        });
    }

    static function fetchReadme( path : String ) : Promise<String> {
        return fetchMarkdown( '${project.group}/${project.name}/README.md' ).then( md -> {
            return (md == null) ? null : Markdown.markdownToHtml(md);
        });
    }

    static function fitProject() {
        var sidebar_width = 0;
        if( !sidebar.classList.contains('hidden'))
            sidebar_width = Std.parseInt(style.getPropertyValue('--sidebar-width'));
        final w = window.innerWidth - sidebar_width;
        final h = window.innerHeight - readme.clientHeight;
        final mainElement = document.body.querySelector("main");
        mainElement.style.width = w+'px';
        mainElement.style.left = sidebar_width+'px';
        //HACK
        if( iframe.src != null ) {
            final iframeDocument = iframe.contentWindow.document;
            final canvas : CanvasElement = cast iframeDocument.getElementById('khanvas');
            if( canvas != null ) {
                canvas.width = Std.int(window.innerWidth - sidebar_width);
                canvas.height = Std.int( h );
            }
        }
    }

    #end

    macro public static function makeProjectsList( path : String ) : ExprOf<Array<String>> {
        if( !exists( path ) )
            Context.fatalError( 'Projects directory [$path] not found', Context.currentPos() );
        var projects : Array<String> = readDirectory( path ).filter( dir->{
            var p = '$path/$dir';
            return isDirectory( p ) && exists('$p/index.html') && exists('$p/kha.js');
        });
        projects.sort( (a,b) -> return (a>b) ? 1 : (a<b) ? -1 : 0 );
        Sys.println( projects.length+' '+path);
        return macro $v{projects};
    }

    macro public static function getBuildInfo() {
        var info : Dynamic = {
            time: Date.now().toString()
        };
        return macro $v{info};
     }

}
