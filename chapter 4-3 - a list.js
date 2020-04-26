const array = [1, 2, 3]

// function arrayToList (arr){
//     let list = {};
//     for (let number of arr){
//         list.value = number;
//         list.rest = ;
//         // if (arr.indexOf(number) == arr.length) list.rest = null;
//         // else list.rest = arrayToList(arr);        
//     }
//     return list;
// }


function arrayToList(arr) {
    let list = {};
    for (let i = 0; i < arr.length; i++) {
        list.value = arr[i];
        // if value+1 = arr.length
        let valuePlusOne = arr[i+1]
        list.rest = valuePlusOne;
    }
    return list;
}


console.log(arrayToList(array));