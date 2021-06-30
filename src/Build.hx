
#if macro
import haxe.macro.Context;
import sys.FileSystem.*;
using StringTools;
using haxe.io.Path;
#end

class Build {

    #if macro

    static function examples( src : String, dst : String, forceRebuild = false, ignoreErrors = false, ?ignoreProject : Array<String> ) {
        var pos = Context.currentPos();
        if( !exists( src ) || !isDirectory( src ) )
            Context.error( 'Examples directory [$src] not found', pos );
        var projects = readDirectory(src).filter( dir->{
            var blend = '$src/$dir/$dir.blend';
            return !~/^_|\..+$/.match(dir) && isDirectory('$src/$dir') && exists( blend );
        });
        projects.sort( (a,b) -> return (a>b) ? 1 : (a<b) ? -1 : 0 );
        var failed = new Array<String>();
        for( i in 0...projects.length ) {
            var project = projects[i];
            if( ignoreProject != null && ignoreProject.indexOf( project ) != -1 ) continue;
            Sys.println('Building example ${i+1}/${projects.length} $project');
            var code = Build.example( src, project, dst, forceRebuild );
            if( code != 0 ) {
                //Sys.println( 'Failed to build [$project]: $code' );
                Sys.println( '$project: $code' );
                if( !ignoreErrors ) Sys.exit(1);
                failed.push( project );
            }
        }
        if( failed.length > 0 ) {
            Sys.println( failed.length+' projects failed:');
            for( e in failed ) Sys.println( '- Failed: $e' );
        }
    }

    static function example( path : String, name : String, dst : String, forceRebuild = true, backgroundMode = true, buildScript = 'build.py' ) {
        if( !exists( path ) )
            throw 'Directory [$path] not found';
        var srcdir = '$path/$name';
        if( !exists( path ) )
            throw 'Directory [$srcdir] not found';
        var dstdir = '$dst/$name';
        if( exists( dstdir ) )
            forceRebuild ? rmdir(dstdir) : return 0;
        var blend = '$srcdir/$name.blend';
        var args = [];
        if( backgroundMode ) args.push('-b');
        args = args.concat( [blend,'--python',buildScript] );
        Sys.println( 'blender '+args.join(' ') );
        var code = Sys.command('blender', args);
        if( code == 0 ) {
            if( !exists( dst ) ) createDirectory( dst );
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
        examples.sort( (a,b) -> return (a>b) ? 1 : (a<b) ? -1 : 0 );
        return macro $v{examples};
    }
}
