//Exercise 6: In the code below, identify the following: function arguments, body, declaration, invocation, name, parameters, return value, and all variable names
function multiplyNumbers(num1, num2, num3){
  let results = num1 * num2 * num3;
  return results;
}
let product = multiplyNumbers(2, 3, 4); 
//The arguments are: (2, 3, 4)
//The function body is everything inside the curly braces ({})
//The function declaration begins from the keyword function to closing curly brace
//The function invocation is: multiplyNumbers(2, 3, 4)
//The function name is: multiplyNumbers 
//The function parameters are: (num1, num2, num3)
//The function return value is 24; however, it is not logged to the console because there's no console.log(). 
//The names of all variables are: product, results, multiplyNumbers, num1, num2, and num3