//Exercise 11: Are the left and right variables on lines 2 and 3 the same as those on lines 11-13? Explain your reasoning.
function multiply(left, right) {
  let product = left * right;
  return product;
}

function getNumber(prompt) {
  return parseFloat(question(prompt));
}

let left = getNumber('Enter the second number: '); 
let right = getNumber('Enter the second number: ');
console.log(`${left} * ${right} = ${multiply(left, right)}`); 

//They differ in scope: 2 and 3 are local variables, and 11-13 are global.
//The variables 11 and 12 are different from 2 and 3 because they are defined as new global variables.
//The variables in line 2 are local parameters different from the global variables used as arguments in line 13 