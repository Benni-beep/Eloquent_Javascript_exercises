const array = [0,1,2,3,4,5];
const test = array.push("push"); // alters original array, returns new array length
const arrayConcat = array.concat("concat"); //copies array, adds to it
const arraySpread = [...array, "spread"]; //copies array, adds to it

console.log(
    "test:", test,
    "\narrayConcat:", arrayConcat,
    "\narraySpread:", arraySpread
    );