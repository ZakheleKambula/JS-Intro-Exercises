//The following code causes an infinite loop (a loop that never stops iterating). Why?

let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}
//The assignment operator (=) assigns the value on the left to the variable on the right every iteration 
//The first iteration:
//Intialization - the value 1 is assigned to counter. The value is a truthy value; therefore, the condition is true 
//Loop execution - console.log() prints 1 to the console
//The if statement check - is counter > 2? No, counter = 1; the break is skipped 
//Update/increment - counter += 1 -> 2. Counter = 2
//The second iteration:
//The value 1 is assigned to counter. The value is a truthy value; therefore, the condition is true 
//Loop execution - console.log() prints 1 to the console
//The if statement check - is counter > 2? No, counter = 1: the break is skipped 
//Update/increment - counter += 1 -> 2. Counter = 2
//This continues infinitely 