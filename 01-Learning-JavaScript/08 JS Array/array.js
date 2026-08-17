"use strict";

console.log("JavaScript Array Practice");

const numbers = [1, 2, 5, 6, 8];
const moreNumbers = [55, 676];

console.log("Numbers:", numbers);
console.log("Length:", numbers.length);


// Changing an array value
numbers[0] = 8;
console.log("After changing first element:", numbers);


// Combining two arrays
const combined = numbers.concat(moreNumbers);
console.log("Using concat:", combined);

const combinedArray = [...numbers, ...moreNumbers];
console.log("Using spread:", combinedArray);


// Sorting numbers
const sortedNumbers = [...numbers].sort((a, b) => a - b);
console.log("Sorted array:", sortedNumbers);


// Filter numbers greater than 5
const filteredNumbers = numbers.filter(function (num) {
    return num > 5;
});

console.log("Numbers greater than 5:", filteredNumbers);


// Double every number
const doubledNumbers = numbers.map(function (num) {
    return num * 2;
});

console.log("Doubled numbers:", doubledNumbers);


// Find the total
const total = numbers.reduce(function (sum, num) {
    return sum + num;
}, 0);

console.log("Total:", total);


// Slice does not change the original array
const slicedArray = numbers.slice(1, 3);
console.log("Slice:", slicedArray);


// Splice changes the array
const newArray = [...numbers];
newArray.splice(1, 2);

console.log("After splice:", newArray);


// Find the first number greater than 5
const firstNumber = numbers.find(function (num) {
    return num > 5;
});

console.log("First number greater than 5:", firstNumber);


// Check whether 6 exists
console.log("Does array contain 6?", numbers.includes(6));


// Push adds an element
// Pop removes the last element
const tempArray = [...numbers];

tempArray.push(100);
console.log("After push:", tempArray);

tempArray.pop();
console.log("After pop:", tempArray);

console.log("End of array practice");
