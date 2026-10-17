//log to the console all even values from arrays nested in the single outer array (myArray) 

let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];
myArray.forEach(innerArray => {
  innerArray.forEach(evenNums => {
    if (evenNums % 2 === 0) {
      console.log(evenNums);
    }
  })
});