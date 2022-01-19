"use strict";

function getDivisors(value) {
    if (isAN(value)) {
        if (value === 0) {
            throw new Error(" parameter can't be a 0");
        } else {
            let divisions = [];
            for (let i = 1; i <= value; i++) {
                if (value % i === 0) divisions.push(i);
            }
            console.log(divisions);
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

getDivisors(12);