// ============================
// 1. Classic for loop
// Use case: Iterating a fixed number of times (e.g., printing invoice numbers)
// ============================
console.log("=== Classic for loop ===");
for (let i = 33; i < 36; i++) {
    console.log("Invoice Number: " + i);
}

// ============================
// 2. for...in loop
// Use case: Iterating over object properties (e.g., user profile details)
// ============================
console.log("\n=== for...in loop ===");
let person = { "name": "Umesh", "age": 77, "city": "Bangalore" };

for (let key in person) {
    // key = property name, person[key] = property value
    console.log(key + ": " + person[key]);
}

// ============================
// 3. for...of loop
// Use case: Iterating over iterable values (e.g., characters in a string, items in a list)
// ============================
console.log("\n=== for...of loop ===");
let str = "Umesh";
console.log("Characters in the string:");
for (let char of str) {
    console.log(char);
}

let shoppingList = ["Milk", "Bread", "Eggs"];
console.log("\nShopping List Items:");
for (let item of shoppingList) {
    console.log("- " + item);
}

// ============================
// 4. while loop
// Use case: Repeat an action until a condition is false (e.g., sending notifications until limit reached)
// ============================
console.log("\n=== while loop ===");
let i = 1;
while (i < 5) {
    console.log("Notification #" + i);
    i++;
}

// ============================
// 5. do...while loop
// Use case: Execute at least once, then repeat while condition is true (e.g., retrying login at least once)
// ============================
console.log("\n=== do...while loop ===");
let attempts = 0;
do {
    console.log("Attempt #" + (attempts + 1));
    attempts++;
} while (attempts < 4);

// ============================
// 6. forEach loop
// Use case: Performing action for each array element (e.g., sending emails to users)
// ============================
console.log("\n=== forEach loop ===");
let emails = ["a@example.com", "b@example.com", "c@example.com"];

emails.forEach(function(email, index) {
    console.log("Sending email to: " + email + " (User #" + (index + 1) + ")");
});

// ============================
// 7. Combining for...of and forEach with mixed array
// Use case: Processing data with mixed types (numbers, strings, etc.)
// ============================
console.log("\n=== for...of and forEach with mixed array ===");
let list = [33, 55, 22, "Umesh", 3034];

console.log("Using for...of:");
for (let num of list) {
    console.log(num);
}

console.log("Using forEach:");
list.forEach(function(nn) {
    console.log(nn);
});

// ============================
// Bonus: for...in check with Object.hasOwn
// Use case: Safely iterate over object properties without inherited ones
// ============================
console.log("\n=== for...in with Object.hasOwn ===");
let object = { a: 1, b: 2, c: 3 };

for (const key in object) {
    if (!Object.hasOwn(object, key)) continue; // skip inherited properties
    const element = object[key];
    console.log(key + " => " + element);
}

// ============================
// Summary: Loops with real-world analogies
// ============================
// for loop: Counting invoices, iterations with known limit
// for...in: Reading object properties like user profile info
// for...of: Reading array/string values like shopping list or string characters
// while: Repeat until a condition is false, e.g., notifications
// do...while: Retry actions at least once, e.g., login attempts
// forEach: Performing actions on array elements, e.g., sending emails
