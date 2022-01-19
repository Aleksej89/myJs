"use strict";


function consoleRecMain(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("parameter type should be an array");
    } else {
        if (arr.length === 0) {
            throw new Error("parameter can't be an empty");
        } else {
            consoleRec(arr, 0);
        }
    }
}

function consoleRec(arr, n) {
    console.log(arr[n++]);
    if (n < arr.length) consoleRec(arr, n);
};

consoleRecMain(["AASD","ASDASD","333"]);
consoleRecMain([1,2,3]);
consoleRecMain("ASDASD");