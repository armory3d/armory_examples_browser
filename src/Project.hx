
#if macro
import haxe.Json;
import haxe.macro.Context;
import haxe.macro.Expr;
import sys.FileSystem.*;
import sys.io.File;
using StringTools;
using haxe.io.Path;
using haxe.macro.ExprTools;
#end

class Project {

    #if macro

    static function buildGroup( src : String, dst : String, forceRebuild = false, ignoreErrors = false, backgroundMode = true, ?ignoreProject : Array<String> ) {
        var pos = Context.currentPos();
        if( !exists( src ) || !isDirectory( src ) )
            Context.error( 'Project directory [$src] not found', pos );
        var projects = readDirectory(src).filter( dir->{
            var blend = '$src/$dir/$dir.blend';
            return !~/^_|\..+$/.match(dir) && isDirectory('$src/$dir') && exists( blend );
        });
        projects.sort( (a,b) -> return (a>b) ? 1 : (a<b) ? -1 : 0 );
        final results = new Array<{project:String,code:Int,time:Int}>();
        for( i in 0...projects.length ) {
            final project = projects[i];
            if( ignoreProject != null && ignoreProject.indexOf( project ) != -1 ) continue;
            Sys.println('\nBuilding ${i+1}/${projects.length} $project');
            final srcAbs = absolutePath( src );
            final group = srcAbs.withoutDirectory();
            final timeStart = Sys.time();
            final code = Project.build( src, project, dst, forceRebuild, backgroundMode );
            final time = Std.int((Sys.time() - timeStart) * 1000);
            final result = { project: project, group: group, src: srcAbs, code: code, time: time, background: backgroundMode };
            results.push( { project: project, code: code, time: time } );
            Sys.println('Time: '+time+'ms');
            if( code != 0 ) {
                Sys.println( 'ERROR: $code' );
                if( !ignoreErrors ) Sys.exit(code);
            }
            // File.saveContent('$dst/$project/build.json', Json.stringify(result) );
        }
        Sys.println('');
        for( r in results ) {
            var info = r.project+': '+r.code+', '+r.time+'ms';
            var color = 0;
            if( r.code == 0 ) {
                info = '✔ $info';
                color = 32;
            } else {
                info = '✖ $info';
                color = 31;
            }
            Sys.println( '\x1B['+color+'m'+info+'\x1B[0m' );
        }
    }

    static function build( path : String, name : String, dst : String, forceRebuild = true, backgroundMode = true, buildScript = 'blender/build_project.py' ) {
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
        final code = Sys.command('blender', args);
        if( code == 0 ) {
            var builddir = '$srcdir/build_$name/html5';
            if( !exists( builddir ) ) {
                trace( 'Exit code 0 but build directory not found: $builddir' );
                return 1;
            }
            if( !exists( dst ) ) createDirectory( dst );
            rename( builddir, dstdir );
            var readmeFile = 'README.md';
            var readmePath = '$srcdir/$readmeFile';
            if( exists( readmePath ) )
                File.copy( readmePath, '$dstdir/$readmeFile' );
            else
                File.saveContent( '$dstdir/$readmeFile', '' );
            // Sys.println('Creating readme.html');
            // var readmePath = '$srcdir/README.md';
            // var html = exists( readmePath ) ? Markdown.markdownToHtml( File.getContent(readmePath) ) : "";
            // File.saveContent( '$dstdir/readme.html', html );
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
}
