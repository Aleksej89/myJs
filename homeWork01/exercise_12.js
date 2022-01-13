"use strict";

let arr = [1, 2, 3, -5, -2, 1, -4];

function arraySum(arr) {
    let sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0)
            sum += arr[i];
    }
    return sum;
}

console.log(arraySum(arr));