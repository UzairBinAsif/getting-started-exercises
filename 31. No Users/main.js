"use strict";
let userNames = [];
if (userNames.length == 0) {
    console.log("We need to find some users!");
}
else {
    for (let y of userNames) {
        if (y === 'admin') {
            console.log('Hello admin, would you like to see a status report?');
        }
        else {
            console.log(`Hello ${y}, thank you for logging in again.`);
        }
    }
}
