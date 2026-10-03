//Modify the age.js program you wrote in the exercises for the input/output chapter to use a for loop

let rlSy = require('readline-sync');
let name = 'Zee'; 
let userAge = Number(rlSy.question('What is your age?\n'));
for (let future = 10; future <= 40; future += 10) {
    console.log(`In ${future} years, ${name} will be ${userAge + future} years old.`);
}
 

//First iteration
//Initialization: future is declared as 10
//condition: checks if the expression is truthy or false
//If true, the body loop executes but if not, the body loop doesn't
//The condition is truthy because the operands values are all truthy
//Console.log(): In (10) years, (Zee) will be (10 + 10) years old 
//logs: In 10 years, Zee will be 20 years old. 
//Increment: future (10) += 10 -> 20 
//future = 20

//Second iteration
//condition: checks if future (20) <= 40, which is (less), the loop body executes
//Console.log(): In (future) years, (name) will be (10 + 20) years old 
//logs: In 20 years, Zee will be 30 years old. 
//Increment: future (20) += 10 -> 30 
//future = 30
//This continues for the third and fourth iteration 
//After the fourth iteration, future = 50 (increment (40 + 10))
//Condition: evaluates to false (50 !<= 40), the program terminates 