'use strict';

// Using Strict Mode

let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log("I can Drive");


// FUNCTIONS

function logger() {
    console.log("My name is Jonas");
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

console.log(yearsLeftForRetirement(1976, "Michael"));


// CODING CHALLENGE #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, 
// which works differently.

// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

// A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!



// Your tasks:

// Create an arrow function calcAverage to calculate the average of 3 scores. 
// This function should have three parameters and return a single number (the average score).

// Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage 
// function to them (you will need to call this function, and pass scores as arguments).

// Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), 
// and then logs the winner to the console, together with the victory points, according to the rule above. 
// Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

// Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

// Ignore draws this time. Instead, log No team wins... to the console if there is no winner.



// TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

// TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.


// const calcAverage = (score1, score2, score3) => {
//     return (score1 + score2 + score3) / 3;
// }

// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);

// console.log(scoreDolphins, scoreKoalas)

// function checkWinner(avgDolphins, avgKoalas) {

//     if(avgDolphins > 2 * avgKoalas) {
//         console.log(`Dolphins win ${avgDolphins} vs ${avgKoalas}`);
//     } else if(avgKoalas > 2 * avgDolphins) {
//         console.log(`Koalas win ${avgKoalas} vs ${avgDolphins}`);
//     } else {
//         console.log(`No Team Wins...`);
//     }
// }

// console.log(checkWinner(scoreDolphins, scoreKoalas))


// INTRODUCTION TO ARRAYS

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['michael', 'Steven', 'Peter'];
console.log("Friends: ", friends);

console.log(friends[0]);     // Logs the Element of the Array in position 0
console.log(friends[2]);     // Logs the Element of the Array in position 2
console.log(friends.length); // Logs the number of elements in the Array which is also the length of the Array
console.log(friends[friends.length - 1]); // Logs the Last element of the Array

friends[2] = 'Jay'; // Replaces the element in position 2 of the Array
console.log(friends); // Displays the new Array with an Element Replaced

const years = new Array(1991, 1992, 1993, 1994); // Another way to create an Array
console.log("Years: ", years);


// Exercise

const calculateAge = function(birthYear) {
    return 2037 - birthYear;
}

const year = [1990, 1967, 2002, 2010, 2018];

const ageCalc1 = calculateAge(year[0]);
const ageCalc2 = calculateAge(year[1]);
const ageCalc3 = calculateAge(year[year.length - 1]);

console.log(ageCalc1, ageCalc2, ageCalc3);

const ages = [calculateAge(year[0]), calculateAge(year[1]), calculateAge(year[year.length - 1])];
console.log("Ages Calulated: ", ages);


// CHALLENGE #2

// Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, 
// and if the value is different, the tip is 20%.

// Your tasks:

//    Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

//    And now let's use arrays! So, create an array called bills containing the test data below.

//    Create an array called tips containing the tip value for each bill, calculated from the function you created before.

//    BONUS: Create an array totals containing the total values, so the bill + tip.

// TEST DATA: 125, 555, and 44.

// let calcTip = function(bill) {

//     if(bill >= 50 && bill <= 300) {
//         return bill * 0.15;
//     } else {
//         return bill * 0.2;
//     }
// }

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(bills);
// console.log(tips);

// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(totals);


// JAVASCRIPT OBJECTS

// let jonas = {
//     firstName: "Jonas",
//     lastName: "Schmedtmann",
//     Age: 2024 - 1986,
//     job: "Teacher",
//     friends: ["Michael", "Peter", "Steven"]
// }

// let interestedIn = prompt("What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends")

// if(jonas[interestedIn]) {
//     console.log(jonas[interestedIn])
// } else {
//     console.log("Wrong Request. Choose between firstName, lastName, Age, job and friends");
// }

// jonas.location = "Portugal";
// console.log(jonas);

// Challenge
// Jonas has three friends and his best friend is called Michael

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, ${jonas.friends} and his best friend is called ${jonas.friends[0]}`)

let jonas = {
    firstName: "Jonas",
    lastName: "Schmedtmann",
    birthYear: 1991,
    job: "Teacher",
    friends: ["Michael", "Peter", "Steven"],
    hasDriversLicense: true,

    calcAge: function (birthYear) {
        return 2024 - this.birthYear
    },

    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license`
    }
}

console.log(`${jonas.firstName} is a ${jonas.calcAge()}-year old ${jonas.job}, and he has ${jonas.hasDriversLicense ? "a" : "no"} driver's license`)
console.log(jonas.getSummary());


// CHALLENGE #3

// Let's go back to Mark and John comparing their BMIs!

// This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).

// Your tasks:

//     For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith).
//     Name these objects as mark and john, and their properties exactly as fullName, mass and height.

//     Create a calcBMI method on each object to calculate the BMI (the same method on both objects). 
//     Assign the BMI value to a property called bmi (lowercase), and also return it from the method.

//     Log to the console who has the higher BMI, together with the full name and the respective BMI. 
//     Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

//     TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.


let mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,

    calcBMI: function() {
        this.bmi = (this.mass / (this.height * this.height)).toFixed(1);
        return this.bmi;
    }
}

let john = {
    fullName: "John Smith",
    mass: 91,
    height: 1.95,

    calcBMI: function() {
        this.bmi = (this.mass / (this.height * this.height)).toFixed(1);
        return this.bmi;
    }
}

console.log("Mark Miller's BMI: ", mark.calcBMI());
console.log("John Smith's BMI: ", john.calcBMI());

if(mark.calcBMI() > john.calcBMI()) {
    console.log(`${mark.fullName}'s BMI ${mark.calcBMI()} is higher than ${john.fullName}'s ${john.calcBMI()}`) 
} else {
    console.log(`${john.fullName}'s BMI ${john.calcBMI()} is higher than ${mark.fullName}'s ${mark.calcBMI()}`) 
}


// CHALLENGE #4

// Let's improve Steven's tip calculator even more, this time using loops!

// Your tasks:

//     Create an array called bills containing all 10 test bill values.

//     Create empty arrays for the tips and the totals (tips and totals)

//     Use the calcTip function we wrote before (included in the starter code) to calculate tips and 
//     total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!


// TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.



// BONUS:

// Write a function calcAverage which takes an array called arr as an argument. 
// This function calculates the average of all numbers in the given array. 
// This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it if you feel like it:

//     First, you will need to add up all values in the array. To do the addition, 
//     start by creating a variable sum that starts at 0. 
//     Then loop over the array using a for loop. In each iteration, add the current value to the sum variable. 
//     This way, by the end of the loop, you have all values added together.

//     To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements).

//     Call the function with the totals array.

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
  

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

let tips = [];
let totals = [];

for(let i=0; i<bills.length; i++) {
    let tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(calcTip(tip + bills[i]));
}

console.log("Bills:", bills);
console.log("Tips:", tips);
console.log("Totals:", totals);

function calcAverage(arr) {
    let sum = 0;

    for(let i=0; i<arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum / arr.length;
}

console.log(calcAverage(totals));