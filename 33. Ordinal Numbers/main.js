"use strict";
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // we can also use for...of loop here.
for (let x = 1; x <= numbers.length; x++) {
    if (x === 1) {
        console.log(x + "st");
    }
    else if (x === 2) {
        console.log(x + "nd");
    }
    else if (x === 3) {
        console.log(x + "rd");
    }
    else {
        console.log(x + "th");
    }
}
