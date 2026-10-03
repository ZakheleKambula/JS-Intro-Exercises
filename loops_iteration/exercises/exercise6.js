//Reimplement the factorial function from exercise 2 using recursion. Once again, you may assume that the argument is always a positive integer.

function factorialNumber(integer) {
  let result = 1;
  for (counter = 1; counter <= integer; counter += 1) {
    result = counter * result;
  } return(result);
  
} 
console.log(factorialNumber(7));