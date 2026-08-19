console.log("JavaScript String Methods");

const firstName = "Umesh";
const lastName = "Babu";

console.log("Name:", firstName);

// Accessing characters
console.log("First character:", firstName[0]);
console.log("Last character:", firstName[firstName.length - 1]);
console.log("Length:", firstName.length);

// Joining strings
console.log("Full name:", firstName + " " + lastName);
console.log("Using concat:", firstName.concat(" ", lastName));
console.log(`Hello, my name is ${firstName}`);

// Changing case
console.log("Uppercase:", firstName.toUpperCase());
console.log("Lowercase:", lastName.toLowerCase());

// Checking a string
console.log(firstName.startsWith("U"));
console.log(firstName.endsWith("h"));
console.log(firstName.includes("mesh"));

// Finding characters
console.log("Position of m:", firstName.indexOf("m"));

// Getting part of a string
console.log("Part of name:", firstName.slice(2, 4));

// Replacing text
const newName = firstName.replace("sh", "44");
console.log("After replace:", newName);
console.log("Original name:", firstName);

// Removing extra spaces
const message = "   Hello AI World   ";
console.log("Trimmed:", message.trim());

// Splitting a sentence
const sentence = "AI is transforming the world";
const words = sentence.split(" ");
console.log("Words:", words);

// Repeating a string
console.log(firstName.repeat(3));

// Convert string to array
const characters = Array.from(firstName);
console.log("Characters:", characters);

// Reverse a string
const reversed = firstName.split("").reverse().join("");
console.log("Reversed:", reversed);

// Padding
console.log(firstName.padStart(10, "*"));
console.log(firstName.padEnd(10, "*"));

// Trim only one side
const text = "   JavaScript Rocks   ";
console.log(text.trimStart());
console.log(text.trimEnd());

console.log("Done!");
