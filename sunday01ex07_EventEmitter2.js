// sunday01ex07_EventEmitter2.js

var EventEmitter = require('events').EventEmitter;
var util = require('util');
var Calc = function(){
    this.on('stop', function(){
        console.log('Calc에 STOP 이벤트 전달 됨.')
    });
};

Calc.prototype.add = (a,b) => a+b;

util.inherits(Calc,EventEmitter);

module.exports= Calc;
module.exports.title = 'calculator';
