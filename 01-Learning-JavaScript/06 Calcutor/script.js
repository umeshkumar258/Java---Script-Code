// Faulty Calculator 😈

const num1 = Number(prompt("Enter number 1:"));
const num2 = Number(prompt("Enter number 2:"));
const operator = prompt("Enter operator (+, -, *, /):");

function faultyCalculator(a, b, op) {
  const random = Math.random();

  let result;

  // 30% chance to give wrong answer
  const isFaulty = random < 0.3;

  if (op === "+") {
    result = isFaulty ? a - b : a + b;
  } 
  else if (op === "-") {
    result = isFaulty ? a + b : a - b;
  } 
  else if (op === "*") {
    result = isFaulty ? a / b : a * b;
  } 
  else if (op === "/") {
    result = isFaulty ? a * b : a / b;
  } 
  else {
    return "Invalid operator!";
  }

  return result;
}

const answer = faultyCalculator(num1, num2, operator);

console.log("Result:", answer);
