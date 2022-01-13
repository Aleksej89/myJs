"use strict";

let arr = [1, 2, 3, 4];

function arraySum(arr) {
    let sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(arraySum(arr));