//Add a validation check to your evenOrOdd function from exercise2.js to ensure the arguemnt is an integer 

function evenOrOdd (number) {
  if (!(Number.isInteger(number))) {
    console.log("Error, not an integer!");
     return(number);
  }
  let remainder = (number % 2);
  if (remainder === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}
evenOrOdd("Hi");