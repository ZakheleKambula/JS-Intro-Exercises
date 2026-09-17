//Exercise 4: What does the following code log to the console?
function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}

scream('Yipeee');
//It doesn't log anything because the console.log() function comes after the return statement
//The return statement ends the function's execution, and anything beyond it is unreachable code.
//The console.log() function would have to move above the return statement to execute and log to the console. 