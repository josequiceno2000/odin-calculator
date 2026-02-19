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
    try {
        if (b === 0) {
            throw EvalError(`Nice try a-hole!`);
        }
        return a / b;
    } catch (error) {
        console.log("An error occured:", error.message)
    }
}

let firstNumber;
let operator;
let secondNumber;

const operate = function(a, operator, b) {
    switch (operator) {
        case "+":
            return add(a, b);
            break;
        case "−":
            return subtract(a, b);
            break;
        case "*":
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

numberButtons.addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains("number-button")) {
        let numberToDisplay = event.target.textContent;
        
        if (display.textContent === `0`) {
            display.textContent = numberToDisplay;
        } else {
            display.textContent = `${display.textContent}${numberToDisplay}`;
        }
    }
})

operationButtons.addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains("operation-button")) {
        firstNumber = parseFloat(display.textContent);
        console.log(firstNumber);
        display.textContent = 0;
        operator = event.target.textContent;
        console.log(operator);
    }
})

numberButtons.addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains("operation-button")) {
        secondNumber = parseFloat(display.textContent);
        console.log(secondNumber);
        let result = operate(firstNumber, operator, secondNumber);
        console.log(result);  
        display.textContent = result.toFixed(2);
    }
})

