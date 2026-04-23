console.log("=== JavaScript String Methods Demo ===");

// ==============================
// 1. Declaration
// ==============================
const firstName = "Umesh";
const lastName = "Babu";

console.log("Original String:", firstName);

// ==============================
// 2. Accessing Characters
// ==============================
console.log("First Character:", firstName[0]);
console.log("Last Character:", firstName[firstName.length - 1]);
console.log("Out of Range Index:", firstName[10]); // undefined

// ==============================
// 3. Length
// ==============================
console.log("Length:", firstName.length);

// ==============================
// 4. Concatenation
// ==============================
console.log("Using + :", firstName + " " + lastName);
console.log("Using concat():", firstName.concat(" ", lastName, " Bhumi Nanu"));
console.log(`Using Template Literal: My name is ${firstName}`);

// ==============================
// 5. Case Conversion
// ==============================
console.log("Uppercase:", firstName.toUpperCase());
console.log("Lowercase:", lastName.toLowerCase());

// ==============================
// 6. Checking Start/End
// ==============================
console.log("Starts with 'U':", firstName.startsWith("U"));
console.log("Ends with 'h':", firstName.endsWith("h"));

// ==============================
// 7. Slicing & Substring
// ==============================
console.log("Slice (2,4):", firstName.slice(2, 4));

// ==============================
// 8. Searching
// ==============================
console.log("Index of 'm':", firstName.indexOf("m"));
console.log("Includes 'mesh':", firstName.includes("mesh"));

// ==============================
// 9. Replace
// ==============================
const replaced = firstName.replace("sh", "44");
console.log("Replaced String:", replaced);
console.log("Original remains unchanged:", firstName); // immutable

// ==============================
// 10. Trim
// ==============================
const rawText = "   Hello AI World   ";
console.log("Trimmed:", rawText.trim());

// ==============================
// 11. Split (Tokenization)
// ==============================
const sentence = "AI is transforming the world";
const words = sentence.split(" ");
console.log("Words:", words);

// ==============================
// 12. Repeat
// ==============================
console.log("Repeat 3 times:", firstName.repeat(3));

// ==============================
// 13. Convert to Array
// ==============================
console.log("Character Array:", Array.from(firstName));

// ==============================
// 14. Reverse String
// ==============================
const reversed = [...firstName].reverse().join("");
console.log("Reversed:", reversed);

// ==============================
// 15. Modern Useful Methods
// ==============================

// Pad string
console.log("Pad Start:", firstName.padStart(10, "*"));
console.log("Pad End:", firstName.padEnd(10, "*"));

// Trim variants
const messy = "   JS Rocks   ";
console.log("Trim Start:", messy.trimStart());
console.log("Trim End:", messy.trimEnd());

// ==============================
console.log("=== End of Demo ===");
