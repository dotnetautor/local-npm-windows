var Service = require('node-windows').Service;
var Path = require('path'); 
 
// Create a new service object 
var svc = new Service({
  name:'local-npm',
  script: Path.join(__dirname, 'npm-local.js')
});
 
// Listen for the "uninstall" event so we know when it's done.
svc.on('uninstall',function(){
  console.log('Uninstall complete.');
  console.log('The service exists: ',svc.exists);
});

// Uninstall the service.
svc.uninstall();