


/*  1. initialize the calculator 
    2. Reset
    3. on button click: 
        a. if it's a number : 
            cache 
        b. if it's a char : 
            if there is a char behind it: 
                change the chache at that point and replace the old char by new one 
            else 
                break
            if it's = 
                process array() 
                if there are two numbers: 
                    calculate 
                else 
                    break 
        c. if it's 'clear': 
            Reset() 

*/
// window.onload = function () {
let numEl = document.querySelector('.number');
let charEl = document.querySelector('.char');
let clearButton = document.querySelector('.clear-button');
let equal = document.querySelector('.equal');
// let inputParam = {
//     number01: '',
//     number02: '',
//     charachter: ''
// }
let isCharClicked;
const numArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let number1 = '';
let number2 = '';
let charachter = '';

// }

const init = function () {
    //initialize 
}

const reset = function () {
    console.log('reset');
    isCharClicked = false;
    // Object.entries(inputParam).forEach(function (key) { key.values = ''; });
    number1 = '';
    number2 = '';
    charachter = '';
    if (consoleEl.hasChildNodes()) { console.textContent = ''; }
}

const render = function () {
    //update 
}
const takeInput = function (el) {
    elValue = el.value;
    //if it's a number
    if (numArray.includes(elValue)) {
        if (isCharClicked) {
            console.log('add to number2');
            number2 += elValue;
        } else {
            number1 += elValue;
            console.log('add to number1');
        }
        //if it's a character
    } else {
        console.log('its a character')
        charachter = elValue;
        isCharClicked = true;
        console.log('enter char');
    }
}
const increment = (a, b) => { return a + b };
const decrease = (a, b) => { return a - b };
const multiply = (a, b) => { return a * b };
const division = (a, b) => { return a / b };
const power = (a, b) => { return Math.pow(a, b) };

//takes place when button '=' is clicked 
function calculation(char, num1, num2) {
    let result
    if (char === '+')
        result = increment(parseInt(num1), parseInt(num2));
    else if (char === '-')
        result = decrease(parseInt(num1), parseInt(num2));
    else if (char === '*')
        result = multiply(parseInt(num1), parseInt(num2));
    else if (char === '/')
        result = division(parseInt(num1), parseInt(num2));
    else if (char === '^')
        result = power(parseInt(num1), parseInt(num2));

    return result
}

function render(res) {
    let consoleEl = document.querySelector('.console');
    let number01 = document.createElement('')
}

// equal.addEventListener("click", calculation(inputParam.charachter, inputParam.number01, inputParam.number02));
equal.onclick = function () { calculation(charachter, number1, number2); }
clearButton.onclick = function () { reset(); }
numEl.onclick = function () { takeInput(numEl); }
charEl.onclick = function () { takeInput(charEl); }
