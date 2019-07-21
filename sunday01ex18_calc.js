// sunday01ex18_calc.js

// 웹 계산기
// html(Ajax) --> Node
const http = require('http');
const express = require('express');
const app = express();
const router = express.Router();
const static = require('serve-static');
app.use('/public', static(__dirname + '/public')); //(a,b) a는 외부에서 접근하는 요청 경로, b는 사용할 모듈

// CORS 미들웨어 등록 - 크로스도메인 문제 해결
// > npm i cors --save
const cors = require('cors');
app.use(cors());

app.set('port',process.env.PORT||3000);

//app.set('view engine', 'ejs'); //확장자
//app.set('views', __dirname + '/calc'); //경로 


// params 객체 사용
//우아한 URL : url 파라미터
// localhost:3000/plus/10/20

//router.route('/').get((req,res)=>{
//   req.app.render('index', function(err, html){
//        if(err) throw err;
//        res.end(html);
//   });
//});

router.route('/plus/:a/:b').get((req,res)=>{
   res.end(JSON.stringify(Number(req.params.a)+Number(req.params.b)))
});
router.route('/minus/:a/:b').get((req,res)=>{
   res.end(JSON.stringify(Number(req.params.a)-Number(req.params.b)))
});
router.route('/mult/:a/:b').get((req,res)=>{
   res.end(JSON.stringify(Number(req.params.a)*Number(req.params.b)))
});
router.route('/div/:a/:b').get((req,res)=>{
   res.end(JSON.stringify(Number(req.params.a)/Number(req.params.b)))
});

app.use('/', router);

const server = http.createServer(app);
server.listen(app.get('port'),()=>{
  console.log(`http://localhost:${app.get('port')}`);  
})