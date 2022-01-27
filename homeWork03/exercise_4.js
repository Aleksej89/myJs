"use strict";

function some(arr, filterFunc) {
    if (Array.isArray(arr) && isFunction(filterFunc)) {
        for (let i = 0; i < arr.length; i++) {
            if (filterFunc(arr[i],i,arr)) return true;
        }
        return false;
    } else {
        throw new Error("Check your parameters!");
    }
}

function isFunction(param) {
    return typeof param === "function";
}

function isBigEnough(element, index, array) {
    return element >= 10;
}

let numbers = [3, 4, 5, 7, 8, 11, 13, 15, 17, 19, 21, 23, 27, 29, 31, 33, 37, 39, 41];

let primes = some(numbers, isBigEnough);

console.log(primes);