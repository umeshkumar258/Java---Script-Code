// Function to display car information
function showCar(name, color) {
  if (!name || !color) {
    console.error("Missing required information.");
    return;
  }

  console.log(`${name}'s car color is ${color}.`);
}
