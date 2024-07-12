"use strict";
let userNames = ['Eric', 'Wilson', 'James', 'admin', 'julia'];
for (let y of userNames) {
    if (y === 'admin') {
        console.log('Hello admin, would you like to see a status report?');
    }
    else {
        console.log(`Hello ${y}, thank you for logging in again.`);
    }
}
