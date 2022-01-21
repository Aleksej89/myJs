"use strict";

function funk(numb) {
    if (isAN(numb)) {
        return Math.pow(numb, 3);
    } else {
        throw new Error("parameter type is not a Number");
    }
};

function isAN(value) {
    if (value instanceof Number)
        value = value.valueOf();
    return isFinite(value) && value === parseInt(value, 10);
};

console.log(funk(5));