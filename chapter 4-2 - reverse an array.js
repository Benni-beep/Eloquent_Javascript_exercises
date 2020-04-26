function reverseArray(arr){
    revArray = [];
    for (let element of arr){
        revArray.unshift(element)
    }
    return revArray;
}

let arrayValueStrings = ["A", "B", "C"];
console.log(reverseArray(arrayValueStrings));


function reverseArrayInPlace(arr) {

    for (let i = 0; i <= arr.length / 2; i++) {
        temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
}

let arrayValueNumbers = [1, 2, 3, 4, 5];

reverseArrayInPlace(arrayValueNumbers);
console.log(arrayValueNumbers);

