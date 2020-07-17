// predicate function
// f :: v => boolean

// function isGreaterThan0(n) { return n > 0; }
// function isSmallerThan10(n) { return n < 10; }

// loop(3, n => n > 0, n => n - 1, console.log);
// loop2(3, isGreaterThan0, n => n - 1, console.log);

/**
 * Every takes an array and a predicate and, for every element in that array,
 * asserts that the `preciate` function returns `true`.
 */
function every(arr, predicate) {
    for (const element of arr) {
        if (predicate(element) === false) { return false }
    }
    return true
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true


function every2(arr, predicate) {
    
    // if (arr.some(element => !predicate(element))) return false
    // return true

    // return arr.some(element => !predicate(element)) ? false : true

    return !arr.some(element => !predicate(element))
}

module.exports = {every, every2};

console.log(every2([1, 3, 5], n => n < 10));
// → true
console.log(every2([2, 4, 16], n => n < 10));
// → false
console.log(every2([], n => n < 10));
// → true




// assert.strictEqual(every([1, 3, 5], isSmallerThan10), true)
// assert.strictEqual(every([2, 4, 16], isSmallerThan10), false)
// assert.strictEqual(every([], isSmallerThan10), true)