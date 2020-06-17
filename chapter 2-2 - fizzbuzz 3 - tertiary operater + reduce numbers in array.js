function range(start, end) {
    let array = [];
    for (let i = start; i <= end; i++) {
        array.push(i)
    }
    return array;
}

function fizzBuzz(arr) {
    fizzBuzzArray = [];
    for (number of arr) {
        fizzBuzzArray.push(
            number % 3 == 0 && number % 5 == 0 ? "FizzBuzz" :
                number % 3 == 0 ? "Fizz" :
                    number % 5 == 0 ? "Buzz" :
                        number)
    }
    return fizzBuzzArray;
}

function reduceNumbers(arr) {
    let numbersOnly = [];
    for (element of arr) {
        if (Number.isInteger(element)) { numbersOnly.push(element) }
    }
    return numbersOnly.reduce((total, number) => total + number, 0);
}

console.log(reduceNumbers(fizzBuzz(range(1, 100))));