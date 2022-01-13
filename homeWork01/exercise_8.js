"use strict";

let arr = [1, 2, 3, 4];

function arraySum(arr) {
    let sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0 && arr[i] > 3)
            sum += arr[i];
    }
    return sum;
}

console.log(arraySum(arr));