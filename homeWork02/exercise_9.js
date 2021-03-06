"use strict";

const DEFAULT_VALUE = 0;

function addition(arrFirst, arrSecond) {
    if (Array.isArray(arrFirst) && Array.isArray(arrSecond)) {
        if (arrFirst.length === DEFAULT_VALUE && arrSecond.length === DEFAULT_VALUE) {
            return [];
        } else {
            if (arrFirst.length === DEFAULT_VALUE) {
                return arrSecond;
            } else if (arrSecond.length === DEFAULT_VALUE) {
                return arrFirst;
            } else {
                return getAnswer(arrFirst, arrSecond);
            }
        }
    } else {
        throw new Error("One of the arguments is not Array");
    }
};

function getAnswer(arrFirst, arrSecond) {
    let numerator = BigInt(getNumberStrFromArr(arrFirst));
    let denominator = BigInt(getNumberStrFromArr(arrSecond));
    let tempValue = DEFAULT_VALUE;
    if (denominator > numerator) {
        tempValue = denominator;
        denominator = numerator;
        numerator = tempValue;
    }
    let strNumerator = String(numerator);
    let strDenominator = String(denominator);
    let units = "";
    if (strNumerator.length > strDenominator.length) {
        for (let i = DEFAULT_VALUE; i < strDenominator.length; i++) {
            if ((BigInt(strNumerator[i]) + BigInt(strDenominator[i])) > 9) units += 1;
            else units += " ";
        }
    } else {
        for (let i = DEFAULT_VALUE; i < strNumerator.length; i++) {
            if ((BigInt(strNumerator[i]) + BigInt(strDenominator[i])) > 9) units += 1;
            else units += " ";
        }
    }
    let answer = String(numerator + denominator).split("");
    for (let i = DEFAULT_VALUE; i < answer.length; i++) {
        answer[i] = Number(answer[i]);
    }
    return answer;
};

function getNumberStrFromArr(arr) {
    let number = "";
    if (arr.length !== DEFAULT_VALUE) {
        for (let i = DEFAULT_VALUE; i < arr.length; i++) {
            if (isAN(arr[i])) {
                number += arr[i];
            }
        }
    }
    return number;
};

function isAN(value) {
    if (value instanceof Number)
        value = value.valueOf();
    return isFinite(value) && value === parseInt(value, 10);
};

console.log(addition([2, 4, 3], [5, 6, 4]));
console.log(addition([1, 4, 5], [4, 4, 2]));
console.log(addition([1, 1, 1], []));
console.log(addition([], [9, 9, 9]));
console.log(addition([9, 9, 9], [9, 9, 9]));
console.log(addition([], []));
console.log(addition([], [0]));
console.log(addition([0], [0]));
console.log(addition([1, 1, 1, 1, 1, 1, 1, 1], [1, 0]));
console.log(addition([9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9], [1]));