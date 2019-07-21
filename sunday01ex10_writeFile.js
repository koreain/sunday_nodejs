// sunday01ex10_writeFile.js
var fs = require('fs');

var msg = "맛있는 msg";

fs.writeFile('./output.txt', msg, function(err){
    if(err){
        console.log('파일 쓰기 에러 발생!');
        console.log(err);
        return;
    }
    console.log('output.txt 쓰기 완료');
});