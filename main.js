

// Functions for adding, subtracting, multiplying, and dividing two numbers

function add(x,y){
    let sum = x + y;
    return +sum.toFixed(4);
}
function subtract(x,y){
    let difference = x - y;
    return +difference.toFixed(4);
}
function multiply(x,y){
    let product = x * y;
    return +product.toFixed(4);
}
function divide(x,y){
    if(y === 0){
        return 'undefined';
    }
    else{
        let quotient = x/y;
        return +quotient.toFixed(4);
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
// Body of page
const body = document.body;
// Result Box with result content and final result
const resultBox = document.querySelector('.resultBox');
const resultContent = document.createElement('div');
let result = null;
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
let num1 = '0';
let num2 = '0';
// Has operator button been pressed
let pressed = false;
// Has second number been input
let num2Pressed = false;
// Operator values
let opValue;
// Is percent button clicked value
let percentClicked1 = false;
let percentClicked2 = false;
// Is decimal point clicked
let decimalClicked1 = false;
let decimalClicked2 = false;
// Array of buttons on Calculator
const calcBtn = document.querySelectorAll('.calcbtn');
console.log(calcBtn);
// Event listener for each button on calculator
calcBtn.forEach(function(btn){
    btn.addEventListener('click', function(){
        // Get first number in Calculation
        if(isNaN(Number(btn.value)) === false && pressed === false && calc1 !== 'ANS' && (num1.toString().length < 18)){
            num1 += btn.value;
            calc1 += btn.value;
            calcContent.textContent = calc1;
        }
        // Get second number in calculation
        else if(isNaN(Number(btn.value)) === false && pressed === true && (num2.toString().length < 18)){
            num2 += btn.value
            calc2 += btn.value
            calcContent.textContent = calc1 + ' ' + calc2;
            num2Pressed = true;
        }
        // Clear calculator
        else if(btn.value === 'AC'){
            clear();
        }
        // Get operator
        else if((btn.value === '/' || btn.value === 'x' || btn.value === '+' || btn.value === '-') && (pressed === false)){
            opValue = btn.value;
            calc1 += ' ' + btn.value;
            calcContent.textContent = calc1;
            pressed = true;
        }
        // If operator is pressed again, proceed with calculation 
        else if((btn.value === '/' || btn.value === 'x' || btn.value === '+' || btn.value === '-') && (pressed === true)){
            if(num2Pressed === false){
                return;
            }
            equals();
            opValue = btn.value;
            calc1 += ' ' + btn.value;
            calcContent.textContent = calc1;
        }
        // Equal sign pressed
        else if(btn.value === '='){
            equals();
            pressed = false;
        }
        // Delete button pressed
        else if(btn.value === 'delete'){
            return backspace();
        }
        // Percent button pressed
        else if(btn.value === '%'){
            percent(btn.value);
        }
        // Decimal button pressed
        else if(btn.value === '.'){
            decimal(btn.value);
        }
    });
});
// Adding Keyboard functionality
body.addEventListener('keydown', function(event){
    if(event.code === 'Digit1'){
        event.preventDefault();
        calcBtn[12].click();
    }
    else if (event.code === 'Digit2'){
        event.preventDefault();
        calcBtn[13].click();
    }
    else if (event.code === 'Digit3'){
        event.preventDefault();
        calcBtn[14].click();
    }else if (event.code === 'Digit4'){
        event.preventDefault();
        calcBtn[8].click();
    }else if (event.code === 'Digit5'){
        event.preventDefault();
        calcBtn[9].click();
    }else if (event.code === 'Digit6'){
        event.preventDefault();
        calcBtn[10].click();
    }else if (event.code === 'Digit7'){
        event.preventDefault();
        calcBtn[4].click();
    }else if (event.code === 'Digit8'){
        event.preventDefault();
        calcBtn[5].click();
    }else if (event.code === 'Digit9'){
        event.preventDefault();
        calcBtn[6].click();
    }else if (event.code === 'Digit0'){
        event.preventDefault();
        calcBtn[16].click();
    }else if (event.code === 'KeyM' || event.code === 'KeyX'){
        event.preventDefault();
        calcBtn[7].click();
    }else if (event.code === 'KeyA'){
        event.preventDefault();
        calcBtn[15].click();
    }else if (event.code === 'KeyS'){
        event.preventDefault();
        calcBtn[11].click();
    }else if (event.code === 'KeyD' || event.code === 'Slash'){
        event.preventDefault();
        calcBtn[3].click();
    }else if (event.code === 'KeyP'){
        event.preventDefault();
        calcBtn[2].click();
    }else if (event.code === 'Backspace'){
        event.preventDefault();
        calcBtn[1].click();
    }else if (event.code === 'Escape'){
        event.preventDefault();
        calcBtn[0].click();
    }else if (event.code === 'Equal' || event.code === 'Enter'){
        event.preventDefault();
        calcBtn[18].click();
    }else if (event.code === 'Period'){
        event.preventDefault();
        calcBtn[17].click();
    }
})
// Clear Calculator Function
function clear(){
    percentClicked1 = false;
    percentClicked2 = false;
    calc1 = '';
    calc2 = '';
    calcContent.textContent = calc1 + calc2;
    pressed = false;
    result = null;
    num1 = '0';
    num2 = '0';
    decimalClicked1 = false;
    decimalClicked2 = false;
    num2Pressed = false;
    resultContent.textContent = result;
};
// Equals Calculator Function
function equals(){
    if(pressed === false && percentClicked1 === false){
        slicedNum1 = num1.substring(1);
        if(slicedNum1.length > 10){
            return resultContent.textContent = Number(slicedNum1).toExponential(3);
        }
        return resultContent.textContent = slicedNum1;
    }
    else if(pressed === false && percentClicked1 === true){
        return resultContent.textContent = num1;
    }
    percentClicked1 = false;
    percentClicked2 = false;
    calc2 = '';
    result = operate(opValue, num1, num2);
    resultString = result.toString();
    if(resultString.length > 10){
        result = result.toExponential(3);
    }
    resultContent.textContent = result;
    num1 = result;
    num2 = '0';
    decimalClicked1 = false;
    decimalClicked2 = false;
    calc1 = 'ANS';
    num2Pressed = false;
};
// Delete Calculator Function 
function backspace(){
    if(pressed === false && calc1 !== 'ANS' && calc1 !== ''){
        let slicedString = calc1.slice(0,-1);
        calc1 = slicedString;
        let slicedNum = num1.slice(0,-1);
        num1 = slicedNum;
        calcContent.textContent = calc1;
    }
    else if(pressed === true && calc2 !== ''){
        let slicedString2 = calc2.slice(0,-1);
        calc2 = slicedString2;
        let slicedNum2 = num2.slice(0,-1);
        num2 = slicedNum2;
        calcContent.textContent = calc1 + calc2;
    }
};
// Percent button function
function percent(value){
    if(pressed === false && calc1 !== 'ANS' && percentClicked1 === false){
            percentClicked1 = true;
            num1 = num1 / 100;
            calc1 += value;
            calcContent.textContent = calc1;
    }
    else if(pressed === true && (opValue === 'x' || opValue === '/') && percentClicked2 === false){
            percentClicked2 = true;
            num2 = num2 / 100;
            calc2 += value;
            calcContent.textContent = calc1 + ' ' + calc2;
    }
    else if(pressed === true && (opValue === '+' || opValue === '-') && percentClicked2 === false){
            percentClicked2 = true;
            num2 = num1 * (num2/100);
            calc2 += value;
            calcContent.textContent = calc1 + ' ' + calc2;
    }
    else{
        return;
    }
};
// Decimal point button function
function decimal(value){
    if(pressed === false && calc1 !== 'ANS' && decimalClicked1 === false){
        decimalClicked1 = true;
        calc1 += value;
        num1 += value;
        calcContent.textContent = calc1;
    }
    else if(pressed === true && decimalClicked2 === false){
        decimalClicked2 = true;
        calc2 += value;
        num2 += value;
        calcContent.textContent = calc1 + ' ' + calc2;
    }
    else{
        return;
    }
};
// Insert footer with updating year
const footer = document.querySelector('.footer')
const currentYear = new Date().getFullYear();
footer.textContent = 'Copyright ?? ' + currentYear + ' Jagroop Bagri'