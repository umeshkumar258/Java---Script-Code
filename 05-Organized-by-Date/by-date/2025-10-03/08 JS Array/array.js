// ======================
// Arrays in JavaScript
// ======================

let array = [1, 2, 5, 6, 8];
let array2 = [55, 676];

console.log("Original array:", array);
console.log("Length of array:", array.length);

// Arrays are MUTABLE
console.log("First element:", array[0]);
array[0] = 8; // Updating the first element
console.log("After changing first element:", array);

// Adding two arrays (not recommended, this converts them to strings)
console.log("array + array2:", array + array2);

// Correct way: concat()
console.log("array.concat(array2):", array.concat(array2));

// ======================
// Strings vs Arrays
// ======================

let string = "umesh";
string[0] = "b"; // Strings are IMMUTABLE
console.log("Immutable string example:", string);

// ======================
// Type Checking
// ======================

console.log("typeof array:", typeof array); // object
console.log("array2.toString():", array2.toString()); // converts array → string
console.log("typeof array2:", typeof array2); // object
console.log("typeof string:", typeof string); // string

// ======================
// Array Methods
// ======================

// indexOf()
console.log("Index of '8' in array:", array.indexOf(8));

// filter() (returns a new array with elements that pass a condition)
console.log("Filter > 5:", array.filter(num => num > 5));

// sort() (WARNING: sorts as strings by default!)
console.log("Sorted array:", array.sort());

// reverse()
console.log("Reversed array:", array.reverse());

// pop() → removes last element
console.log("Popped element:", array.pop());
console.log("After pop:", array);

// push() → adds new element(s) to end
array.push("harry");
console.log("After push('harry'):", array);

// shift() → removes first element
console.log("Shifted element:", array.shift());
console.log("After shift:", array);

// unshift() → adds new element(s) to start
array.unshift("umesh");
console.log("After unshift('umesh'):", array);

// splice() → (start, deleteCount, ...items) → modifies original array
console.log("splice(0,2,334,255,3243):", array.splice(0, 2, 334, 255, 3243));
console.log("After splice:", array);

// slice() → returns a portion of the array (does NOT modify original)
console.log("slice(2):", array.slice(2));

// ======================
// Extra Important Methods
// ======================

// includes() → checks if value exists
console.log("Array includes 255?", array.includes(255));

// map() → creates a new array with transformation
console.log("Array map (x*2):", array.map(x => x * 2));

// reduce() → reduces array to a single value
let sum = array.reduce((acc, curr) => acc + (typeof curr === "number" ? curr : 0), 0);
console.log("Sum of numeric values in array:", sum);

// forEach() → loop through array
console.log("forEach example:");
array.forEach((val, index) => console.log(`Index ${index}:`, val));

// join() → joins elements into a string
console.log("Array joined with '-':", array.join("-"));

// flat() → flattens nested arrays
let nested = [1, [2, [3, 4]]];
console.log("Flattened array:", nested.flat(2));

// ======================1
// Combining Arrays
// ======================
let array3 = [44, 66643];
console.log("array.concat(array2.concat(array3)):", array.concat(array2.concat(array3)));
