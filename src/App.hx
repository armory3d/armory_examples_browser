
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
    
    static var REPO_OWNER = "https://github.com/tong";

    static var panelWidth : Int;
    static var current : String;

    static var nav : Element;
    static var olProjects : OListElement;
    static var iframe : IFrameElement;
    static var canvas : CanvasElement;

    static function main() {

        console.log( '%cArmory3D Examples Browser', 'color:#cf2b43;background:#000;padding:0.5rem 1rem;' );

        var style = window.getComputedStyle(document.documentElement);
        var panelWidthStr = style.getPropertyValue('--panel-width');
        panelWidth = Std.parseInt( panelWidthStr.substr(0, panelWidthStr.length-2) );

        nav = document.body.querySelector('nav');
        olProjects = cast nav.querySelector('ol.projects');
        var searchInput : InputElement = cast nav.querySelector('input[type="search"]');
        
        iframe = cast document.getElementById('frame');
        iframe.width = Std.int( window.innerWidth - panelWidth )+'px';
        iframe.style.left = panelWidth+'px';

        var examples = Build.projectList( 'web/examples' );
        for( project in examples ) addProjectLink( project, 'examples' );
        olProjects.append( document.createElement('hr') );
        var templates = Build.projectList( 'web/templates' );
        for( project in templates ) addProjectLink( project, 'templates' );

        searchInput.addEventListener('input', e -> {
            if( searchInput.value.length == 0 ) {
                for( li in olProjects.children ) li.style.display = "flex";
            } else {
                var expr = new EReg( searchInput.value, "" );
                var matchedExamples = examples.filter( p -> return expr.match( p ) );
                var matchedTemplates = templates.filter( p -> return expr.match( p ) );
                for( li in olProjects.children ) {
                    switch li.getAttribute('data-group') {
                    case "examples":
                        li.style.display = matchedExamples.has( li.getAttribute('data-project') ) ? "flex" : "none";
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
            document.getElementById('title').textContent = '';
            iframe.width = Std.int( window.innerWidth - panelWidth )+'px';
            iframe.style.left = panelWidth+'px';
            //HACK
            var iframeDocument = iframe.contentWindow.document;
            canvas = cast iframeDocument.getElementById('khanvas');
            canvas.remove();
            iframeDocument.body.append( canvas );
            iframeDocument.body.querySelector('p').remove();
            canvas.width = Std.int( window.innerWidth - panelWidth );
            canvas.height = window.innerHeight;
            iframe.classList.remove('loading');
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

    static function addProjectLink( project : String, group : String ) {

        var li = document.createLIElement();
        li.setAttribute( 'data-project', project );
        li.setAttribute( 'data-group', group );
        li.classList.add('link');
        
        var src = document.createAnchorElement();

        var link = document.createAnchorElement();
        link.href = '#$group-$project';
        link.textContent = project.replace('_',' ');
        link.onclick = e -> {
            e.preventDefault();
            loadProject( project, group );
        }
        li.append( link );

        src.href = src.title = '$REPO_OWNER/armory_$group/tree/master/$project';
        src.innerHTML = '&lt;/&gt;';
        src.classList.add('src');
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
        var srcLink : AnchorElement = cast document.getElementById('source-link');
        srcLink.href = url;
        srcLink.style.display = 'block';

        document.title = 'Armory3D | $project';

        var readmeElement = document.getElementById('project-readme');
        window.fetch( '${path}README.md' ).then( res -> {
            if( res.status == 200 ) {
                res.text().then( md -> {
                    md = '# '+project.replace('_',' ')+'  \n' + md;
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
    }
}
