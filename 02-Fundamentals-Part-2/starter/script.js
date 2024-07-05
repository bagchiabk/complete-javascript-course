'use strict';

// Using Strict Mode

let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log("I can Drive");


// FUNCTIONS

function logger() {
    console.log("My name is Abhishek");
}

logger();


function fruitProcessor(apple, oranges) {
    console.log(apple, oranges);
    const juice = `Juice with ${apple} and ${oranges} oranges.`;
    return juice;
}

fruitProcessor(5, 0);

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

console.log(fruitProcessor(5, 6));


// Function Declaration vs Expressions

// Function Declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1990);


// Function Expression
const calcAge2 = function(birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1990);

console.log(age1, age2)