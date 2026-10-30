// Function to greet a student
function greetStudent(name) {
    console.log(`Hey ${name}, you are nice!`);
}

// Call the function with a predefined name
greetStudent("Umesh");

// Get user input
let userName = prompt("Enter your name:");
let carColor = prompt("Enter your favorite color:");

// Function to display car information
function showCar(name, color) {
    console.log(`${name}'s car color is ${color}.`);
}

// Call the function with user inputs
showCar(userName, carColor);
