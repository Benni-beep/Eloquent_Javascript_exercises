const {loop, loop2} = require('./loop');
const {every, every2} = require('./every');

loop(3, n => n > 0, n => n - 1, console.log);
console.log(every([1, 3, 5], n => n < 10));
console.log(every([2, 4, 16], n => n < 10));
console.log(every([], n => n < 10));