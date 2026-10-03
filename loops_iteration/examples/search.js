//Create a file named search.js, add the code below, and run it  

let array = [3, 1, 5, 9, 2, 6, 4, 7];
let indexOfFive = - 1; 

for (let i = 0; i < array.length; i += 1) {
  if (array[i] === 5) {
    indexOfFive = i;
    break; // terminates the loop once the body loop condition evaluates to truthy 
  }
} 
console.log(indexOfFive);