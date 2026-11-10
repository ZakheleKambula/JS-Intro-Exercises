//use object literal syntax to create an object that behaves like an array in a for statement 

let myArray = {0: 'VolksWagen', 1: 'GTI', 2: '2016', length:3,
};
for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}
