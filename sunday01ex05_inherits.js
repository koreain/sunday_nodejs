// sunday01ex05_inherits.js

var util = require('util');

var str = util.format("%s님의 나이는 %d세.","최현준",34);

console.log(str);

// 상속

function Parent(){
    this.name = "부모";
}

Parent.prototype.sayHello = function(){
    console.log(this.name+"님 안녕하세요");
}

var p1 = new Parent();
p1.sayHello()


function Child(){
    this.name = '자식';
}

// 구 버전 코드
//Child.prototype = new Parent();
//Child.constructor = Child;

util.inherits(Child, Parent);

var c = new Child();
c.sayHello();

////////////////

