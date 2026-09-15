// ==================================
// CONDITIONAL STATEMENTS
// ==================================

console.log("---- Conditional Statements ----");

let age = 16;

// ==================================
// IF, ELSE IF, ELSE
// ==================================

if (age > 18) {
    console.log("You can drive");
} else if (age === 16) {
    console.log("You are 16, almost ready to drive!");
} else {
    console.log("You cannot drive");
}

// ==================================
// TERNARY OPERATOR
// ==================================

let result = age > 18 ? "Adult" : "Minor";

console.log("Ternary result:", result);

// ==================================
// MULTIPLE CONDITIONS
// ==================================

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

// ==================================
// SWITCH STATEMENT
// ==================================

let day = 2;

switch (day) {
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

// ==================================

console.log("It's over");
