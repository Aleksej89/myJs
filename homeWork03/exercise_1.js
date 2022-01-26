"use strict";

function forEach(arr, muFunk) {
    if (Array.isArray(arr) && isFunction(muFunk)) {
        for (let i = 0; i < arr.length; i++) {
            muFunk(arr, i, arr);
        }
    } else {
        throw new Error("Check your parameters!");
    }
}

function isFunction(param) {
    return typeof param === "function";
}

let arr = [1, 2, 3];

forEach(arr, (item, i, arr) => {
    console.log(i + ": " + item + " (in Array " + arr + ")");
});