// sunday01ex14_express.js
// express 모듈 설치
// > npm i express --save

const express = require('express');
const http = require('http');

//express 객체 불러오기
const app = express(); //getInstance() 와 유사


app.get('/', function(req,res){
    res.writeHead(200, {'content-type':'text/html;charset=utf8'});
    res.end('<h1>intro</h1>');
});

app.get('/home', function(req,res){
    res.writeHead(200, {'content-type':'text/html;charset=utf8'});
    res.end('<h1>home</h1>');
});

app.post('/login', function(req,res){
    res.writeHead(200, {'content-type':'text/html;charset=utf8'});
    res.end('<h1>login</h1>');
});



// createServer() 생성 시, express 객체를 인자로 사용
const server = http.createServer(app);
server.listen(3000, function(){
   console.log('server start');
});
//
//server.on('request', function(req,res){
//    res.writeHead(200, {'content-type':'text/html;charset=utf8'});
//    res.end('<h1>homepage</h1>');
//});