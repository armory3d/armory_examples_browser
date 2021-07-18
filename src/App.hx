
import js.Browser.console;
import js.Browser.document;
import js.Browser.window;
import js.html.AnchorElement;
import js.html.CanvasElement;
import js.html.Element;
import js.html.IFrameElement;
import js.html.InputElement;
import js.html.OListElement;

using Lambda;
using StringTools;

class App {
    
    static var REPO_OWNER = "https://github.com/armory3d";

    static var panelWidth : Int;
    static var current : String;

    static var nav : Element;
    static var olProjects : OListElement;
    static var iframe : IFrameElement;
    static var canvas : CanvasElement;
    static var readme : Element;

    static function main() {

        var style = window.getComputedStyle(document.documentElement);
        var colorA = style.getPropertyValue('--f_med');
        var colorB = style.getPropertyValue('--f_inv');
        
        console.log( '%cArmory3D Examples Browser', 'color:$colorA;background:$colorB;padding:0.5rem 1rem;' );

        var panelWidthStr = style.getPropertyValue('--panel-width');
        panelWidth = Std.parseInt( panelWidthStr.substr(0, panelWidthStr.length-2) );

        nav = document.body.querySelector('nav');
        olProjects = cast nav.querySelector('ol.projects');
        var searchInput : InputElement = cast nav.querySelector('input[type="search"]');
        
        iframe = cast document.getElementById('project');
        iframe.width = Std.int( window.innerWidth - panelWidth )+'px';
        iframe.style.left = panelWidth+'px';
        
        readme = document.getElementById('project-readme');

        var tutorials = addProjectGroup( 'tutorials', Build.projectList( 'web/tutorials' ) );
        var templates = addProjectGroup( 'templates', Build.projectList( 'web/templates' ) );
        var examples = addProjectGroup( 'examples', Build.projectList( 'web/examples' ) );

        searchInput.addEventListener('input', e -> {
            if( searchInput.value.length == 0 ) {
                for( li in olProjects.children ) li.style.display = "flex";
            } else {
                var searchExpr = new EReg( searchInput.value, "" );
                var matchedExamples = examples.filter( p -> return searchExpr.match( p ) );
                var matchedTutorials = tutorials.filter( p -> return searchExpr.match( p ) );
                var matchedTemplates = templates.filter( p -> return searchExpr.match( p ) );
                for( li in olProjects.children ) {
                    switch li.getAttribute('data-group') {
                    case "examples":
                        li.style.display = matchedExamples.has( li.getAttribute('data-project') ) ? "flex" : "none";
                    case "tutorials":
                        li.style.display = matchedTutorials.has( li.getAttribute('data-project') ) ? "flex" : "none";
                    case "templates":
                        li.style.display = matchedTemplates.has( li.getAttribute('data-project') ) ? "flex" : "none";
                    }
                }
            }
        } );

        iframe.onerror = e -> {
            console.warn('ERROR: $e');
            console.groupEnd();
        }
        iframe.onload = e -> {
            console.groupEnd();
            console.timeEnd( 'time' );
            // document.getElementById('title').textContent = '';
            iframe.width = Std.int( window.innerWidth - panelWidth )+'px';
            iframe.style.left = panelWidth+'px';
            //HACK
            var iframeDocument = iframe.contentWindow.document;
            canvas = cast iframeDocument.getElementById('khanvas');
            if( canvas != null ) {
                canvas.remove();
                iframeDocument.body.append( canvas );
                iframeDocument.body.querySelector('p').remove();
                canvas.width = Std.int( window.innerWidth - panelWidth );
                canvas.height = window.innerHeight;
                iframe.classList.remove('loading');
            }
        } 

        window.onresize = e -> {
            iframe.width = Std.int( window.innerWidth - panelWidth )+'px';
            iframe.style.left = panelWidth+'px';
            iframe.height = window.innerHeight;
            if( canvas != null ) {
                canvas.width = Std.int( window.innerWidth - panelWidth );
                canvas.height = window.innerHeight;
            }
        }

        if( window.location.hash != '' ) {
            var hash = window.location.hash.substring( 1 );
            var i = hash.indexOf('-');
            if( i == -1 )
                return;
            var group = hash.substr(0,i);
            var project = hash.substr(i+1);
            loadProject( project, group );
        }
    }

    static function addProjectGroup( group : String, projects : Array<String> ) {
        var title = document.createElement('h2');
        title.textContent = group;
        olProjects.append( title );
        for( p in projects ) addProjectLink( p, group );
        return projects;
    }

    static function addProjectLink( project : String, group : String ) {

        var li = document.createLIElement();
        li.setAttribute( 'data-project', project );
        li.setAttribute( 'data-group', group );
        li.classList.add('link');

        var close = document.createSpanElement();
        close.title = "Close project";
        close.classList.add('close');
        close.textContent = "X";
        close.onclick = e -> {
            unloadProject();
        }
        
        var src = document.createAnchorElement();
        src.classList.add('src');
        src.title = 'Open source code on github';
        src.href = src.title = '$REPO_OWNER/armory_$group/tree/master/$project';
        src.innerHTML = '&lt;/&gt;';
        
        var link = document.createAnchorElement();
        link.href = '#$group-$project';
        link.textContent = project.replace('_',' ');
        link.onclick = e -> {
            e.preventDefault();
            loadProject( project, group );
        }

        li.append( link );
        li.append( close );
        li.append( src );
        olProjects.append( li );
    }
    
    static function loadProject( project : String, group : String ) {

        //document.getElementById('title').textContent = 'Loading '+project.replace('_', ' ');

        if( current != null ) {
            var link = olProjects.querySelector( 'li[data-project=$current]' );
            link.classList.remove('active');
        }

        current = project;

        var link = olProjects.querySelector( 'li[data-project=$current]' );
        link.classList.toggle('active');

        var path = '$group/$project/';
        console.group('$group/$project');
        iframe.classList.add('loading');
        console.time( 'time' );
        iframe.src = path;
        
        window.location.hash = '$group-$project';
        
        var url = '$REPO_OWNER/armory_$group/tree/master/$project';
        
        // var srcLink : AnchorElement = cast document.getElementById('source-link');
        // srcLink.href = url;
        // srcLink.style.display = 'block';

        document.title = 'Armory3D | $project';

        readme.innerHTML = '';
        readme.style.visibility = 'hidden';
        window.fetch( '${path}readme.html' ).then( res -> {
            if( res.status == 200 ) {
                res.text().then( html -> {
                    readme.innerHTML = html;
                    readme.style.visibility = 'visible';
                });
            }
        });
        /*
        var readmeElement = document.getElementById('project-readme');
        window.fetch( '${path}README.md' ).then( res -> {
            if( res.status == 200 ) {
                res.text().then( md -> {
                    md = '# '+project.replace('_',' ')+'  \n' + md.trim();
                    readmeElement.innerHTML = Markdown.markdownToHtml(md);
                    readmeElement.style.visibility = 'visible';
                    return null;
                });
            } else {
                readmeElement.innerHTML = '';
                readmeElement.style.visibility = 'hidden';
                return null;
            }
        }).catchError( e -> {
            console.log('README.md not found');
        });
        */
    }

    static function unloadProject() {
        if( current != null ) {
            iframe.src = '';
            readme.innerHTML = '';
            readme.style.visibility = 'hidden';
            var link = olProjects.querySelector( 'li[data-project=$current]' );
            link.classList.remove('active');
        }
    }
}
