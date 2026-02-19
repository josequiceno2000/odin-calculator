const add = function(a, b) {
    return a + b;
}

// ✓ TESTS
// console.log(add(2, 5));
// console.log(add(2, 5) === 7);
// console.log(add(-1, 10));
// console.log(add(-1, 10) === 9);
// console.log(add(20, 400));
// console.log(add(20, 400) === 420);

const subtract = function(a, b) {
    return a - b;
}

// ✓ TESTS
// console.log(subtract(5, 5));
// console.log(subtract(5, 5) === 0);
// console.log(subtract(20, 10));
// console.log(subtract(20, 10) === 10);
// console.log(subtract(20, 400));
// console.log(subtract(20, 400) === -380);

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

// ✓ TESTS
// console.log(divide(20, 0));
// console.log(multiply(20, 2) === 40);
// console.log(divide(20, 10));
// console.log(divide(20, 10) === 2);
// console.log(multiply(20, 400));
// console.log(multiply(-20, 400) === -8000);