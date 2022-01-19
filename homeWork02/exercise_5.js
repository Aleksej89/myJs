"use strict";

function creatingNewArr(arr) {
    try {
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (isPositive(arr[i])) {
                newArr.push(arr[i]);
            }
        }
        console.log(newArr);
    } catch (e) {
        throw new Error(e.message);
    }
};

function isPositive(value) {
    if (isAN(value)) {
        if (value > 0) {
            return true;
        } else {
            return false;
        }
    } else {
        throw new Error("parameter type is not a Number");
    }
};

function isAN(value) {
    if (value instanceof Number)
        value = value.valueOf();
    return isFinite(value) && value === parseInt(value, 10);
};

creatingNewArr([1, 2, -4, 3, -9, -1, 7]);
creatingNewArr(["sad", 2, -4, 3, -9, -1, 7]);