// sunday01ex06_inherits2.js
// ES6 방식의 새로운 클래스 생성방법

class Parent {
    // 생성자
    constructor(){
        this.name = "Parent"; // 멤버필드 초기화   
        console.log('parent의 생성자');
    }
    // 멤버 함수 추가
    sayHello(){
        console.log(`${this.name}님 안녕하세요`);
    }
}

//let p = new Parent();
//p.sayHello();

class Child extends Parent{
    // 생성자
    constructor(){
        // 부모생성자 명시적으로 호출
        super();
        this.name = "Child"; // 멤버필드 초기화
    }
}

let c = new Child();
c.sayHello();