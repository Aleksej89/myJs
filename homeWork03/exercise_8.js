"use strict";

function summArr(arr) {
    if (Array.isArray(arr)) {
        let sum = 0;
        if (arr.length === 0) {
            sum = 0;
        } else {
            for (let i = 0; i < arr.length; i++) {
                if (!Array.isArray(arr[i])) {
                    if (isAN(arr[i])) {
                        sum += arr[i];
                    } else {
                        throw new Error("it is not a number!");
                    }
                } else {
                    sum += summArr(arr[i]);
                }
            }
        }
        return sum;
    } else {
        throw new Error("it is not Array!");
    }
}

function isAN(value) {
    if (value instanceof Number)
        value = value.valueOf();
    return isFinite(value) && value === parseInt(value, 10);
};

const arr = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
console.log(summArr(arr)); // 12
const arr2 = [[[[[1, 2]]]]];
console.log(summArr(arr2)); // 3
const arr3 = [[[[[1, 2]]], 2], 1];
console.log(summArr(arr3)); // 6
const arr4 = [[[[[]]]]];
console.log(summArr(arr4)); // 0
const arr5 = [[[[[], 3]]]];
console.log(summArr(arr5)); // 3