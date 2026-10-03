//Write a function that computes and returns the factorial of a number by using a for loop.

function factorialOfNumber(integer) {
  let product = 1;
  for (let counter = 1; counter <= integer; counter += 1) {
    product = counter * product;

  } //console.log(product);
    return (product); 
}
console.log(factorialOfNumber(3)); 
