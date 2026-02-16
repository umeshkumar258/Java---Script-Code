"use strict";

// ---------------------------
// Primitive Data Types
// ---------------------------

const fullName = "Umesh Kumar";   // String
const age = 22;                   // Number (integer)
const height = 3.333;             // Number (floating point)
const isStudent = true;           // Boolean
let notAssigned;                  // Undefined
const emptyValue = null;          // Null (intentional empty)

// Printing values
console.log("Values:");
console.log(fullName, age, height, isStudent, notAssigned, emptyValue);

// Checking types
console.log("\nData Types:");
console.log("fullName:", typeof fullName);
console.log("age:", typeof age);
console.log("height:", typeof height);
console.log("isStudent:", typeof isStudent);
console.log("notAssigned:", typeof notAssigned);
console.log("emptyValue:", typeof emptyValue); 
// ⚠️ null returns "object" (JavaScript bug from 1995)

// ---------------------------
// Object Example
// ---------------------------

const person = {
  name: "Umesh",
  profession: "Python Developer",
  age: 33,
  salary: 100_00_000, // Numeric instead of string (better practice)
};

// Accessing properties
console.log("\nPerson Details:");
console.log(person);

// Adding new property properly
person.location = "India";

// Updating property
person.age = 34;

console.log("\nUpdated Person:");
console.log(person);
