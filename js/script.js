// --- Basic Operations ---
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
        return "Nice try, a-hole!";
    } else {
        return a / b;
    }
}

// --- Operation Function ---
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

// --- Initial Variables ---
let firstNumber = null;
let operator = null;
let shouldResetDisplay = false;

// --- DOM Variables ---

const display = document.querySelector("#calculations p")
const numberButtons = document.querySelector("#numbers");
const operationButtons = document.querySelector("#operations")
const cancelButton = document.querySelector("#cancel");

// --- Cancel Button ---
cancelButton.addEventListener('click', function(event) {
    display.textContent = "0";
    firstNumber = null;
    operator = null;
});

// --- Number Buttons ---
numberButtons.addEventListener('click', function(event) {
    if (!event.target.classList.contains("number-button")) return;

    if (event.target.id === "dot" && display.textContent.includes(".")) return;

    let numberToDisplay = event.target.textContent;

    if (display.textContent === "0" || shouldResetDisplay) {
        display.textContent = numberToDisplay;
        shouldResetDisplay = false;
    } else {
        display.textContent += numberToDisplay;
    }
});

// --- Operation Buttons ---
operationButtons.addEventListener('click', function(event) {
    if (!event.target.classList.contains("operation-button")) return;

    const clickedOperator = event.target.textContent;

    if (clickedOperator === "DEL") {
        if (display.textContent === "0") {
            return;
        } else if (display.textContent.length === 1) {
            display.textContent = "0";
            return;
        } else {
            display.textContent = display.textContent.slice(0, -1);
            return;
        }
    }

    if (operator !== null && !shouldResetDisplay) {
        let secondNumber = parseFloat(display.textContent);
        firstNumber = operate(firstNumber, operator, secondNumber);
        display.textContent = roundResult(firstNumber);
    } else {
        firstNumber= parseFloat(display.textContent);
    }

    operator = clickedOperator;
    shouldResetDisplay = true;
});

// --- Equals Button ---
numberButtons.addEventListener('click', function(event) {
    if (!event.target.classList.contains("operation-button")) return;

    if (firstNumber === null || operator === null) return;

    let secondNumber = parseFloat(display.textContent);

    let result = operate(firstNumber, operator, secondNumber);

    if (typeof result === "string") {
        display.textContent = result;
        return;
    } else {
        display.textContent = roundResult(result);
        firstNumber = null;
        operator = null;
        return;
    }
    
    
});

// --- Helper Function ---
function roundResult(number) {
    return Math.round(number * 100) / 100;
 }

//  --- Keyboard Support ---
document.addEventListener('keydown', function(event) {
    let numbers = [
        "1", "2", "3", "4", "5",
        "6", "7", "8", "9", "0"
    ];

    let operations = [
        "Delete", "Backspace", "+", "-", "*", "/"
    ];

    let pressed = event.key;
    console.log(`Key pressed: `, event.key);

    if (numbers.includes(pressed)) {
        console.log(`${pressed} is a number!`)
        if (display.textContent === "0" || shouldResetDisplay) {
            display.textContent = pressed;
            shouldResetDisplay = false;
        } else {
            display.textContent += pressed;
        }
    } else if (pressed === ".") {
        if (display.textContent.includes(".")) return;
        display.textContent += pressed;
    }  else if (operations.includes(pressed)) {
        if (pressed === "Delete" || pressed === "Backspace") {
            if (display.textContent === "0") {
                return;
            } else if (display.textContent.length === 1) {
                display.textContent = "0";
                return;
            } else {
                display.textContent = display.textContent.slice(0, -1);
                return;
            }
        }

        if (operator !== null && !shouldResetDisplay) {
            let secondNumber = parseFloat(display.textContent);
            firstNumber = operate(firstNumber, operator, secondNumber);
            display.textContent = roundResult(firstNumber);
        } else {
            firstNumber= parseFloat(display.textContent);
        }

        operator = clickedOperator;
        shouldResetDisplay = true;

    } else if (pressed === "=") {
        if (firstNumber === null || operator === null) return;

        let secondNumber = parseFloat(display.textContent);

        let result = operate(firstNumber, operator, secondNumber);

        if (typeof result === "string") {
            display.textContent = result;
            return;
        } else {
            display.textContent = roundResult(result);
            firstNumber = null;
            operator = null;
            return;
        }
    }
});