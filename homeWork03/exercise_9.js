"use strict";

function arrayFill(elem, countElem) {
    if (isNormElement(elem) && isAN(countElem)) {
        let newArr = [];
        for (let i = 0; i < countElem; i++) {
            newArr.push(elem);
        }
        return newArr;
    } else {
        throw new Error("Check your parameters for function!");
    }
}

function isNormElement(elem) {
    if (isAN(elem) || Array.isArray(elem) || isString(elem) || isObject(elem)) {
        return true;
    }
    return false;
}

function isAN(value) {
    if (value instanceof Number)
        value = value.valueOf();
    return isFinite(value) && value === parseInt(value, 10);
}

function isObject(value) {
    return typeof value === "object";
}

function isString(value) {
    return typeof value === "string";
}


console.log(arrayFill('xyz', 5));