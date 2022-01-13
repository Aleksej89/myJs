"use strict";

function division(number) {
    let countDivisionOperations = 0;
    do {
        number = number / 2;
        countDivisionOperations++;
    } while (number > 50);

    let answer = {
        number: number,
        count: countDivisionOperations
    };
    return answer;
}

let myAnswer = division(1000);

console.log(myAnswer.number);
console.log(myAnswer.count);