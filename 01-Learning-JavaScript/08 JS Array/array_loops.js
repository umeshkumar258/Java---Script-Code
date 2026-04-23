"use strict";

console.log("=== Looping Through Arrays in JavaScript ===");

const arr = [23, 4, 5, 33];

// ==============================
// 1. Traditional for loop
// ==============================
console.log("\n1. Traditional for loop:");
for (let i = 0; i < arr.length; i++) {
    console.log(`Index: ${i}, Value: ${arr[i]}`);
}
// ✔ Best when you need index control


// ==============================
// 2. for...of loop
// ==============================
console.log("\n2. for...of loop:");
for (const value of arr) {
    console.log(`Value: ${value}`);
}
// ✔ Clean and readable (preferred for values)


// ==============================
// 3. for...in loop (Avoid)
// ==============================
console.log("\n3. for...in loop:");
for (const index in arr) {
    console.log(`Index: ${index}, Value: ${arr[index]}`);
}
// ⚠ Not recommended for arrays (can include inherited properties)


// ==============================
// 4. forEach()
// ==============================
console.log("\n4. forEach():");
arr.forEach((value, index) => {
    console.log(`Index: ${index}, Value: ${value}`);
});
// ⚠ Cannot break or return


// ==============================
// 5. map() (Returns new array)
// ==============================
console.log("\n5. map():");
const doubled = arr.map(value => value * 2);
console.log("Original:", arr);
console.log("Doubled:", doubled);


// ==============================
// 6. filter()
// ==============================
console.log("\n6. filter():");
const greaterThan10 = arr.filter(value => value > 10);
console.log("Values > 10:", greaterThan10);


// ==============================
// 7. while loop
// ==============================
console.log("\n7. while loop:");
let i = 0;
while (i < arr.length) {
    console.log(`Index: ${i}, Value: ${arr[i]}`);
    i++;
}


// ==============================
// 8. do...while loop
// ==============================
console.log("\n8. do...while loop:");
let j = 0;
do {
    console.log(`Index: ${j}, Value: ${arr[j]}`);
    j++;
} while (j < arr.length);


// ==============================
// 9. Advanced (Very Important)
// ==============================

// for...of with index (best modern pattern)
console.log("\n9. for...of with entries():");
for (const [index, value] of arr.entries()) {
    console.log(`Index: ${index}, Value: ${value}`);
}
// ✔ Best modern alternative to traditional for loop


// some() → checks condition
console.log("\n10. some():");
console.log("Any value > 30?", arr.some(v => v > 30));

// every() → checks all
console.log("\n11. every():");
console.log("All values > 0?", arr.every(v => v > 0));


// ==============================
console.log("\n=== End of Demo ===");
