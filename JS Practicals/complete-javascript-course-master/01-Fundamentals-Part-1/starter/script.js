/* let js = "amazing";
console.log(40+56+8-83*2);
console.log("jonas");

let firstName = "Jonas";
console.log(firstName);

// Boolean
javaScriptIsFun = true;
console.log(javaScriptIsFun);

// typeof
console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 342);
console.log(typeof "AdeOri");
// Dynamnic typing
javaScriptIsFun ="YES!"
console.log(typeof javaScriptIsFun);

// Undefined
let year;
console.log(year);
console.log(typeof year);

// effect of dynamic typing
year = 2023
console.log(year);
console.log(typeof year);

// Error that exists in typeof operator
console.log(typeof null) //Its similar to undefined but typeof return it as object. Hence its error or bugs

 */


// let is used when we will mutate or reassign a variable
/* let age = 30;
age = 31;

// const is used to declare variables that are not supposed to change. An immutable variable. COnst also need initial value
// const age = 30; 
// age = 31; 
// error message would occur on the above
// Its advisable to use const to avoid error in changing of variable

// var is the oldest way
// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 1998;
console.log(ageJonas, ageSarah);
console.log(ageJonas*2, ageSarah/10, 2**3);

const firstName = 'Jonas';
const lastName = 'Sarah';
console.log(firstName + "" + lastName);


// Assignment operators
let x = 10+5;
x += 10;
x *= 4;
x++;
x--;
x--;
console.log(x);

// Comparative operators. Its used to produce boolean values
console.log(ageJonas > ageSarah);
console.log(ageSarah>= 18); */

// operator precedence
/* const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 1998;

console.log(now-1991 > now-1998);

let x, y;
x = y= 25-10-5;
console.log(x,y);

const averageAge = (ageJonas + ageSarah) /2
console.log(averageAge); */
// the precedence is found in MDN mozilla developer 

/* // Coding challenge #1
// TEST DATA 1 
const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;
// First BMI for Mark
const markBmi = markMass / (markHeight ** 2);
console.log(markBmi);
// First BMI for John
const johnBmi = johnMass/(johnHeight**2);
console.log(johnBmi);
// boolean
const markHigherBMI = (markBmi > johnBmi);
console.log(markHigherBMI);

// Test Data 2
// TEST DATA 1 
const markMass2 = 95;
const markHeight2 = 1.88;
const johnMass2 =85;
const johnHeight2 = 1.76;
// First BMI for Mark
const markBmi2 = markMass2 / (markHeight2 ** 2);
console.log(markBmi2);
// First BMI for John
const johnBmi2 = johnMass2/(johnHeight2**2);
console.log(johnBmi2);
// boolean
const markHigherBMI2 = (markBmi2 > johnBmi2);
console.log(markHigherBMI2);

 */

/* 
// learning strings
const firstName = "Dare";
const job = "Developer";
const birthYear = 1986;
const yearNow = 2023;
const Dare = `I'm ${firstName}, a ${yearNow - birthYear} year old ${job}!`;
console.log(Dare);

// creating multilines
console.log('string with \n\ mulitple \n\ lines');
console.log(`string with
multiple
lines`) */

// conditional statement
const age =15;
const isOldEnough = age>=18;

if(isOldEnough){
    console.log(`Sarah can start driving licence 🚗`);
    }
    else{
        const yearLeft =18-age;
        console.log(`Sarah is too young. Wait another ${yearLeft} years 😒`);
    }