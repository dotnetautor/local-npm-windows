var Service = require('node-windows').Service;
var Path = require('path'); 
 
// Create a new service object 
var svc = new Service({
  name:'local-npm-windows',
  description: 'a local npm registry.',
  script: Path.join(__dirname, 'npm-local.js')
});
 
// Listen for the "install" event, which indicates the 
// process is available as a service. 
svc.on('install',function(){
  svc.start();
});
 
svc.install();

