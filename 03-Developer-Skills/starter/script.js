// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5]

function highTemperature(temp) {
    let maxTemp = temp[0];
    let minTemp = temp[0]

    for(let i=0; i<temp.length; i++) {
        let currentTemp = temp[i];
        if(typeof temp[i] !== 'number') continue;
        if(currentTemp > maxTemp) {
            maxTemp = currentTemp;
        }
        if(currentTemp < minTemp) {
            minTemp = currentTemp;
        }
    }
    console.log(maxTemp, minTemp);
}

highTemperature([22, 48, 32, 78, 100]);
highTemperature(temperatures);



function highTemperatureNew(temp1, temp2) {
    const temp = temp1.concat(temp2);

    let maxTemp = temp[0];
    let minTemp = temp[0]

    for(let i=0; i<temp.length; i++) {
        let currentTemp = temp[i];
        if(typeof temp[i] !== 'number') continue;
        if(currentTemp > maxTemp) {
            maxTemp = currentTemp;
        }
        if(currentTemp < minTemp) {
            minTemp = currentTemp;
        }
    }
    console.log(temp);
    console.log(maxTemp, minTemp);
}

highTemperatureNew([22, 48, 32], [24, 27, 21]);


// Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

// Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

// Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

// Use the problem-solving framework: Understand the problem and break it up into sub-problems!

// TEST DATA 1: [17, 21, 23]
// TEST DATA 2: [12, 5, -5, 0, 4]


const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

function printForecast(arr) {
    let str = '';

    for(let i=0; i<arr.length; i++) {
        str = str + ` ${arr[i]}°C in ${i + 1} days ...`
    }

    console.log('...' + str);
}

printForecast(data1);

