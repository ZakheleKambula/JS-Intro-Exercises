//What does the following function do?

function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}

//The function returns an array of each elements's length
//the string parameter takes an argument(a string)
//the string argument in the function calls the split(' ') method
//which returns an array with string elements 
//the array is passed to the reverse() method 
//which reverses the order of the elements
//then the .map() iteration method creates a new array with the elements' length
//from the callback function 
//which is then returned by the return statement
