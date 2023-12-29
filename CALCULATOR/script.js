let displayValue = '0';
let operatorClicked = false;

function updateDisplay() {
    document.getElementById('display').innerText = displayValue;
}

function clearDisplay() {
    displayValue = '0';
    operatorClicked = false;
    updateDisplay();
}

function appendToDisplay(value) {
    if (displayValue === '0' || operatorClicked) {
        displayValue = value;
        operatorClicked = false;
    } else {
        displayValue += value;
    }
    updateDisplay();
}

function calculate() {
    try {
        displayValue = eval(displayValue).toString();
        operatorClicked = true;
    } catch (error) {
        displayValue = 'Error';
    }
    updateDisplay();
}
