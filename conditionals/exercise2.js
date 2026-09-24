//Write a function, evenOrOdd, that determines whether its arguement is an even number and log accordingly

function evenOrOdd (number) {
  let remainder = (number % 2);
  if (remainder === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
} 
evenOrOdd(25);