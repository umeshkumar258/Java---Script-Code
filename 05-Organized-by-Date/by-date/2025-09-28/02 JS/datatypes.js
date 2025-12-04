//javascript
// ---------------------------
// Variables with different data types
// ---------------------------

let x = "umesh Kumar";   // String
let y = 22;              // Number (integer)
let z = 3.333;           // Number (floating point)
const p = true;          // Boolean
let q = undefined;       // Undefined (no value assigned)
let r = null;            // Null (intentional empty value)

// Printing values
console.log(x, y, z, p, q, r);

// Checking the type of variables
console.log("Type of x:", typeof x);  // string
console.log("Type of y:", typeof y);  // number
console.log("Type of z:", typeof z);  // number
console.log("Type of p:", typeof p);  // boolean
console.log("Type of q:", typeof q);  // undefined
console.log("Type of r:", typeof r);  // object (this is a known JavaScript quirk)

// ---------------------------
// Objects
// ---------------------------

let ob = {
    name: "umesh",
    job: "python developer",
    age: 33
};

// Adding a new property to the object
ob.salary = "100 lakh";

// Printing object
console.log(ob);

