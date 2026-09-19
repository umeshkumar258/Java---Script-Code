// Get validated inputs
const userName = getValidInput("Enter your name:");
const carColor = getValidInput("Enter your favorite color:");

// Show car information only if inputs are valid
if (userName && carColor) {
  showCar(userName, carColor);
}
