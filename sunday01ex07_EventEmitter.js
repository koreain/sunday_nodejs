// sunday01ex07_EventEmitter.js
// 이벤트 핸들러
process.on('exit', function(){
    //이벤트 처리 지점
    console.log('exit 이벤트 발생!!');
});

setTimeout(function(){
    process.exit(); // 이벤트 발생 지점
},3000)

process.on('choihyunjun', function(){
    console.log('choihyunjun 이벤트 발생');
})

setTimeout(function(){
    process.emit('choihyunjun');
},1000)