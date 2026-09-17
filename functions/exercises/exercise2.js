//Dynamic greeter function that uses the return values to greet the user with their full name.

function dynamicGreeting(text){
  let rlSync = require("readline-sync");
  let userInput = rlSync.question(text);
return (userInput);
};
firstName = dynamicGreeting("What is your first name?\n");
lastName = dynamicGreeting("What is your last name?\n"); 
console.log(`Hello ${firstName} ${lastName}!`);






















