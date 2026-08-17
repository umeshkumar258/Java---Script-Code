"use strict";

const arr = [23, 4, 5, 33];

console.log("Array:", arr);

// 1. for loop
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// 2. for...of
for (let value of arr) {
    console.log(value);
}

// 3. for...in
for (let index in arr) {
    console.log(index, arr[index]);
}

// 4. forEach
arr.forEach(function(value) {
    console.log(value);
});

// 5. map
let doubled = arr.map(function(value) {
    return value * 2;
});
console.log("Doubled:", doubled);

// 6. filter
let result = arr.filter(function(value) {
    return value > 10;
});
console.log("Greater than 10:", result);

// 7. while loop
let i = 0;
while (i < arr.length) {
    console.log(arr[i]);
    i++;
}

// 8. do...while
let j = 0;
do {
    console.log(arr[j]);
    j++;
} while (j < arr.length);

// 9. some
console.log(arr.some(value => value > 30));

// 10. every
console.log(arr.every(value => value > 0));
