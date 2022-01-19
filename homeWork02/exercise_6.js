"use strict";

function isEven(value) {
    if (isAN(value)) {
        return value % 2 === 0;
    } else {
        throw new Error("parameter type is not a Number");
    }
}

function isAN(value) {
    if (value instanceof Number)
        value = value.valueOf();
    return isFinite(value) && value === parseInt(value, 10);
};

console.log(isEven(4));
console.log(isEven(3));
console.log(isEven("asdasd"));