let js = "amazing";

if (js === "amazing") {
    // alert("JavaScript is FUN!");
    console.log("JavaScript is FUN!");
}

console.log(40 + 8 + 23 - 10);

let firstName = "Jonas"; // Camel Case for naming Variables

let n = '1' + 1;
n = n - 1;

console.log(n);
console.log("Type of n: " + typeof(n));

// CODING CHALLENGE

// There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. 
// The winner with the highest average score wins a trophy!

// Your tasks:

// 1. Calculate the average score for each team, using the test data included below. 
// The average score for Dolphins should be assigned to the scoreDolphins variable, 
// and the average score of Koalas should be assigned to the scoreKoalas variable.

// 2. Compare the team's average scores to determine the winner of the competition, and print to the console:

// "Dolphins win the trophy" if Dolphins win, or

// "Koalas win the trophy" if Koalas win, or

// "Both win the trophy" if their average scores are equal.



// TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.

// CODING CHALLENGE - 3

let scoreDolphins = (96 + 108 + 89) / 3;
let scoreKoalas = (88 + 91 + 110) / 3;

console.log("Average score of Dolphins: " + scoreDolphins);
console.log("Average score of Koalas: " + scoreKoalas)

if(scoreDolphins > scoreKoalas) {
    console.log("Dolphins win the trophy");
} else if(scoreDolphins < scoreKoalas) {
    console.log("Koalas win the trophy");
} else {
    console.log("Both win the trophy");
}


// SWITCH STATEMENT

const day = "monday";

switch(day) {
    case "monday":
        console.log("Plan work for 1st day of the week");
        break;
    case "tuesday":
        console.log("Start executing the work planned on Monday");
        break;
    case "wednesday":
        console.log("Keep working its just Wednesday");
        break;
    case "thursday":
        console.log("Make an assessment of how much work is left");
        break;
    case "friday":
        console.log("Finish all the work and Enjoy the weekend");
        break;
    default: console.log("Not a Valid Day");
}

// A SIMILAR EXAMPLE WITH IF-ELSE STATEMENT

if(day === "monday") {
    console.log("Plan course structure");
    console.log("Go to coding meetup");
} else if(day === "tuesday") {
    console.log("Prepare theory videos");
} else if(day === "wednesday" || day === "thursday") {
    console.log("Write code examples");
} else if(day === "friday") {
    console.log("Record Videos");
} else if(day === "saturday" || day === "sunday") {
    console.log("Enjoy the Weekend");
} else {
    console.log("Not a Valid Day");
}


// The Conditional(Ternary) Operator

const age = 23;

// age >= 18 ? console.log("You are allowed to Drive") : console.log("You are not allowed to drive");

const drive = age >= 18 ? "Drive" : "Don't Drive";

console.log(drive);


// CODING CHALLENGE #4
// Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. 
// In his country, it's usual to tip 15% if the bill value is between 50 and 300. 
// If the value is different, the tip is 20%.

// Your tasks:

// Calculate the tip, depending on the bill value. Create a variable called tip for this. 
// It's not allowed to use an if...else statement (if it's easier for you, you can start with an if...else statement, 
// and then try to convert it to a ternary operator).

// Print a string to the console containing the bill value, the tip, and the final value (bill + tip).

// Example: The bill was 275, the tip was 41.25, and the total value 316.25.

// Note: Use the values of the bill and tip variables to construct this string. Don't hard-code them 🙂

// TEST DATA: Test with different bill values: 275, 40, and 430

// HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2

// HINT 2: Value X is between 50 and 300, if it's >= 50 && <= 300 😉


let bill = 275;
let tip = bill>=50 && bill<=300 ? 0.15*bill : 0.2*bill;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

