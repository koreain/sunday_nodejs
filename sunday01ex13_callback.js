// sunday01ex13_callback.js

// 콜백 함수
// -> 함수 호출시 작업이 끝나고 호출 되는 함수.
// -> 어떤 함수의 인자로 함수를 전달할 수 있다.

// 기존 함수 선언 방식
function fn1(name) {
    console.log('fn1 함수 호출');
    console.log(name+" 콜백함수 호출 했뉘?!");
};

//fn1();

// 변수에 함수를 담아준다. (참조 변수에 함수를 담아둔다.)
var fn2 = fn1;
var fn3 = function(){};

fn2();

function doFn(callback){
    if(typeof callback=='function'){
       callback("오우야");
    };
};

doFn(fn1);