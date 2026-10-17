//Write a findIntegers function that uses a filter method to return an array that contains only integers

function findIntegers(array) {
  let num = array.filter(num => Number.isInteger(num));
  return num;
};
console.log(findIntegers(['Zee', 3, 'Zacks', 5, 8, 'b', 10]));