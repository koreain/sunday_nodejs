// sunday01ex02_exports.js

var calc = {};
// 필요한 속성을 객체에 자유롭게 추가 가능. (js 특징)
// 익명함수
//calc.minus = function(a,b){
//    
//}

// 화살표함수 : return문이 한문장일 경우 중괄호 및 return 예약어 생략 가능
calc.minus = (a,b) => a-b;

// unit test
//console.log(calc.minus(10,2));

// 모듈로 등록
// 변수, 함수, 객체 등을 모듈로 등록 가능
module.exports = calc;