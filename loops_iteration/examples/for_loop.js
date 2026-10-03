//Use name.js code as for loop and return all names except 'Naveed' (using the continue statement)
let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor',]; 
let upperCaseNames = [];

for (let index = 0; index < names.length; index +=1) {
  if (names[index] === 'Naveed') {
    continue;
  }

  let upperCase = names[index].toUpperCase();
  upperCaseNames.push(upperCase);
}
console.log(upperCaseNames);