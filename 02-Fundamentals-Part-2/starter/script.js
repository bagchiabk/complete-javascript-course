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


// Arrow Function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);


const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 60 - age;

    return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1982, "James"));
console.log(yearsUntilRetirement(1994, "Benji"));


// Functions Calling Other Function
function cutFruitPieces(fruit) {
    return fruit * 4;
};

function fruitJuicer(apple, oranges) {
    // console.log(apple, oranges);

    const applePieces = cutFruitPieces(apple);
    const orangepieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} piece of apple and ${orangepieces} pieces of oranges.`;
    return juice;
}

console.log(fruitJuicer(2, 3));


// Reviewing Functions
const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const yearsLeftForRetirement = function(birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 60 - age;

    if(retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }
}

console.log(yearsLeftForRetirement(1976, "Michael"))