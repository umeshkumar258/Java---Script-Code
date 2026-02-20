"use strict";

// ======================
// Looping Through Arrays in JavaScript
// ======================

const arr = [23, 4, 5, 33];

// 1️⃣ Traditional for loop
console.log("1. Traditional for loop:");
for (let i = 0; i < arr.length; i++) {
    console.log(`Index: ${i}, Value: ${arr[i]}`);
}
// ✔ Best when you need index control or custom step logic


// 2️⃣ for...of loop (ES6)
console.log("\n2. for...of loop:");
for (const value of arr) {
    console.log(`Value: ${value}`);
}
// ✔ Cleaner syntax when you only need values


// 3️⃣ for...in loop
console.log("\n3. for...in loop:");
for (const index in arr) {
    console.log(`Index: ${index}, Value: ${arr[index]}`);
}
// ⚠ Avoid for arrays in production — better for objects


// 4️⃣ forEach() method
console.log("\n4. forEach() method:");
arr.forEach((value, index) => {
    console.log(`Index: ${index}, Value: ${value}`);
});
// ✔ Cannot use break or return to stop loop


// 5️⃣ map() method (Creates NEW array)
console.log("\n5. map() method:");
const doubled = arr.map(value => value * 2);
console.log("Original:", arr);
console.log("Doubled:", doubled);
// ✔ Used when transforming data


// 6️⃣ filter() method (Bonus Improvement)
console.log("\n6. filter() method:");
const greaterThan10 = arr.filter(value => value > 10);
console.log("Values > 10:", greaterThan10);
// ✔ Used to extract specific values


// 7️⃣ while loop
console.log("\n7. while loop:");
let i = 0;
while (i < arr.length) {
    console.log(`Index: ${i}, Value: ${arr[i]}`);
    i++;
}
// ✔ Useful when loop depends on dynamic condition


// 8️⃣ do...while loop
console.log("\n8. do...while loop:");
let j = 0;
do {
    console.log(`Index: ${j}, Value: ${arr[j]}`);
    j++;
} while (j < arr.length);
// ✔ Executes at least once
