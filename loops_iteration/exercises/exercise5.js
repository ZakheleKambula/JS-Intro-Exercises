// Refactor the code so that you don't need to call randomNumberBetween from two different locations 
function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;
let result;

 do {result = randomNumberBetween(1, 6); 
   tries += 1;
 
 } while (result <= 2);
 if (tries === 1) {
  console.log('It took ' + String(tries) + ' try to get a number greater than 2');//Added an if/statement to make the code dynamic
 } else {
  console.log('It took ' + String(tries) + ' tries to get a number greater than 2');
 };
 