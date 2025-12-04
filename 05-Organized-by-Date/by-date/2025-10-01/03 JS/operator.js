// ==================================
// OPERATORS
// ==================================

console.log("\n---- Operators ----");

let a = 33;
let b = "33";
let grace = 32;

// Arithmetic operators
console.log("Addition:", a + grace);
console.log("Subtraction:", a - grace);
console.log("Multiplication:", a * grace);
console.log("Division:", a / grace);
console.log("Remainder:", a % grace);

// Comparison operators
console.log("a == b :", a == b);   // true (loose equality, checks only value)
console.log("a === b :", a === b); // false (strict equality, checks value + type)
console.log("a != b :", a != b);   // false (values are equal)
console.log("a !== b :", a !== b); // true (different types)

// Logical operators
console.log("a==b && a!==b :", a == b && a !== b);  // true
console.log("a==b || a===b :", a == b || a === b);  // true
console.log("!(a===b) :", !(a === b));              // true

// Assignment operators
let num = 10;
num += 5;  // num = num + 5
console.log("After += 5:", num);

num *= 2;  // num = num * 2
console.log("After *= 2:", num);

// Scope Example (let vs block scope)
{
    let grace = 33;   // this 'grace' is separate (block scoped)
    console.log("Inside block grace:", grace);
}
console.log("Outside block grace:", grace);  // original grace = 32
