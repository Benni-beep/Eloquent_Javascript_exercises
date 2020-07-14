// recursive exercises
// 1. factorial

const numberToFactor = 5;
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}
console.log("factorial of", numberToFactor, ":", factorial(numberToFactor))

//2. exponent

function exponential(base, exponent) {
    if (exponent == 0) return 1;
    return base * exponential(base, exponent - 1);
}

console.log(exponential(5, 3));

// 3. fibonacci

function fibonacci(n) {
    if (n < 3) {
        return [0, 1];
    }
    if (n < 4) {
        return [0, 1, 1];
    }

    let array = fibonacci(n - 1); 
    array.push(array[n - 2] + array[n - 3]); 
    return array;
};

console.log(fibonacci(2))