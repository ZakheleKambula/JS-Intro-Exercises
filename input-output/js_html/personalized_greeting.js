//Greet the User by name example. 
//Create a file named personalized_greeting.js with the following code:
let rlSync = require('readline-sync');
let name = rlSync.question("What is your name?\n");
console.log(`Good Morning, ${name}!`);
