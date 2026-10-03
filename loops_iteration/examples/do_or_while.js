//Asks user if they want to repeat an action and repeats question if yes

let answer; 
do {
  answer = prompt("Do you want to do that again?");
} while (answer === 'y');
