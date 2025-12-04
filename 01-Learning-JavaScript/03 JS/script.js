console.log("---- Conditional Statements ----");

let age = 16;

// if condition
if (age > 18) {
    console.log("You can drive");
}
// else if condition
else if (age === 16) {
    console.log("You are 16, almost ready to drive!");
}
// else condition
else {
    console.log("You cannot drive");
}

// ternary operator (short if-else)
let result = (age > 18) ? "Adult" : "Minor";
console.log("Ternary result:", result);

// multiple conditions
let marks = 75;
if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 75) {
    console.log("Grade: B");
} else if (marks >= 50) {
    console.log("Grade: C");
} else {
    console.log("Grade: Fail");
}

// switch statement
let day = 2;

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
}