//Write a program that asks for two numbers from the user, adds them, then displays the result.
let rlSync = require('readline-sync');
let number1 = rlSync.question("Enter random number: ");
let number2 = rlSync.question("Enter random number: ");
let sumTotal = Number(number1) + Number(number2);
console.log(`The sum of ${number1} and ${number2} is ${sumTotal}`);

//Launch School's Code:
/*let rlSync = require('readline-sync');

let number1 = Number(rlSync.question('Enter the first number\n'));
let number2 = Number(rlSync.question('Enter the second number\n'));
let sum = number1 + number2;

console.log(`The numbers ${number1} and ${number2} add to ${sum}`);*/

//The difference:
//1. /n and : (colon and space)
//2. Data conversion (line 5) happens later compared to LS's that happen at the moment of declaration (line 11-12)
//The lesson learnser (after interacting with Launch School Bot):
//1. Neither is technically correct over the other, but /n is more common
//2. My code is more likely to have bugs in the case that the values are accessed before the moment of data type conversion 