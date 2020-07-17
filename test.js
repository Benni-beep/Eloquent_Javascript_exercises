"use strict"
const SCRIPTS = require('./05_higher_order/code/scripts.js');

function characterCount(script) {
  return script.ranges.reduce((count, [from, to]) => {

    return count + (to - from);
    
  }, 0);
}

console.log(SCRIPTS.reduce((a, b) => {
  return characterCount(a) < characterCount(b) ? b : a;
}));
// → {name: "Han", …}