"use strict";

// Utility: Get and validate number input
function getNumber(message) {
  const input = prompt(message);

  if (input === null) return null;

  const value = Number(input.trim());

  if (Number.isNaN(value)) {
    throw new Error("Invalid number input.");
  }

  return value;
}

// Utility: Get operator input
function getOperator(message) {
  const input = prompt(message);

  if (input === null) return null;

  const op = input.trim();

  if (!["+", "-", "*", "/"].includes(op)) {
    throw new Error("Invalid operator. Use +, -, *, /");
  }

  return op;
}

// Core Logic: Faulty Calculator
function faultyCalculator(a, b, op) {
  const isFaulty = Math.random() < 0.3;

  const operations = {
    "+": () => (isFaulty ? a - b : a + b),
    "-": () => (isFaulty ? a + b : a - b),
    "*": () => (isFaulty ? a / b : a * b),
    "/": () => (isFaulty ? a * b : a / b),
  };

  return {
    result: operations[op](),
    isFaulty,
  };
}

// ---- Main Execution ----
try {
  const num1 = getNumber("Enter number 1:");
  const num2 = getNumber("Enter number 2:");
  const operator = getOperator("Enter operator (+, -, *, /):");

  if (num1 === null || num2 === null || operator === null) {
    console.log("Calculation cancelled by user.");
  } else if (operator === "/" && num2 === 0) {
    throw new Error("Division by zero is not allowed.");
  } else {
    const { result, isFaulty } = faultyCalculator(num1, num2, operator);

    const mode = isFaulty ? "⚠️ Faulty" : "✅ Correct";
    const message = `Result: ${result} (${mode} mode)`;

    alert(message);
    console.log(message);
  }
} catch (error) {
  alert(error.message);
  console.error(error.message);
}
