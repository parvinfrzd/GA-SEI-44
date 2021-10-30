let isCharClicked;
let isSecondNumberClicked;
const numArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let number1 = '';
let number2 = '';
let charachter = '';


const reset = function () {
    isCharClicked = false;
    isSecondNumberClicked = false;
    number1 = '';
    number2 = '';
    charachter = '';
    //QUESTION: WHY DOESN'T THIS WORK?
    // $(".result-container").contents().filter(function () {
    //     return (this.nodeType == 3);
    // }).remove();
    $('.first, .second, .operator, .result').empty();
}

const takeInput = function (evt) {
    if (numArray.includes($(this).val())) {
        if (isCharClicked) {
            number2 += $(this).val();
            $('.second').text(number2);
            isSecondNumberClicked = true;
        } else {
            number1 += $(this).val();
            $('.first').text(number1);
        }
        //if it's a character && is not equal
    } else {
        if (!isSecondNumberClicked) {
            charachter = $(this).val();
            $('.operator').text(charachter);
            isCharClicked = true;
        }

    }
}

//math operations 
const increment = (a, b) => { return a + b };
const decrease = (a, b) => { return a - b };
const multiply = (a, b) => { return a * b };
const division = (a, b) => { return a / b };
const power = (a, b) => { return Math.pow(a, b) };


function calculation(char, num1, num2) {
    if (isSecondNumberClicked) {
        let result
        switch (char) {
            case '+':
                result = increment(parseInt(num1), parseInt(num2));
                break;
            case '-':
                result = decrease(parseInt(num1), parseInt(num2));
                break;
            case '*':
                result = multiply(parseInt(num1), parseInt(num2));
                break;
            case '/':
                result = division(parseInt(num1), parseInt(num2));
                break;
            case '^':
                result = power(parseInt(num1), parseInt(num2));
                break;

            default:
                break;
        }
        $('.result').text(result);
    }
}

//event listeners 
$('.equal').click(function () { calculation(charachter, number1, number2) });
$('.clear-button').on('click', reset);
$('.number').on('click', takeInput);
$('.char').on('click', takeInput);
