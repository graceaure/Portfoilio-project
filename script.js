// Clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Append value to the display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Calculate the result
function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}
