// sunday01ex15_express_set.js

const http = require('http');
const express = require('express');
const app = express();
const router = express.Router();

server = http.createServer(app);
app.set('port',3000);
router.route('/').get(function(req,res){
   console.log('/ 요청 들어옴...');
   res.writeHead(200, {'content-type':'text/html;charset=utf8'});
   res.end('<h1>GET / 후후</h1>');
});

router.route('/info').get(function(req,res){
   console.log('/info 요청 들어옴 ...');
   res.end('GET /info');
});

// router 미들웨어 등록 - 페이지 아랫쪽에서 등록한다.
app.use('/', router);

server.listen(app.get('port'), function(){
    console.log('http://localhost:%d',app.get('port'));
});