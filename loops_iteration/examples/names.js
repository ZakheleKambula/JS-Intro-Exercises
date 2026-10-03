//The program program iterates over the names in an array of names and creates a new array with the names in uppercase

let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor',]; 
let upperNames = [];
let index = 0;

while (index < names.length) {
  let upperCaseName = names[index].toUpperCase();

  upperNames.push(upperCaseName);
    index += 1;
}
console.log(upperNames);











































