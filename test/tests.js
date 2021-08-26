// IMPORT MODULES under test here:

import { isEven } from "../evenOdd.js";
// import { add } from '../calculator.js';

const test = QUnit.test;

// name your test by what it is testing
test('testing if the number is even or odd', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 2;
    const expected = "This number is EVEN!";
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = isEven(x); // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
