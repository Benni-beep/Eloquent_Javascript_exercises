"use strict"
const SCRIPTS = require('./05_higher_order/code/scripts.js')

function characterScript(code) {
	for (let script of SCRIPTS) {
		if (script.ranges.some(([from, to]) => {
			return code >= from && code < to;
		})) {
			return script;
		}
	}
	return null;
}

function countBy(items, groupName) {
	let counts = [];
	for (let item of items) {
		let name = groupName(item);
		let known = counts.findIndex(c => c.name == name);
		if (known == -1) {
			counts.push({ name, count: 1 });
		} else {
			counts[known].count++;
		}
	}
	return counts;
}

function dominantDirection(str) {
	const charCodes = str.split("").map(l => l.charCodeAt(0));

	// 1. map determines corresponding script of each character code from array [charCodes] and returns whole scripts as objects in an array
	// 2. filter removes any instance of 'null' from array of scripts object (resulting from " ", "!", ...)
	// 3. map returns array with direction of script for each character
	const directions = charCodes.map(char => characterScript(char)).filter(script => script !== null).map(script => script.direction)

	const ltr = directions.filter(d => d === "ltr").length;
	const rtl = directions.filter(d => d === "rtl").length;
	const ttb = directions.filter(d => d === "ttb").length;

	return ltr > rtl && ltr > ttb ?
		"ltr" :
		rtl > ltr && rtl > ttb ?
			"rtl" :
			"ttb"
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
