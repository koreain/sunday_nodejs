// sunday01ex09_readFile.js

// 비동기 파일 읽기
var fs = require('fs');
fs.readFile('./package.json', 'utf8', function(err,data){
    console.log(data);
});

console.log('프로젝트 폴더 안의 package.json 파일 읽어오기')