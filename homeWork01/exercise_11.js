"use strict";

let arr = [2, 5, 9, 15, 0, 4];

function arraySum(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 3 && arr[i] < 10)
            console.log(arr[i]);
    }
}

console.log(arraySum(arr));