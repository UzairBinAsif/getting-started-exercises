console.log("\n equality/inequality f(x) test");

let a = "ACID"
let b = "base"
console.log("is a == b, NO, I think not.")
console.log(a == b);
let c = "ACID"
let d = "BASE"
console.log("is a == c, Yes")
console.log(a == c);

console.log("\n lowercase f(x) test");

console.log("is a == c in lowercase, NO, I think not.")
console.log(a == c.toLowerCase());
console.log("is b == d in lowercase, Yes.")
console.log(b == d.toLowerCase());

console.log("\n Numerical tests");
let x = 9;
let y = 7;
let z = 28;
console.log("9 is equal to 7+2.");
console.log(x == (y+2))
console.log("but 9 isn't equal to 7 I suppose.");
console.log(x == y)
console.log("9 is greater than 7.");
console.log(x>y)
console.log("but 9 isn't less than 7.");
console.log(x<y)
console.log("28 is greater than & equal to itself.");
console.log(28>=z);
console.log("28 is less than & equal to itself, which is also true.");
console.log(28<=z);

console.log("\n and/or operator test");
let v = 90
let n = 80
let m = 100
console.log("90 is not equal to either 80 or 100, thats truth");
console.log(v != n && v != m);
console.log("since one of the condition is true, output is true, else flse");
console.log(v != n || v == m);
console.log(v == n || v == m);

console.log("\n array test");
let arr = ["uzair", "haseeb", "gian"]
console.log(arr)
console.log("since uzair is in the array, output is true");
console.log(arr[0] == "uzair")
console.log("since asif isn't in the array, output is false");
console.log(arr[0] == "asif")