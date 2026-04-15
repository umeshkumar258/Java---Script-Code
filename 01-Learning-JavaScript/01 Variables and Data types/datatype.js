"use strict";

// 1️⃣ Data Types
const numberValue = 7;
const userName = "Umesh";
const isActive = false;
let notAssigned;

console.log(
  typeof numberValue,
  typeof userName,
  typeof isActive,
  typeof notAssigned
);

// 2️⃣ Reverse Number Function
function reverseNumber(num) {
  if (num < 0) return -reverseNumber(-num);

  let reversed = 0;

  while (num > 0) {
    let remainder = num % 10;
    reversed = reversed * 10 + remainder;
    num = Math.floor(num / 10);
  }

  return reversed;
}

const originalNumber = 616;
const reversedNumber = reverseNumber(originalNumber);

console.log(`Original: ${originalNumber}`);
console.log(`Reversed: ${reversedNumber}`);

// 3️⃣ Array Search
const numbersArray = [1, 3, 4, 6, 7, 8];
const searchValue = 6;

console.log(
  numbersArray.includes(searchValue)
    ? `${searchValue} found ✅`
    : `${searchValue} not found ❌`
);

// 4️⃣ Block Scope
{
  const blockValue = 99;
  console.log(`Block Value: ${blockValue}`);
}

// 5️⃣ Number Type
const bigNumber = 8888888.33333;
console.log(typeof bigNumber);
