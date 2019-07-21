// sunday01ex11_stream_pipe.js

var fs = require('fs');

var inname = './output.txt';
var outname = './output_copy.txt';

fs.exists(outname, function(exists){
    if(exists){
        fs.unlink(outfile, function(err){
            if(err){
              console.log(err)
            }; 
        });
        console.log('파일이 삭제됨')
    }
    var infile = fs.createReadStream(inname, {flags:'r'});
    var outfile = fs.createWriteStream(outname, {flags:'w'});
    infile.pipe(outfile);
    console.log('스트리밍 방식으로 복제 완료');
});