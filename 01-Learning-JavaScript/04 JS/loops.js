"use strict";

// ============================
// 1️⃣ Classic for loop
// ============================
console.log("=== Classic for loop ===");

for (let invoiceNumber = 33; invoiceNumber < 36; invoiceNumber++) {
  console.log(`Invoice Number: ${invoiceNumber}`);
}

// ============================
// 2️⃣ for...in loop (Objects)
// ============================
console.log("\n=== for...in loop ===");

const person = {
  name: "Umesh",
  age: 77,
  city: "Bangalore",
};

for (const key in person) {
  if (Object.hasOwn(person, key)) {
    console.log(`${key}: ${person[key]}`);
  }
}

// ============================
// 3️⃣ for...of loop (Iterables)
// ============================
console.log("\n=== for...of loop ===");

const str = "Umesh";
console.log("Characters in string:");
for (const char of str) {
  console.log(char);
}

const shoppingList = ["Milk", "Bread", "Eggs"];
console.log("\nShopping List:");
for (const item of shoppingList) {
  console.log(`- ${item}`);
}

// ============================
// 4️⃣ while loop
// ============================
console.log("\n=== while loop ===");

let notificationCount = 1;
while (notificationCount < 5) {
  console.log(`Notification #${notificationCount}`);
  notificationCount++;
}

// ============================
// 5️⃣ do...while loop
// ============================
console.log("\n=== do...while loop ===");

let attempts = 0;
do {
  console.log(`Attempt #${attempts + 1}`);
  attempts++;
} while (attempts < 4);

// ============================
// 6️⃣ forEach (Array method)
// ============================
console.log("\n=== forEach loop ===");

const emails = ["a@example.com", "b@example.com", "c@example.com"];

emails.forEach((email, index) => {
  console.log(`Sending email to: ${email} (User #${index + 1})`);
});

// ============================
// 7️⃣ Mixed array processing
// ============================
console.log("\n=== Mixed Array ===");

const mixedList = [33, 55, 22, "Umesh", 3034];

console.log("Using for...of:");
for (const value of mixedList) {
  console.log(value);
}

console.log("Using forEach:");
mixedList.forEach(value => console.log(value));
