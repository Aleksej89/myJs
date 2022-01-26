"use strict";

let arr = ['abcd', 'abcde', 'ab', 'abc'];

let nameLengths = arr.map(function (name) {
    return name.length;
});


console.log(nameLengths);