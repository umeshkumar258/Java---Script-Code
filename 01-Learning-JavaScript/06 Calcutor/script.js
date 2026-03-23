// Faulty calculator: mostly correct, but sometimes intentionally wrong.

function parseNumberInput(message) {
  const value = prompt(message);

  if (value === null) {
    return null;
  }

  const parsedValue = Number(value.trim());
  return Number.isNaN(parsedValue) ? NaN : parsedValue;
}

function faultyCalculator(a, b, op) {
  const isFaulty = Math.random() < 0.3;
  let result;

  if (op === "+") {
    result = isFaulty ? a - b : a + b;
  } else if (op === "-") {
    result = isFaulty ? a + b : a - b;
  } else if (op === "*") {
    result = isFaulty ? a / b : a * b;
  } else if (op === "/") {
    result = isFaulty ? a * b : a / b;
  } else {
    return {
      ok: false,
      message: "Invalid operator. Use one of these: +, -, *, /",
    };
  }

  return {
    ok: true,
    isFaulty,
    result,
  };
}

const num1 = parseNumberInput("Enter number 1:");
const num2 = parseNumberInput("Enter number 2:");
const operatorInput = prompt("Enter operator (+, -, *, /):");
const operator = operatorInput ? operatorInput.trim() : null;

if (num1 === null || num2 === null || operator === null) {
  console.log("Calculation cancelled by the user.");
} else if (Number.isNaN(num1) || Number.isNaN(num2)) {
  alert("Please enter valid numbers.");
  console.log("Invalid number input.");
} else if (operator === "/" && num2 === 0) {
  alert("Division by zero is not allowed.");
  console.log("Division by zero blocked.");
} else {
  const calculation = faultyCalculator(num1, num2, operator);

  if (!calculation.ok) {
    alert(calculation.message);
    console.log(calculation.message);
  } else {
    const faultLabel = calculation.isFaulty ? "faulty" : "correct";
    const message = `Result: ${calculation.result} (${faultLabel} mode)`;

    alert(message);
    console.log(message);
  }
}
