//Without using either of those methods, 
//write a function named isNotANumber that returns 
// true if the value passed to it as an argument is NaN, 
// false if it is not.

function isNotANumber(argu1) {

  return (argu1 !== argu1);
}
console.log(isNotANumber(NaN));
console.log(isNotANumber("Zakes"));