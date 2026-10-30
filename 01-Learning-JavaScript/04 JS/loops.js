"use strict";

// 1. for loop
console.log("=== for loop ===");

for (let i = 1; i <= 5; i++) {
  console.log(i);
}


// 2. for...in loop - Object
console.log("\n=== for...in ===");

const person = {
  name: "Umesh",
  age: 19,
  city: "Bangalore"
};

for (let key in person) {
  console.log(key, person[key]);
}


// 3. for...of loop - Array
console.log("\n=== for...of ===");

const fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
  console.log(fruit);
}


// 4. while loop
console.log("\n=== while loop ===");

let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}


// 5. do...while loop
console.log("\n=== do...while ===");

let j = 1;

do {
  console.log(j);
  j++;
} while (j <= 5);


// 6. forEach
console.log("\n=== forEach ===");

const numbers = [10, 20, 30];

numbers.forEach(function (number) {
  console.log(number);
});
