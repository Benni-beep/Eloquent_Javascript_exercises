/**
 * Use the reduce method in combination with the concat method 
 * to “flatten” an array of arrays into a single array 
 * that has all the elements of the original arrays.
 */

let arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce((arr1, arr2) => arr1.concat(arr2)));

// const reducer = (accumulator, currentValue) => accumulator.concat(currentValue);

// console.log(arrays.reduce(reducer));

// → [1, 2, 3, 4, 5, 6]