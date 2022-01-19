"use strict";

function dayOfWeek(day) {
    if (isAN(day)) {
        if (day < 1 || day > 7) {
            throw new Error("parameter should be in the range of 1 to 7");
        } else {
            switch (day) {
                case 1:
                    console.log("понедельник");
                    break;
                case 2:
                    console.log("вторник");
                    break;
                case 3:
                    console.log("среда");
                    break;
                case 4:
                    console.log("четверг");
                    break;
                case 5:
                    console.log("пятница");
                    break;
                case 6:
                    console.log("суббота");
                    break;
                case 7:
                    console.log("воскресенье");
                    break;
            };
        };
    } else {
        throw new Error("parameter type is not a Number");
    };
};

function isAN(value) {
    if (value instanceof Number)
        value = value.valueOf();
    return isFinite(value) && value === parseInt(value, 10);
};

dayOfWeek(3);
dayOfWeek("asdasd");