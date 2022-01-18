"use strict";

const DEFAULT_NUMB = 0;

function addition(arrFirst, arrSecond) {
    if (Array.isArray(arrFirst) && Array.isArray(arrSecond)) {
        if (arrFirst.length === DEFAULT_NUMB) {
            return arrSecond;
        } else if (arrSecond.length === DEFAULT_NUMB) {
            return arrFirst;
        } else if (arrFirst.length === DEFAULT_NUMB && arrSecond.length === DEFAULT_NUMB) {
           return [];
        } else {
            return getAnswer(getNumberFromArr(arrFirst), getNumberFromArr(arrSecond));
        }
    } else {
        throw new Error("One of the arguments is not Array");
    }
};

function getNumberFromArr(arr) {
    let number = "";
    if (arr.length !== DEFAULT_NUMB) {
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] === "number") {
                number += arr[i];
            }
        }
    }
    return BigInt(number);
};

function getAnswer(nfirstNum, nsecondNum) {
    if (!nfirstNum) {
        nfirstNum = DEFAULT_NUMB;
    }
    if (!nsecondNum) {
        nsecondNum = DEFAULT_NUMB;
    }
    let temp = DEFAULT_NUMB;
    if (nsecondNum > nfirstNum) {
        temp = nsecondNum;
        nsecondNum = nfirstNum;
        nfirstNum = temp;
    }
    let sfirstNum = String(nfirstNum);
    let ssecondNum = String(nsecondNum);
    let units = "";
    if (sfirstNum.length > ssecondNum.length) {
        for (let i = 0; i < ssecondNum.length; i++) {
            if ((BigInt(sfirstNum[i]) + BigInt(ssecondNum[i])) > 9) units += 1;
            else units += " ";
        }
    }
    else {
        for (let i = 0; i < sfirstNum.length; i++) {
            if ((BigInt(sfirstNum[i]) + BigInt(ssecondNum[i])) > 9) units += 1;
            else units += " ";
        }
    }
    let answer = String(nfirstNum + nsecondNum).split("");
    for (let i = DEFAULT_NUMB; i < answer.length; i++) {
        answer[i] = Number(answer[i]);
    }
    return answer;
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