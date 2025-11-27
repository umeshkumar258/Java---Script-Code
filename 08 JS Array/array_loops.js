// ======================
// Looping through Arrays in JavaScript
// ======================

let arr = [23, 4, 5, 33];

// ----------------------
// 1. Traditional for loop
// ----------------------
console.log("Using traditional for loop:");
for (let i = 0; i < arr.length; i++) {
    console.log(`Index ${i}, Value: ${arr[i]}`);
}
// ✅ Good when you need index + custom step logic

// ----------------------
// 2. for...of loop (ES6)
// ----------------------
console.log("\nUsing for...of loop:");
for (let num of arr) {
    console.log(`Value: ${num}`);
}
// ✅ Cleaner way when you only care about values

// ----------------------
// 3. for...in loop
// ----------------------
console.log("\nUsing for...in loop:");
for (let index in arr) {
    console.log(`Index: ${index}, Value: ${arr[index]}`);
}
// ⚠️ Usually used for objects, but works for array indexes too

// ----------------------
// 4. forEach() method
// ----------------------
console.log("\nUsing forEach method:");
arr.forEach((value, index, array) => {
    console.log(`Index: ${index}, Value: ${value}, Array: [${array}]`);
});
// ✅ Best when you want to iterate over all elements without breaking

// ----------------------
// 5. map() method
// ----------------------
console.log("\nUsing map method (returns a NEW array):");
let doubled = arr.map(num => num * 2);
console.log("Original array:", arr);
console.log("Doubled array:", doubled);
// ✅ map creates a new array with transformed values

// ----------------------
// 6. while loop
// ----------------------
console.log("\nUsing while loop:");
let i = 0;
while (i < arr.length) {
    console.log(`Index ${i}, Value: ${arr[i]}`);
    i++;
}
// ✅ Flexible loop, useful when condition is not strictly based on array length

// ----------------------
// 7. do...while loop
// ----------------------
console.log("\nUsing do...while loop:");
let j = 0;
do {
    console.log(`Index ${j}, Value: ${arr[j]}`);
    j++;
} while (j < arr.length);
// ✅ Runs at least once, even if condition is false initially
