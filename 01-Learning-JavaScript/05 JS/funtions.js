"use strict";

// Function to greet a student
function greetStudent(name) {
  console.log(`Hey ${name}, you are nice!`);
}

// Call function with predefined name
greetStudent("Umesh");

// Get user input safely
const userName = prompt("Enter your name:");
const carColor = prompt("Enter your favorite color:");

// Function to display car information
function showCar(name, color) {
  if (!name || !color) {
    console.log("Invalid input provided.");
    return;
  }

  const cleanName = name.trim();
  const cleanColor = color.trim();

  console.log(`${cleanName}'s car color is ${cleanColor}.`);
}

// Call function
showCar(userName, carColor);
