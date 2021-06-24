
import js.Browser.console;
import js.Browser.document;
import js.Browser.window;
import js.html.AnchorElement;
import js.html.CanvasElement;
import js.html.Element;
import js.html.IFrameElement;
import js.html.InputElement;

using Lambda;
using StringTools;

class App {
    
    static var REPO_PATH = "https://github.com/armory3d/armory_examples/tree/master";
    static var EXAMPLES_PATH = "examples";

    static var panelWidth : Int;
    static var current : String;
    static var nav : Element;
    static var iframe : IFrameElement;
    static var canvas : CanvasElement;

    static function main() {

        console.log( '%cArmory3D Examples Browser', 'color:#fff;background:#ff2851;padding:1rem;' );

        var style = window.getComputedStyle(document.documentElement);
        var panelWidthStr = style.getPropertyValue('--panel-width');
        panelWidth = Std.parseInt( panelWidthStr.substr(0, panelWidthStr.length-2) );

        nav = document.body.querySelector('nav');
        var searchInput : InputElement = cast nav.querySelector('input[type="search"]');
        var olExamples = nav.querySelector('ol.examples');
        
        iframe = cast document.getElementById('frame');
        iframe.width = Std.int( window.innerWidth - panelWidth )+'px';
        iframe.style.left = panelWidth+'px';

        var examples = Build.examplesList( 'web/examples' );
        for( example in examples ) {
            var li = document.createLIElement();
            li.setAttribute( 'data-example', example );
            li.classList.add('link');
            li.textContent = example.replace('_',' ');
            li.onclick = e -> {
                loadExample( example );
            }
            olExamples.appendChild( li );
        }
        
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
                    li.style.display = "block";
                } else {
                    li.style.display = "none";
                }
            }
        } );

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
            var example = window.location.hash.substring( 1 );
            loadExample( example );
        }
    }
    
    static function loadExample( example : String ) {

        document.getElementById('title').textContent = 'Loading '+example.replace('_', ' ');

        if( current != null ) {
            var link = nav.querySelector( 'ol.examples > li[data-example=$current]' );
            link.classList.remove('active');
        }

        current = example;

        var link = nav.querySelector( 'ol.examples > [data-example=$current]' );
        link.classList.toggle('active');

        var path = '$EXAMPLES_PATH/$example/';
        console.group('Loading $example');
        iframe.classList.add('loading');
        iframe.src = path;
        
        window.location.hash = example;
        //window.history.replaceState( null, null );
        //window.history.pushState( { page: example }, "Armroy3D" );
        
        var url = '$REPO_PATH/$example';
        var srcLink : AnchorElement = cast document.getElementById('source-link');
        srcLink.href = url;
        srcLink.style.display = 'block';
        
        
        // var title = document.getElementById( 'example-title' );
        // title.textContent = example.replace('_',' ');
    }
}