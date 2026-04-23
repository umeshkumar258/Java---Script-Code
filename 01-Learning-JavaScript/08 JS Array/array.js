"use strict";

console.log("=== JavaScript Arrays (Clean Demo) ===");

// ==============================
// 1. Declaration
// ==============================
const numbers = [1, 2, 5, 6, 8];
const moreNumbers = [55, 676];

console.log("Original:", numbers);
console.log("Length:", numbers.length);

// ==============================
// 2. Mutability
// ==============================
numbers[0] = 8;
console.log("Updated First Element:", numbers);

// ==============================
// 3. Combine Arrays
// ==============================
const combined1 = numbers.concat(moreNumbers);
const combined2 = [...numbers, ...moreNumbers];

console.log("Concat:", combined1);
console.log("Spread (Modern):", combined2);

// ==============================
// 4. Sorting
// ==============================
const sorted = [...numbers].sort((a, b) => a - b);
console.log("Sorted (Numeric):", sorted);

// ==============================
// 5. Iteration Methods
// ==============================

// Filter
const filtered = numbers.filter(n => n > 5);
console.log("Filter > 5:", filtered);

// Map
const doubled = numbers.map(n => n * 2);
console.log("Doubled:", doubled);

// Reduce
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum:", sum);

// ==============================
// 6. Slice vs Splice
// ==============================

// Slice (non-mutating)
const sliced = numbers.slice(1, 3);
console.log("Slice (1,3):", sliced);

// Splice (mutating)
const copy = [...numbers];
copy.splice(1, 2);
console.log("After Splice:", copy);

// ==============================
// 7. Extra Useful Methods
// ==============================

// Find
const found = numbers.find(n => n > 5);
console.log("First > 5:", found);

// Includes
console.log("Includes 6:", numbers.includes(6));

// Push & Pop
const temp = [...numbers];
temp.push(100);
temp.pop();
console.log("After Push & Pop:", temp);

// ==============================
console.log("=== End of Demo ===");
