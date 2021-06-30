
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
    static var EXAMPLES_PATH = "examples";

    static var panelWidth : Int;
    static var current : String;
    static var nav : Element;
    static var olExamples : OListElement;
    static var iframe : IFrameElement;
    static var canvas : CanvasElement;

    static function main() {

        console.log( '%cArmory3D Examples Browser', 'color:#fff;background:#cf2b43;padding:1rem;' );

        var style = window.getComputedStyle(document.documentElement);
        var panelWidthStr = style.getPropertyValue('--panel-width');
        panelWidth = Std.parseInt( panelWidthStr.substr(0, panelWidthStr.length-2) );

        nav = document.body.querySelector('nav');
        olExamples = cast nav.querySelector('ol.examples');
        var searchInput : InputElement = cast nav.querySelector('input[type="search"]');
        
        iframe = cast document.getElementById('frame');
        iframe.width = Std.int( window.innerWidth - panelWidth )+'px';
        iframe.style.left = panelWidth+'px';

        var examples = Build.examplesList( 'web/examples' );
        for( example in examples ) addExampleLink( example, 'examples' );
        olExamples.append( document.createElement('hr') );
        var templates = Build.examplesList( 'web/templates' );
        for( example in templates ) addExampleLink( example, 'templates' );

        searchInput.addEventListener('input', e -> {
            var term = searchInput.value;
            var expr = new EReg( term, "" );
            var matched = new Array<String>();
            for( example in examples ) {
                if( expr.match( example ) ) {
                    matched.push( example );
                } 
            }
            for( li in olExamples.children ) {
                var attr = li.getAttribute('data-example');
                if( matched.has( attr ) ) {
                    li.style.display = "flex";
                } else {
                    li.style.display = "none";
                }
            }
        } );

        iframe.onerror = e -> {
            console.warn('ERROR: $e');
            console.groupEnd();
        }
        iframe.onload = function() {
            console.groupEnd();
            document.getElementById('title').textContent = '';
            iframe.width = Std.int( window.innerWidth - panelWidth )+'px';
            iframe.style.left = panelWidth+'px';
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
            var example = hash.substr(i+1);
            loadProject( example, group );
        }
    }

    static function addExampleLink( example : String, group : String ) {

        var li = document.createLIElement();
        li.setAttribute( 'data-example', example );
        li.setAttribute( 'data-group', group );
        li.classList.add('link');
        
        var src = document.createAnchorElement();

        var text = document.createSpanElement();
        text.textContent = example.replace('_',' ');
        text.onpointerover = e -> {
            //src.style.display = 'block';
        }
        text.onclick = e -> {
            loadProject( example, group );
        }
        li.append( text );

        src.href = src.title = '$REPO_OWNER/armory_$group/tree/master/$example';
        src.textContent = '</>';
        src.classList.add('src');
        li.append( src );

        olExamples.append( li );
    }
    
    static function loadProject( example : String, group : String ) {

        document.getElementById('title').textContent = 'Loading '+example.replace('_', ' ');

        if( current != null ) {
            var link = nav.querySelector( 'ol.examples > li[data-example=$current]' );
            link.classList.remove('active');
        }

        current = example;

        var link = nav.querySelector( 'ol.examples > li[data-example=$current]' );
        link.classList.toggle('active');

        var path = '$group/$example/';
        console.group('Loading $group/$example');
        iframe.classList.add('loading');
        iframe.src = path;
        
        window.location.hash = '$group-$example';
        
        var url = '$REPO_OWNER/armory_$group/tree/master/$example';
        var srcLink : AnchorElement = cast document.getElementById('source-link');
        srcLink.href = url;
        srcLink.style.display = 'block';
        
        // var title = document.getElementById( 'example-title' );
        // title.textContent = example.replace('_',' ');
    }
}