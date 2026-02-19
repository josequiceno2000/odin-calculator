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
        case "-":
            return subtract(a, b);
            break;
        case "*":
            return multiply(a, b);
            break;
        case "/":
            return divide(a, b);
            break;
    }
}

