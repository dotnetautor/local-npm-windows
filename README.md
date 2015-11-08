# local-npm-windows
a local npm registry running as a windows service
## setup

To install the service run the following commands from an elevated command prompt.
```
$ npm install
$ node install-service.js
```

Change your npm repository:
```
$ npm set registry http://127.0.0.1:5080
```

Restore your npm repository:
```
$ npm set registry https://registry.npmjs.org
```

To remove the service run the following commands from an elevated command prompt.
```
$ node uninstall-service.js
```
