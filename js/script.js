const add = function(a, b) {
    return a + b;
}

const subtract = function(a, b) {
    return a - b;
}

const multiply = function(a, b) {
    return a * b;
}

const divide = function(a, b) {
    if (b === 0) {
        alert("Nice try a-hole!");
        return "Error";
    }
    return a / b;
}

let firstNumber = null;
let operator = null;
let shouldResetDisplay = false;

const operate = function(a, operator, b) {
    switch (operator) {
        case "+":
            return add(a, b);
            break;
        case "−":
            return subtract(a, b);
            break;
        case "×":
            return multiply(a, b);
            break;
        case "÷":
            return divide(a, b);
            break;
    }
}

const display = document.querySelector("#calculations p")
const numberButtons = document.querySelector("#numbers");
const operationButtons = document.querySelector("#operations")
const cancelButton = document.querySelector("#cancel");

// --- Cancel Button ---
cancelButton.addEventListener('click', function(event) {
    display.textContent = "0";
    firstNumber = null;
    operator = null;
})

// --- Number Buttons ---
numberButtons.addEventListener('click', function(event) {
    if (!event.target.classList.contains("number-button")) return;

    let numberToDisplay = event.target.textContent;

    if (display.textContent === "0" || shouldResetDisplay) {
        display.textContent = numberToDisplay;
        shouldResetDisplay = false;
    } else {
        display.textContent += numberToDisplay;
    }
})


// --- Operation Buttons ---
operationButtons.addEventListener('click', function(event) {
    if (!event.target.classList.contains("operation-button")) return;

    const clickedOperator = event.target.textContent;

    if (operator !== null && !shouldResetDisplay) {
        let secondNumber = parseFloat(display.textContent);
        firstNumber = operate(firstNumber, operator, secondNumber);
        display.textContent = roundResult(firstNumber);
    } else {
        firstNumber= parseFloat(display.textContent);
    }

    operator = clickedOperator;
    shouldResetDisplay = true;
})

numberButtons.addEventListener('click', function(event) {
    if (!event.target.classList.contains("operation-button")) return;
    const clickedOperator = event.target.textContent;

    if (firstNumber === null || operator === null) return;

    let secondNumber = parseFloat(display.textContent);
    let result = operate(firstNumber, operator, secondNumber);

    display.textContent = roundResult(result);
    firstNumber = null;
    operator = null;
    return;
    
})

function roundResult(number) {
    return Math.round(number * 1000) / 1000;
 }