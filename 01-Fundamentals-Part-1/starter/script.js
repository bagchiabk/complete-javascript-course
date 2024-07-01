let js = "amazing";

if (js === "amazing") {
    // alert("JavaScript is FUN!");
    console.log("JavaScript is FUN!");
}

console.log(40 + 8 + 23 - 10);

let firstName = "Abhishek"; // Camel Case for naming Variables

let n = '1' + 1;
n = n - 1;

console.log(n);
console.log("Type of n: " + typeof(n));

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
    console.log("KOalas win the trophy");
} else {
    console.log("Both win the trophy");
}