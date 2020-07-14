"use strict"
const SCRIPTS = require('./05_higher_order/code/scripts.js');

// const rtlScripts = SCRIPTS.filter(script => script.direction === "rtl");
// const rtlScriptsNames = rtlScripts.map(script => script.name);

// console.log(rtlScriptsNames)

console.log(SCRIPTS.filter(script => script.direction === "rtl").map(script => script.name))