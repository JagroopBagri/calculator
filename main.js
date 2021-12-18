
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
    return x + y;
}
function subtract(x,y){
    return x - y;
}
function multiply(x,y){
    return x * y;
}
function divide(x,y){
    return (y === 0 ? 'undefined' : x/y);
}
// Function that uses one of the above functions based on which operand is input as a parameter
function operate(operator, num1, num2){
    if(operator === '+'){
        return add(num1, num2)
    }
    else if(operator === '-'){
        return subtract(num1, num2)
    }
    else if(operator === '*'){
        return multiply(num1, num2)
    }
    else if(operator === '/'){
        return divide(num1, num2)
    }
}
const resultBox = document.querySelector('.resultBox');
//const result = document.createElement('div');
//result.textContent = '853758';
//esultBox.appendChild(result);
