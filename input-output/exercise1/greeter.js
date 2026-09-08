//Exercise 1: Write a dynamic greeter program named greeter.js that inputs name and outputs "Hello, {name}!"
let rlSync = require('readline-sync');
let firstName = rlSync.question("What is your name?\n");
console.log(`Hello, ${firstName}!`);
