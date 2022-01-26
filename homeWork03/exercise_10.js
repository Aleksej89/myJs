"use strict";

function reverceArr(arr) {
    if (Array.isArray(arr)) {
        if (arr.length === 0) {
            throw new Error("zero length!");
        } else {
            let temp = null;
            for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
                temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    } else {
        throw new Error("it is not Array!");
    }
    console.log(arr);
}

reverceArr([1, 2, 3]);