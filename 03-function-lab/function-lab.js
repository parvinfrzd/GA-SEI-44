// 1.(completed above) Define a function, as a function declaration, maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method is not allowed.
const maxOfTwoNumbers = (x, y) => x >= y ? x : y;
console.log("Max of two numbers is: " + maxOfTwoNumbers(3, 9));


// 2.Define a function, as a function expression, maxOfThree that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.
const maxOfThree = function (a, b, c) {
    let numbers = [a, b, c];
    numbers.sort(function (a, b) { return a - b });
    return numbers[numbers.length - 1];
}
console.log("Max of three numbers is: " + maxOfThree(12, 3, 55));


// 3.Define a function, as a function declaration, isCharAVowel that takes a character as an argument and returns true if it is a vowel, false otherwise.
function isCharAVowel(char) {
    vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    return vowels.includes(char) ? true : false;
}
console.log("Is given character a vowel? " + isCharAVowel("d"));


// 4.Define a function, as a function expression, sumArray that takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]); would return 11.
const sumArray = function (numbers) {
    return (numbers.reduce((a, b) => a + b, 0));
}
console.log('Sum of the given array is ' + sumArray([1, 2, 3, 4, 5, 5, 6]))


// 5.Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]); would return 40.

function multiplyArray(numbers) {
    return (numbers.reduce((a, b) => a * b, 1));
}
console.log('Multiply of the given array is ' + multiplyArray([3, 2, 5]));


// 6.Define a function, as a function expression, numArgs that returns the number of arguments passed to the function when called.
const numArgs = function (...num) { return num.length };
console.log('The total given number of arguments are: ' + numArgs(23, 'parvin', null, 1.5));


// 7.Define a function, as a function declaration, reverseString that takes a string, reverses the characters, and returns it. For example, reverseString('rockstar'); would return the string "ratskcor".
function reverseString(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
}

console.log('Reverse of the given word is: ' + reverseString('Hello'));

// 8.Define a function, as a function expression, longestStringInArray that takes an array of strings as an argument and returns the length of the longest string.
const longestStringInArray = function (stringArray) {
    return stringArray.reduce((a, b) => a.length > b.length ? a : b)
}

console.log('The longest word in the existing array is: ' + longestStringInArray(['i', 'am', 'a', 'developer']));
// 9.Define a function, as a function declaration, stringsLongerThan that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].

function stringsLongerThan(stringArray, num) {
    let longerThanString = []
    stringArray.forEach(function (str) {
        if (str.length > num) {
            longerThanString.push(str);
        }
    });
    return longerThanString;
}

console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 6));