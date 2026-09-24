//Write a function that logs whether an integer is between 0 and 50 (inclusive),
//between 51 and 100 (inclusive), greater than 100, or less than 0.

function integerInRange (number1) {
  if (number1 >= 0 && number1 <= 50 ) {
    console.log(`${number1} is between 0 and 50`);
  } else if
    (number1 >= 51 && number1 <= 100) {
      console.log(`${number1} is between 51 and 100`)
    } else if 
    (number1 > 100) {
      console.log(`${number1} is greater than 100`);
    } else if 
    (number1 < 0) {
      console.log(`${number1} is less than 0`);
    }
};

integerInRange(25);
integerInRange(75);
integerInRange(125);
integerInRange(-25);
