//Does the following code produce an error? Why or why not? What output does this code send to the console?

for (let i = 0; i < 5;) {
  console.log(i += 1);
}

//No
//Becaue the code has all three parts of a loop: statement, condition and update (although not in the header but body loop)
//The code logs 1-5, and terminates when i = 5 after the fifth iteration and subsequent increment 

