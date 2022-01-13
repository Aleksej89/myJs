"use strict";

function ifElse(key) {
    if (key === "a") {
        console.log("a");
    } else if (key === "b" || key === "c" || key === "c" || key === "e") {
        console.log("others");
    } else {
        console.log("unknown");
    }
}

ifElse("c");