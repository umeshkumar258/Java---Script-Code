//javascript
// Printing a string
console.log("umesh kumar jb");

// --------------------
// Variables with var
// --------------------
var num1 = 5;
var num2 = 39;
var name = "Harry";

// Adding numbers
console.log(num1 + num2 + 333); // 377
// Printing a string
console.log(name);

// Checking the type of variables
console.log(typeof num1, typeof num2, typeof name);

// Example of variable naming with symbols
var $_username = "umesh";
console.log($_username);

// --------------------
// Const Example
// --------------------
const fixedValue = 30;
// fixedValue = fixedValue + 33; // ❌ Not allowed (const values cannot be reassigned)

// --------------------
// Let Example (modern way)
// --------------------
let a = 93;
let b = 200;

console.log("Sum of a and b:", a + b); // 293

// Block scope with let
{
    let a = 300; // This "a" is only inside this block
    console.log("Inside block:", a); // 300
}

console.log("Outside block:", a); // 93
