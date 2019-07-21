// sunday01ex16_ejs.js
const http = require('http');
const express = require('express');
const app = express();
const router = express.Router();

app.set('port',3000);

// ejf 뷰엔진 설정
// > npm i ejs --save
//const ejf = require('ejs');
app.set('view engine', 'ejs'); //확장자
app.set('views', __dirname + '/views'); //경로 

router.route('/').get(function(req,res){
    console.log('/ 요청 들어옴...');
    
    // 파일명, 전달데이터, 콜백함수
    var data = {name:'길동이', age:18};
    req.app.render('index', {user:data}, function(err, html){
        if(err) throw err;
        res.end(html);
    });
    //res.end('GET - / request');
});

app.use('/', router);
const server = http.createServer(app);
server.listen(app.get('port'), function(){
    console.log('server running successfully')
})