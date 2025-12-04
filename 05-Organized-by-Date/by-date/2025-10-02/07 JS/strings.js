console.log("=== JavaScript Strings Examples ===");

// Basic string declaration
let str = "Umesh";
let str2 = "Babu";

console.log("Original string:", str);

// Accessing characters (0-based index)
console.log("First character:", str[0]); // U
console.log("Last character:", str[str.length - 1]); // h

// Trying to access an out-of-range index
console.log("Character at index 5 (undefined):", str[5]);

// String length
console.log("Length of str:", str.length);

// String concatenation
console.log("Concatenation with + :", str + str2);
console.log("Concatenation with concat():", str.concat(str2, " Bhumi", " Nanu"));

// Template literals (preferred for dynamic strings)
console.log(`Using template literal: My name is ${str}`);

// Changing case
console.log("Uppercase:", str.toUpperCase());
console.log("Lowercase:", str2.toLowerCase());

// Checking start and end of string
console.log("Ends with 'h'? :", str.endsWith("h"));
console.log("Starts with 'U'? :", str.startsWith("U"));

// Slicing strings
console.log("Slice str[2,4]:", str.slice(2, 4));

// Finding index of character
console.log("Index of 'm':", str.indexOf("m"));

// Replacing substring
console.log("Replace 'sh' with '44':", str.replace("sh", "44"));

// Strings are immutable
console.log("Original string after replace (unchanged):", str);

// Trimming whitespace
let str3 = "   Hello AI World   ";
console.log("Trimmed string:", str3.trim());

// Splitting strings (useful in NLP and AI for tokenization)
let sentence = "AI is transforming the world";
let words = sentence.split(" ");
console.log("Split sentence into words:", words);

// Checking inclusion
console.log("Does sentence include 'AI'? :", sentence.includes("AI"));

// Repeating strings
console.log("Repeat str 3 times:", str.repeat(3));

// Converting to array of characters (for AI preprocessing)
console.log("Array of characters:", Array.from(str));

// Reversing a string (common in text manipulation tasks)
let reversed = str.split("").reverse().join("");
console.log("Reversed string:", reversed);

console.log("=== End of String Examples ===");
