"use strict";

"use strict";

function reduceRight(arr, filterFunc, acc) {
    if (Array.isArray(arr) && isFunction(filterFunc) && isNormParam(acc)) {
        for (let i = arr.length - 1; i >= 0; i--) {
            acc = filterFunc(arr[i], i, arr, acc);
        }
        return acc;
    } else {
        throw new Error("Check your parameters!");
    }
}

function addition(add, i, arr, result) {
    return result + add;
}

function isFunction(param) {
    return typeof param === "function";
}

function isNormParam(param) {
    if (isAN(param) || isString(param)) return true;
    return false;
}

function isAN(value) {
    if (value instanceof Number)
        value = value.valueOf();
    return isFinite(value) && value === parseInt(value, 10);
}

function isString(value) {
    return typeof value === "string";
}

let arr = [0, 1, 2, 3, 4];
let acc = 0;

acc = reduceRight(arr, addition, acc);

console.log(acc);