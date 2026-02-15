"use strict";

// 1️⃣ Checking Data Types
const numberValue = 7;
const name = "umesh";
const isActive = false;
let notAssigned;

console.log(
  typeof numberValue,
  typeof name,
  typeof isActive,
  typeof notAssigned
);

// 2️⃣ Reverse a Number (Function Version)
function reverseNumber(number) {
  let reversed = 0;

  while (number > 0) {
    const remainder = number % 10;
    reversed = remainder + reversed * 10;
    number = Math.floor(number / 10);
  }

  return reversed;
}

const originalNumber = 616;
const reversedNumber = reverseNumber(originalNumber);

console.log("Original:", originalNumber);
console.log("Reversed:", reversedNumber);

// 3️⃣ Searching in Array (Modern Way)
const numbersArray = [1, 3, 4, 6, 7, 8];

if (numbersArray.includes(6)) {
  console.log("Good");
} else {
  console.log("Not good");
}

// 4️⃣ Block Scope Example
{
  const blockValue = 99;
  console.log("Block Value:", blockValue);
}

// 5️⃣ Floating Number Type
const bigNumber = 8888888.33333;
console.log(typeof bigNumber);

