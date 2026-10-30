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
