// ======================
// Map, Filter, Reduce - Clean Version
// ======================

// Original array
const arr = [2, 4, 6, 77];

// ----------------------
// 1️⃣ map() → Transform
// ----------------------

const squared = arr.map(num => num ** 2);

console.log("Original:", arr);
console.log("Squared:", squared);

// ----------------------
// 2️⃣ filter() → Select
// ----------------------

const greaterThanSeven = squared.filter(num => num > 7);

console.log("Greater than 7:", greaterThanSeven);

// ----------------------
// 3️⃣ reduce() → Aggregate
// ----------------------

const arr2 = [1, 2, 3, 4, 5, 6];

// Product
const product = arr2.reduce((acc, curr) => acc * curr, 1);

// Sum
const sum = arr2.reduce((acc, curr) => acc + curr, 0);

// Maximum
const max = arr2.reduce((acc, curr) => Math.max(acc, curr));

console.log("Product:", product);
console.log("Sum:", sum);
console.log("Max:", max);


console.log("i am back")
