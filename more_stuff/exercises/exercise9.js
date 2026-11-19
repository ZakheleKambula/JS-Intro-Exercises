//There are other ways to detect a -0 value. 
// Without using Object.is, write a function that will return true if the argument is -0, 
// and false if it is 0 or any other number.

function isNegativeZero(num) {
  return (1 / num === -Infinity);
}
console.log(isNegativeZero(-0));
console.log(isNegativeZero(0));
console.log(isNegativeZero(-100));
