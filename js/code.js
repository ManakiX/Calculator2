let currentVal = '';

function appendValue(value) {
    currentVal += value;
    document.getElementById('result').value = currentVal;
}

function operate(operator) {
    // This is to check if the last character to be entered is an operator
    const lastChar = currentVal.slice(-1);
    const operators = ['+', '-', '*', '/'];

    // If the last character is not an operator, the user can add one
    if (!operators.includes(lastChar)) {
        currentVal += ` ${operator} `;
        document.getElementById('result').value = currentVal;
    }
}

function clearScreen() {
    currentVal = '';
    document.getElementById('result').value = '';
}

function calculate() {
    try {
        let result = eval(currentVal);
        document.getElementById('result').value = result;
        currentVal = result.toString();
    } catch (error) {
        document.getElementById('result').value = 'Error';
        currentVal = '';
    }
}
