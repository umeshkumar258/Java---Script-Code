"use strict";

// --------------------
// Printing a string
// --------------------
console.log("Umesh Kumar JB");

// --------------------
// Using const (Best Practice)
// --------------------
const firstNumber = 5;
const secondNumber = 39;
const personName = "Harry";

// Adding numbers
console.log("Total:", firstNumber + secondNumber + 333);

// Printing string
console.log("Name:", personName);

// Checking types
console.log("Types:");
console.log(
  typeof firstNumber,
  typeof secondNumber,
  typeof personName
);

// Valid variable naming
const userName = "umesh";
console.log("Username:", userName);

// --------------------
// Const Example
// --------------------
const fixedValue = 30;
// fixedValue = 63; ❌ Not allowed

// --------------------
// Let Example (Block Scope)
// --------------------
let a = 93;
let b = 200;

console.log("Sum of a and b:", a + b);

// Block scope demonstration
{
  let a = 300; // Block-scoped variable
  console.log("Inside block:", a);
}

console.log("Outside block:", a);
