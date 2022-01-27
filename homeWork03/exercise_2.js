"use strict";


function filter(arr, filterFunc) {
    if (Array.isArray(arr) && isFunction(filterFunc)) {
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (filterFunc(arr[i], i, arr)) newArr.push(arr[i]);
        }
        return newArr;
    } else {
        throw new Error("Check your parameters!");
    }
}

function isFunction(param) {
    return typeof param === "function";
}

function getPrime(value, index, arr) {
    let high = Math.floor(Math.sqrt(value)) + 1;
    for (var div = 2; div <= high; div++) {
        if (value % div == 0) {
            return false;
        }
    }
    return true;
}

let numbers = [3, 4, 5, 7, 8, 11, 13, 15, 17, 19, 21, 23, 27, 29, 31, 33, 37, 39, 41];

let primes = filter(numbers, getPrime);

console.log(primes);