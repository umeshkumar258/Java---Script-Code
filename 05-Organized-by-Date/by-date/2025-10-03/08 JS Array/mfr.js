// ======================
// Map, Filter, Reduce in JavaScript
// ======================

let arr = [2, 4, 6, 77];

// ----------------------
// 1. map() method
// ----------------------
// map() creates a NEW array by applying a function to each element of the original array
// It does NOT modify the original array

let newArr = arr.map((elem, index, array) => {
    // elem → current element
    // index → current index
    // array → the original array
    return elem ** 2; // square each element
});

console.log("Original array:", arr);
console.log("Squared array using map():", newArr);

// ----------------------
// 2. filter() method
// ----------------------
// filter() creates a NEW array with elements that pass a condition (return true)
// Original array is NOT modified

const greaterThanSeven = (element) => {
    return element > 7; // returns true if element > 7
};

let filteredArr = newArr.filter(greaterThanSeven);

console.log("Filtered array (elements > 7):", filteredArr);

// ----------------------
// 3. reduce() method
// ----------------------
// reduce() reduces an array to a single value by applying a function (accumulator, currentValue)
// Original array is NOT modified

let arr2 = [1, 2, 3, 4, 5, 6];

const multiply = (accumulator, currentValue) => {
    return accumulator * currentValue;
};

let product = arr2.reduce(multiply); 
console.log("Product of all elements using reduce():", product);

// ----------------------
// Extra Notes
// ----------------------

// 1. map() → transforms elements
// 2. filter() → selects elements based on a condition
// 3. reduce() → reduces array to one value (sum, product, max, min, etc.)

// Example: sum using reduce()
let sum = arr2.reduce((acc, curr) => acc + curr, 0); // 0 is the initial value
console.log("Sum of elements using reduce():", sum);

// Example: finding maximum using reduce()
let max = arr2.reduce((acc, curr) => (curr > acc ? curr : acc), arr2[0]);
console.log("Maximum element using reduce():", max);
