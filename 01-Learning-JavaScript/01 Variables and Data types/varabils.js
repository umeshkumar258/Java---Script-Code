"use strict";

// ==============================
// Printing a message
// ==============================
console.log("Umesh Kumar JB");


// ==============================
// Variable Declarations
// ==============================
let a = 55;
var b = 77;
const c = 88; // Cannot be reassigned


// ==============================
// Block 1 → let (Block Scope)
// ==============================
{
    let a = 8888; // New variable, only inside this block
    console.log("Inside block (a):", a);
}

// Outside block
console.log("Outside block (a):", a);


// ==============================
// var behavior
// ==============================
var b = 888; // Redeclaration allowed (not recommended)

const d = 33;


// ==============================
// Block 2 → var (No Block Scope)
// ==============================
{
    var b = 999; // Affects global 'b'
    console.log("Inside block (b):", b);
}

// Outside block
console.log("Outside block (b):", b);
