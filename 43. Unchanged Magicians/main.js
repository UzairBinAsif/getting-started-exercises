"use strict";
let magiciansNames = ["David Bombal", "Christine", "Lucifer"];
// let magiciansNamesCopy = ["David Bombal", "Christine", "Lucifer"];
function show_magicians(arr) {
    for (let x = 0; x <= (arr.length - 1); x++) {
        console.log(arr[x]);
    }
}
function make_great(arr) {
    let newArray = [...arr];
    for (let x = 0; x < arr.length; x++) {
        newArray[x] = "The Great " + newArray[x];
    }
    return newArray;
}
console.log("Original Array.");
show_magicians(magiciansNames);
console.log("\nModified Array.");
let newMagiciansNames = make_great(magiciansNames);
show_magicians(newMagiciansNames);
console.log("\nOriginal Array.");
show_magicians(magiciansNames);
