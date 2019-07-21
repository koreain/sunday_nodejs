// sunday01ex07_EventEmitter3.js

var Calc = require('./sunday01ex07_EventEmitter2');
var calc = new Calc();
calc.emit('stop');
console.log(Calc.title);