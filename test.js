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


console.log(fizzBuzz(range(1, 100)))