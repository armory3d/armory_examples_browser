#if sys

using StringTools;

class Git {

    public static function getCommit(?path : String) : String {
        var args = 'log --format=%H -n 1'.split(' ');
        if(path == null)
            return exe(args).trim();
        var cwd = Sys.getCwd();
        Sys.setCwd( path );
        var commit = exe(args).trim();
        Sys.setCwd(cwd);
        return commit;
    } 

    public static function exe( args : Array<String> ) : String {
        var p = new sys.io.Process('git',args);
        return switch p.exitCode() {
        case 0:
            var r = p.stdout.readAll().toString();
            p.close();
            r;
        case _:
            var e = p.stderr.readAll().toString();
            p.close();
            throw e;
        }
    }

}

#end
