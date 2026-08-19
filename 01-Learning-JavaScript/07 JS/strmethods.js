console.log("JavaScript String Methods 🚀");

const name = "Umesh Kumar";
const text = "   JavaScript is awesome   ";


// 1. Length
console.log("Length:", name.length);


// 2. Access characters
console.log("First character:", name[0]);
console.log("Last character:", name[name.length - 1]);


// 3. toUpperCase()
console.log("Uppercase:", name.toUpperCase());


// 4. toLowerCase()
console.log("Lowercase:", name.toLowerCase());


// 5. charAt()
console.log("Character at index 2:", name.charAt(2));


// 6. includes()
console.log("Contains 'Kumar':", name.includes("Kumar"));


// 7. startsWith()
console.log("Starts with U:", name.startsWith("U"));


// 8. endsWith()
console.log("Ends with r:", name.endsWith("r"));


// 9. indexOf()
console.log("Index of 'm':", name.indexOf("m"));


// 10. lastIndexOf()
console.log("Last index of 'a':", name.lastIndexOf("a"));


// 11. slice()
console.log("Slice:", name.slice(0, 5));


// 12. substring()
console.log("Substring:", name.substring(0, 5));


// 13. replace()
console.log("Replace:", name.replace("Umesh", "Rahul"));


// 14. replaceAll()
const message = "JavaScript is good. JavaScript is powerful.";
console.log("Replace all:", message.replaceAll("JavaScript", "JS"));


// 15. trim()
console.log("Trim:", text.trim());


// 16. trimStart()
console.log("Trim start:", text.trimStart());


// 17. trimEnd()
console.log("Trim end:", text.trimEnd());


// 18. split()
const sentence = "I am learning JavaScript";
console.log("Split:", sentence.split(" "));


// 19. concat()
const firstName = "Umesh";
const lastName = "Kumar";

console.log("Full name:", firstName.concat(" ", lastName));


// 20. repeat()
console.log("Repeat:", "Hi ".repeat(3));


// 21. padStart()
const number = "25";
console.log("Pad start:", number.padStart(5, "0"));


// 22. padEnd()
console.log("Pad end:", number.padEnd(5, "0"));


// 23. String comparison
const username = "Umesh";

console.log(username === "Umesh");


// 24. Convert string to array
console.log("Array:", Array.from(name));


// 25. Reverse a string
const reversed = name.split("").reverse().join("");
console.log("Reversed:", reversed);


console.log("Done 🚀");
