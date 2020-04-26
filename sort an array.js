function buildRandomArray(limit) {
    array = [];
    for (let counter = 0; counter <= limit; counter++) {
        array.push(Math.floor(Math.random() * limit));
    }
    return array;
}

function sortArray(input) {
    newArray = [];
    while (input.length > 0) {
        smallestNumber = Math.min.apply(null, input);
        smallesNumberPosition = input.indexOf(smallestNumber);
        newArray.push(smallestNumber);
        input.splice(smallesNumberPosition, 1);
    };
    return newArray;
}

let listOfRandomNumbers = buildRandomArray(50);
console.log(sortArray(listOfRandomNumbers));