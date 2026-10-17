//use the map function to create a new array with strings('even' and 'odd') corresponding with each value from the original array

let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

let stringArray = myArray.map(nums => {
  if (nums % 2 === 0) {
    return 'even';
  
  } else {
    return 'odd';
  };
});
console.log(stringArray);