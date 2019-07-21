// sunday01ex03_nconf.js

var nconf = require('nconf');
nconf.env();

console.log(`OS 환경 변수의 값 ${nconf.get('OS')}`);