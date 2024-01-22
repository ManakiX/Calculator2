let currentVal = '';
let hasAnswer = false;

function updateResult(value) {
    document.getElementById('result').value = value;
}

function resetResult() {
    currentVal = '';
    hasAnswer = false;
    updateResult('0');
}

function appendValue(value) {
    if (hasAnswer) {
        resetResult();
    }

    if (isOperator(value)) {
        operate(value);
    } else {
        currentVal += value;
        updateResult(currentVal);
    }
}

function operate(operator) {
    const operators = ['+', '-', '*', '/'];

    if (!endsWithOperator(currentVal) && !operators.includes(operator)) {
        currentVal += ` ${operator} `;
        updateResult(currentVal);
    } else {
        showError();
    }
}

function isOperator(value) {
    const operators = ['+', '-', '*', '/'];
    return operators.includes(value) && !endsWithOperator(currentVal);
}

function endsWithOperator(str) {
    const operators = ['+', '-', '*', '/'];
    return operators.some(op => str.trim().endsWith(op));
}

function showError() {
    resetResult();
    updateResult('Error');
}

function clearScreen() {
    resetResult();
}

function calculate() {
    try {
        let result = eval(currentVal);
        updateResult(result);
        currentVal = result.toString();
        hasAnswer = true;
    } catch (error) {
        showError();
    }
}


