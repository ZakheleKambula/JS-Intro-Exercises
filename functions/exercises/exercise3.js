//Write a program that uses a multiply function. Take user's input and return the numbers and results as a simple equation.
function multiply(a, b) {
  let results = a * b;
  return (results);
}
let rlSy = require("readline-sync");
let numberOne = Number(rlSy.question("Enter your first number\n"));
let numberTwo = Number(rlSy.question("Enter your second number\n"));
let results = multiply(numberOne, numberTwo);
console.log(`${numberOne} * ${numberTwo} = ${results}`);


