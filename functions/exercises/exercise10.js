//Exercise 10: Classify each variable as either global or local. For this purpose, the code is the entire program. 
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

//line 2: multiply is a global variable but left and right are local variables
//line 3: product, left, and right are local variables 
//line 4: product is a local variable 
//line 7: getNumber is a global variable but prompt is a local variable. 
//line 8: parseFloat and question are global variables but prompt is a local variable
//line 11: left and getNumber are global variables
//line 12: right and getNumber are global variables
//line 13: console, log, left, right, and multiply are all global variables