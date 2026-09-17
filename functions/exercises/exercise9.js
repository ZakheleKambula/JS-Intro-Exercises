//Exercise 9: Identify all of the variables named on each line of the following code
function multiply(left, right) {
  let product = left * right;
  return product;
}

function getNumber(prompt) {
  return parseFloat(question(prompt));
}

let left = getNumber('Enter the first number:');
let right = getNumber('Enter the second number:'); 
console.log(`${left} * ${right} = ${multiply(left, right)}`);

//Line 2: multiply, right and left (parameters)
//line 3: product, left and right 
//line 4: product
//line 7: getNumber, prompt (parameter)
//line 8: parseFloat, question, and prompt
//line 11: left, getNumber 
//line 12: right, getNumber
//line 13: console, log, right, left, multiply