// sunday01ex12_http_pipe.js
var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type':'text/html;charset=utf8'})
    //res.end('request run server... 서버 실행 요청중입니다...');
    var instream = fs.createReadStream('./output.txt');
    instream.pipe(res);
});
var port = 3000;
server.listen(port, function(){
    console.log(`=========== http://localhost:${port} Server Start ===========`);
});