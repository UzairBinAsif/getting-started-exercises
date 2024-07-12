let a = ["Ali", "Bilal", "Ahmed"]
let b = a.concat(["Usman", "Manahil", "Haris"])

b[0] = "Nawab";  //this works just like .push() function
b[3] = "Maryam"; // adds Maryam to the middle of the array
b.push("Laiba"); // adds Laiba to the middle of the array

console.log("Dear", b[0], "You're Invited to the Dinner.");
console.log("Dear", b[1], "You're Invited to the Dinner.");
console.log("Dear", b[2], "i'm sad to hear about your medical condition, may Allah make your health good.");
console.log("Dear", b[3], "You're Invited to the Dinner.");
console.log("Dear", b[4], "You're Invited to the Dinner.");
console.log("Dear", b[5], "You're Invited to the Dinner.");
console.log("Dear", b[6], "You're Invited to the Dinner.");