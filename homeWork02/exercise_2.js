"use strict";

function funk(a, b, c) {
    if (isArgsNorm(a, b, c)) {
        return (a - b) / c;
    } else {
        throw new Error("all parameters type should be a Number");
    }
};

function isArgsNorm(a, b, c) {
    if (isAN(a) && isAN(b) && isAN(c)) {
        return true;
    }
    return false;
};

function isAN(value) {
    if (value instanceof Number)
        value = value.valueOf();
    return isFinite(value) && value === parseInt(value, 10);
};

console.log(funk(1, 2, 3));
console.log(funk(1, 2, 's'));