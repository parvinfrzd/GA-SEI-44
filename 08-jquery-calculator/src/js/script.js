


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
console.log(numEl.value)
let charEl = document.querySelector('.char');
let clearButton = document.querySelector('.clear-button');
let equal = document.querySelector('.equal');
let consoleEl = document.querySelector('.console');
let inputParam = {
    number01: '',
    number02: '',
    charachter: ''
}
let isCharClicked = false;
const numArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let number1;
let number2;
let charachter;

// }

const init = function () {
    //initialize 
}

const reset = function () {
    console.log('reset');
    Object.entries(inputParam).forEach(function (key) { key.values = ''; });
    if (consoleEl.hasChildNodes()) { console.textContent = ''; }
    isCharClicked = false;
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
            inputParam.number02 += elValue;
        } else {
            inputParam.number01 += elValue;
            console.log('add to number1');
        }
        //if it's a character
    } else {
        //if there is a char but number 02 is not entered 
        if (inputParam.number02 === '' && isCharClicked) {
            inputParam.charachter = elValue;
            console.log('change char');
        }
        else if (inputParam.charachter === '') {
            inputParam.charachter = elValue;
            isCharClicked = true;
            console.log('enter char');
        }
    }
}
const increment = (a, b) => { return a + b };
const decrease = (a, b) => { return a - b };
const multiply = (a, b) => { return a * b };
const division = (a, b) => { return a / b };
const power = (a, b) => { return Math.pow(a, b) };

//takes place when button '=' is clicked 
function calculation(char, num1, num2) {
    console.log('calculate')
    if (num1 && num2 && char) {
        switch (char) {
            case (char === '+'):
                increment(num1, num2);
                break;
            case (char === '-'):
                decrease(num1, num2);
                break;
            case (char === '*'):
                multiply(num1, num2);
                break;
            case (char === '/'):
                division(num1, num2);
                break;
            case (char === '^'):
                power(num1, num2);
                break;
            default:
                break;
        }
    }
}


// equal.addEventListener("click", calculation(inputParam.charachter, inputParam.number01, inputParam.number02));
equal.onclick = function () { calculation(inputParam.charachter, inputParam.number01, inputParam.number02); }
clearButton.onclick = function () { reset(); }
numEl.onclick = function () { takeInput(numEl); }
charEl.onclick = function () { takeInput(charEl); }
