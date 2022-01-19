"use strict";

function funk(...args) {
    if (isArgsNorm(args)) {
        let sum = 0;
        for (let i = 0; i < args.length; i++) {
            sum += args[i];
        }
        return sum;
    } else {
        throw new Error("all parameters type should be a Number");
    }
};

function isArgsNorm(value) {
    for (let i = 0; i < value.length; i++) {
        if (!isAN(value[i])) {
            return false;
        }
    }
    return true;
};

function isAN(value) {
    if (value instanceof Number)
        value = value.valueOf();
    return isFinite(value) && value === parseInt(value, 10);
};

console.log(funk(1,2,3,4));
console.log(funk(1,2,'s',4));