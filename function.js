"use strict";
//Functions
//Funcation types
//Optional and Default parameters
//Rest Parameters
//Overloads
function abcdef(a, b) {
    if (typeof a === "string" && typeof b === "undefined") {
        console.log("hey 1 ");
    }
    if (typeof a === "string" && typeof b === "number") {
        return 123;
    }
    else {
        throw new Error("something is wrong");
    }
}
abcdef("pawan"); // Will print "hey 1"
abcdef("jai ho", 123); // Will return 123
