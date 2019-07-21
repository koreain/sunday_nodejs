// sunday01ex08_readFileSync.js
var fs = require('fs');
var data = fs.readFileSync('./package.json','utf8');
console.log(data);