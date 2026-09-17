//Exercise 5: What does the code below log to the console?
function scream(words) {
  return words + '!!!!';
}

scream('Yipeee');

//It logs nothing because there is no console.log() in the body function. 
//To run the program, function invocation must be passed as argument to console.log() to create function composition
//The screeam function will concatenate the function call's argument and the function body string literal into a single string