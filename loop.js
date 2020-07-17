"use strict"
/**
 * Loop is a function that takes a value, a predicate function, an update
 * function and a body function and, on every iteration, tests the value with
 * the predicate function, if that is false, stops the iteration.a Otherwise,
 * it applies the body function to the value, and then the update function,
 * before it goes to the next iteration.
 */
function loop(value, predicate, update, body) {
    for (let i = value; predicate(i); i = update(i)) {
        body(i)
    }
}

function loop2(value, predicate, update, body) {
    let i = value;
    while (predicate(i)) {
        body(i);
        i = update(i);
    }
}

module.exports = {loop, loop2};