"use strict";

function checkLogin(login){
    return (login == "Pitter") ? "Hi" :
    (login == "Owner") ? "Hello" :
    (login == "") ? "unknown" :
    "default";
}
    
console.log(checkLogin("sdasd"));