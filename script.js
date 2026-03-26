// Select display
const display = document.querySelector("#display");

// Add value to display
function addValue(value) {
  display.value = display.value + value;
}

// Calculate result
function calculateResult() {
  display.value = eval(display.value);
}

// Clear display
function clearDisplay() {
  display.value = "";
}
