function add(num1, num2) {
    const sum = num1 + num2;
    return sum;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

console.log(add(3,5))

function calculator(a, b, kajki) {
    if (kajki === 'add') {
        const result = add(a, b);
        return result;
    }
    else if(kajki === 'subtract'){
        const result = subtract(a, b);
        return result;
    }
    else if(kajki === 'multiply'){
        return multiply(a, b);
    }
    else if (kajki === 'divide'){
        return divide(a, b);
    }
    else {
        return "Only 'add', 'subtract', 'multiply', 'divide' operation is allowed."
    }
}


const result = calculator(5, 7, 'add');
console.log(result);