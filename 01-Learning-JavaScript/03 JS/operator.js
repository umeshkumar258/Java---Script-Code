// ==================================
// OPERATORS
// ==================================

console.log("\n---- Operators ----");

let a = 33;
let b = "33";
let grace = 32;

// ==================================
// ARITHMETIC OPERATORS
// ==================================

console.log("Addition:", a + grace);
console.log("Subtraction:", a - grace);
console.log("Multiplication:", a * grace);
console.log("Division:", a / grace);
console.log("Remainder:", a % grace);

// ==================================
// COMPARISON OPERATORS
// ==================================

console.log("a == b:", a == b);      // true → checks value only
console.log("a === b:", a === b);    // false → checks value and type
console.log("a != b:", a != b);      // false → values are equal
console.log("a !== b:", a !== b);    // true → types are different

// ==================================
// LOGICAL OPERATORS
// ==================================

console.log("a == b && a !== b:", a == b && a !== b);  // true
console.log("a == b || a === b:", a == b || a === b);  // true
console.log("!(a === b):", !(a === b));                 // true

// ==================================
// ASSIGNMENT OPERATORS
// ==================================

let num = 10;

num += 5;   // Same as: num = num + 5
console.log("After += 5:", num);

num *= 2;   // Same as: num = num * 2
console.log("After *= 2:", num);

// ==================================
// BLOCK SCOPE
// ==================================

{
    let grace = 33;   // Block-scoped variable
    console.log("Inside block grace:", grace);
}

console.log("Outside block grace:", grace); // Original grace = 32

console.log("It is finished");
