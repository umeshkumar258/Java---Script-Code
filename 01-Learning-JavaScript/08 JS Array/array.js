"use strict";

console.log("=== Arrays in JavaScript ===");

const numbers = [1, 2, 5, 6, 8];
const moreNumbers = [55, 676];

console.log("Original:", numbers);
console.log("Length:", numbers.length);

// Mutability
numbers[0] = 8;
console.log("Updated first element:", numbers);

// Concat
const combined = numbers.concat(moreNumbers);
console.log("Combined:", combined);

// Spread operator (Modern way)
const combinedModern = [...numbers, ...moreNumbers];
console.log("Combined with spread:", combinedModern);

// Numeric sort
console.log("Sorted numeric:", [...numbers].sort((a, b) => a - b));

// Filter
console.log("Filter > 5:", numbers.filter(n => n > 5));

// Map
console.log("Doubled:", numbers.map(n => n * 2));

// Reduce
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum:", sum);

// Slice (non-mutating)
console.log("Slice(1,3):", numbers.slice(1, 3));

// Splice (mutating)
const copy = [...numbers];
copy.splice(1, 2);
console.log("After splice:", copy);
