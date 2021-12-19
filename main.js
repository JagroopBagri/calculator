
// Adding, subtracting, multiplying, and dividing with arrays
/*
function addArr(array){
    return array.reduce(function(sum, numbers){
            sum += numbers
            return sum;
    }, 0);
}

function subtractArr(array){
    return array.reduce(function(difference, numbers){
            difference -= numbers
            return difference;
    });
}

function multiplyArr(array){
    return array.reduce(function(product, numbers){
            product *= numbers
            return product;
    });
}

function divideArr(array){
    return array.reduce(function(quotient, numbers){
        if(numbers === 0){
            return 'undefined';
        }
        else{
            quotient /= numbers
            return quotient;
        }
    });
}
*/

// Functions for adding, subtracting, multiplying, and dividing two numbers

function add(x,y){
    let sum = x + y;
    return sum.toFixed(2);
}
function subtract(x,y){
    let difference = x - y;
    return difference.toFixed(2);
}
function multiply(x,y){
    let product = x * y;
    return product.toFixed(2);
}
function divide(x,y){
    if(y === 0){
        return 'undefined';
    }
    else{
        let quotient = x/y;
        return quotient.toFixed(2);
    }
}
// Function that uses one of the above functions based on which operand is input as a parameter
function operate(operator, num1, num2){
    if(operator === '+'){
        return add(Number(num1), Number(num2))
    }
    else if(operator === '-'){
        return subtract(Number(num1), Number(num2))
    }
    else if(operator === 'x'){
        return multiply(Number(num1), Number(num2))
    }
    else if(operator === '/'){
        return divide(Number(num1), Number(num2))
    }
}
// Result Box with result content and final result
const resultBox = document.querySelector('.resultBox');
const resultContent = document.createElement('div');
let result = '';
resultContent.textContent = result;
resultBox.appendChild(resultContent);
// Calculation Box with Calculation content and calculation
const calcBox = document.querySelector('.calc-wrapper');
const calcContent = document.createElement('div');
let calc1 = '';
let calc2 = '';
calcContent.textContent = calc1 + calc2;
calcBox.appendChild(calcContent);
// Number 1 and 2
let num1 = 0;
let num2 = 0;
// Has operator button been pressed
let pressed = false;
// Operator value
let opValue;
// Array of operator buttons
const operatorBtns = ['/', '*', '-', '+'];
// Array of buttons on Calculator
const calcBtn = document.querySelectorAll('.calcbtn');
// Event listener for each button on calculator
calcBtn.forEach(function(btn){
    btn.addEventListener('click', function(){
        // Get first number in Calculation
        if(isNaN(Number(btn.value)) === false && pressed === false && calc1 !== 'ANS'){
            num1 += btn.value
            calc1 += btn.value
            calcContent.textContent = calc1;
        }
        // Get second number in calculation
        else if(isNaN(Number(btn.value)) === false && pressed === true){
            num2 += btn.value
            calc2 += btn.value
            calcContent.textContent = calc1 + calc2;
        }
        // Clear calculator
        else if(btn.value === 'AC'){
            calc1 = '';
            calc2 = '';
            calcContent.textContent = calc1 + calc2;
            pressed = false;
            result = '';
            num1 = 0;
            num2 = 0;
            resultContent.textContent = result;
        }
        // Get operator
        else if((btn.value === '/' || 'x' || '+' || '-') && (pressed === false)){
            if(Number(result) !== 0){
                calc1 = 'ANS';
            }
            opValue = btn.value;
            calc1 += btn.value;
            calcContent.textContent = calc1;
            pressed = true;
        }
        else if(btn.value === '='){
            calc2 = '';
            pressed = false;
            console.log(num1);
            console.log(num2);
            result = operate(opValue, num1, num2);
            resultContent.textContent = result;
            num1 = result;
            num2 = 0;
        }
    });
});

