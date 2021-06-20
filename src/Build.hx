
#if macro
import haxe.macro.Context;
import sys.FileSystem.*;
using StringTools;
using haxe.io.Path;
#end

class Build {

    #if macro

    static function examples( src : String, dst : String, forceRebuild = true, ignoreErrors = true ) {
        var pos = Context.currentPos();
        if( !exists( src ) || !isDirectory( src ) )
            Context.error( 'Examples directory [$src] not found', pos );
        var examples = readDirectory(src).filter( dir->{
            var blend = '$src/$dir/$dir.blend';
            return !~/^_|\..+$/.match(dir) && isDirectory('$src/$dir') && exists( blend );
        });
        examples.sort( (a,b) -> return (a>b) ? 1 : (a<b) ? -1 : 0 );
        var failed = new Array<String>();
        for( i in 0...examples.length ) {
            var example = examples[i];
            Sys.println('--- Building example ${i+1} if ${examples.length} - $example');
            var code = buildProject( src, example, dst, forceRebuild );
            if( code != 0 ) {
                Sys.println( 'Failed to build [$example]: $code' );
                if( !ignoreErrors ) Sys.exit(1);
                failed.push( example );
            }
            //if( i >= 3 ) break;
        }
        if( failed.length > 0 ) {
            Sys.println( failed.length+' examples failed:');
            for( e in failed ) Sys.println( '- Failed: $e' );
        }
    }

    static function buildProject( path : String, name : String, dst : String, forceRebuild = true ) {
        if( !exists( path ) )
            throw 'Destination directory [$path] not found';
        var srcdir = '$path/$name';
        var dstdir = '$dst/$name';
        if( exists( dstdir ) )
            forceRebuild ? rmdir(dstdir) : return 0;
        var blend = '$srcdir/$name.blend';
        var code = Sys.command('blender',['-b','-noaudio',blend,'--python','build.py']);
        if( code == 0 ) {
            if( !exists( dst ) ) createDirectory( dst );

            trace( '$srcdir/build_$name/html5', dstdir );
            rename( '$srcdir/build_$name/html5', dstdir );
        }
        return code;
    }

    static function rmdir( path : String ) {
		if( exists( path ) ) {
			for( e in readDirectory( path ) ) {
				var p = '$path/$e';
				isDirectory( p ) ? rmdir( p ) : deleteFile( p );
			}
			deleteDirectory( path );
		}
	}

    #end

    macro public static function examplesList( path : String ) : ExprOf<Array<String>> {
        var examples : Array<String> = readDirectory( path ).filter( dir->{
            var p = '$path/$dir';
            return isDirectory( p ) && exists('$p/index.html') && exists('$p/kha.js');
        });
        return macro $v{examples};
    }
}
