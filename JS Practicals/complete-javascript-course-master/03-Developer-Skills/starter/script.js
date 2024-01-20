// Remember, we're gonna use strict mode in all scripts now!
"use strict";

/* const x = 4005;
console.log("Hello World");
console.log(x); */

// PROBLEM 1:
/* We work for a company building a smart home thermometer. 
Our most recent task is this: "Given an array of temperatures of one day, 
calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."
 */
// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
/* Solution
What is temperature amplitude: difference between minimum and maximum temperature that accured within a specific recorded time period.
create a new array without errors (strings)
find min value from new array
find min value from new array
find amplitude
*/
/* const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
let newTemperature = [];
const newTemp = (temperature) => {
  for (let i = 0; i < temperature.length; i++) {
    if (typeof temperature[i] !== "string") {
      newTemperature.push(temperature[i]);
    }
  }
  return newTemperature;
};
let newTemperatures = newTemp(temperatures);
console.log(newTemperatures);

let minNewTemperatures = Math.min(...newTemperatures);
let maxNewTemperatures = Math.max(...newTemperatures);
console.log(minNewTemperatures);
console.log(maxNewTemperatures);

let ampTemperature = maxNewTemperatures - minNewTemperatures;
console.log(ampTemperature);
 */

/* const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celcius",
    value: prompt("Degrees celcius"),
  };
  console.log(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin()); */

/* Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [22, 19, 18, 15, 8]
TEST DATA 2: [-4, -1, 3, 10, -2] */

/* 
store array has variable
iterate over each array and add days in sequential to it

*/
const testData1 = [22, 19, 18, 15, 8];
const testData2 = [-4, -1, 3, 10, -2];

const printForecast = (arr) => {
  let forecasted = "";
  for (let i = 0; i < arr.length; i++) {
    forecasted += `... ${arr[i]}ºC in ${i + 1} days `;
  }
  return forecasted + ` ...`;
};
console.log(printForecast(testData1));
console.log(printForecast(testData2));
