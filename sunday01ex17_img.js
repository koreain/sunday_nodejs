// sunday01ex17_img.js
// img 보여주기
// serve-static 모듈 적용 npm i serve-static --save
const http = require('http');
const express = require('express');
const app = express();
const router = express.Router();
const static = require('serve-static');

// 해당 폴더 내 페이지를 자유롭게 서비스 가능.
app.use('/public', static(__dirname + '/public')); //(a,b) a는 외부에서 접근하는 요청 경로, b는 사용할 모듈

app.set('port',process.env.PORT||3000);


router.route('/').get((req,res)=>{
    console.log('/show_img 페이지 요청 됨');
    res.writeHead(200, {'content-type':'text/html;charset=utf8'});
    res.end('<img src="/public/images/img01.jpg">'); 
});



app.use('/', router);

const server = http.createServer(app);
server.listen(app.get('port'), ()=>{
    console.log(`http://localhost:${app.get('port')}`);
});