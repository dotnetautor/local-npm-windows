'use strict';

// ensure the database will be created in this directory
require('process').chdir(__dirname);

require('local-npm')({
	p : 5080,   // port (default 5080)
	P : 16984,  // pouchdb-server port (default 16984)
	r : 'https://registry.npmjs.org',         // remote fullfatdb
	R : 'https://skimdb.npmjs.com/registry',  // remote skimdb
	u : 'http://127.0.0.1:5080'               // base url you want clients to use for fetching tarballs
});