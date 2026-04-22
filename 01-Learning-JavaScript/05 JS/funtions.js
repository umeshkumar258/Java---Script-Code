"use strict";

// Utility function to validate input
function getValidInput(message) {
  const input = prompt(message);

  if (!input || input.trim() === "") {
    console.error("Invalid input. Please enter a valid value.");
    return null;
  }

  return input.trim();
}

// Function to greet a student
function greetStudent(name = "Guest") {
  console.log(`Hey ${name}, you are nice!`);
}

// Function to display car information
function showCar(name, color) {
  if (!name || !color) {
    console.error("Missing required information.");
    return;
  }

  console.log(`${name}'s car color is ${color}.`);
}

// ---- Main Execution ----

// Greet predefined user
greetStudent("Umesh");

// Get validated inputs
const userName = getValidInput("Enter your name:");
const carColor = getValidInput("Enter your favorite color:");

// Show car info only if inputs are valid
if (userName && carColor) {
  showCar(userName, carColor);
}
