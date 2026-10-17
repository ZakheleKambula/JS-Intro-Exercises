//Without using a for, while, or do/while loop, write some code that checks whether the number 3 appears inside these arrays:

let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];
function numberChecker(num1, num2, num3) {
  let result1 = num1.includes(3);
  console.log(result1);
  let result2 = num2.includes(3);
  console.log(result2);
  let result3 = num3.includes(3);
  console.log(result3);
  
};
numberChecker(numbers1, numbers2, numbers3);

//A cleaner version

/*let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];
function numberChecker(num1, num2, num3) {
  let result1 = num1.includes(3);
  
  let result2 = num2.includes(3);
  
  let result3 = num3.includes(3);

  return [result1, result2, result3];
  
};
console.log(numberChecker(numbers1, numbers2, numbers3));*/

