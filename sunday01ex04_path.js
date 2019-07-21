// sunday01ex04_path.js

var path = require('path');

var dirs = ["users","newDir","newDocs"];
var docsDirectory = dirs.join(path.sep);
console.log(docsDirectory);

var curPath = path.join('/Users/newDir','ap.exe');
console.log(curPath);

var filename = "C:\\Users\\newDir\\app.exe";
var dirname = path.dirname(filename);
var basename = path.basename(filename);
var extname = path.extname(filename);

console.log(dirname, basename, extname);