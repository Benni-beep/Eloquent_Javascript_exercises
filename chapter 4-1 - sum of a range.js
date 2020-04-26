function range(start, end, step = 1) {
    let arr = [];
    if (step > 0) {
        for (let i = start; i <= end; i += step) {
            arr.push(i);
        }
    }
    else if (step < 0) {
        for (let i = start; i >= end; i += step) {
            arr.push(i);
        }
    }
    return arr;
};

function sum(arr) {
    sumArr = 0;
    for (let number of arr) {
        sumArr += number;
    }
    return sumArr;
};

const start = 5;
const end = 2;
const step = -1;

console.log(range(start, end, step));
console.log(sum(range(start, end, step)));