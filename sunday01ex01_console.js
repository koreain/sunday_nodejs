// sunday01ex01_console.js

console.log('Hello');
console.log("Hello");

var name = "Hong";
var age = 30;

console.log(name+"님은 "+age+"세 이다.");
console.log(name, "님은", age, "세 이다.")
// 탐색기 가리기 ctrl + alt + h

var str = `${name}님은 ${age}세 입니다.`;

console.log(str)

// json object 생성 예제
var student ={
    name: '김길순',
    age: 17,
}

console.log("student=>"+student);
// 복제는 ctrl + d
console.log("student=>",student);

// object 출력
console.dir(student);

console.log(JSON.stringify(student));

// console.time() ~ console.timeEnd()

var result=0;
console.time('time_check');
for(var i=1; i<=10000; i++){
    result +=i;
}
console.timeEnd('time_check');
console.log("result =>" + result);

// 현재 실행 파일 및 디렉토리 정보 확인
console.log("현재 실행 파일명 ", __filename);
console.log("현재 디렉토리명 ", __dirname);

// format 기호 (변환문자열) 사용
// %s : string
// %d : 정수
// %f : 실수
console.log("file: %s", __filename);
console.log("directory: %s", __dirname);
console.log("age: %d", 35);
console.log('객체: %j',{name: 'hong', age:20});
