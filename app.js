// import functions
import { isEven } from './evenOdd.js';
// reference needed DOM elements
const inputNumber = document.getElementById('num-input');
const evenOddButton = document.getElementById('even-odd');
const answer = document.getElementById('answer');

console.log(inputNumber.value);
// set event listeners 
evenOddButton.addEventListener('click', () => {


    // get user input(s)
    const number = Number(inputNumber.value);
    // do any needed work with the value(s)
    const check = isEven(number);
    // update DOM to reflect new value(s)
    answer.textContent = check;

    console.log(inputNumber.value);
});