//Exercise 1 Does executing the foo function affect the output? Why or why not?
let bar = 1;
function foo(){
  let bar = 2;
}
foo();
console.log(bar);
//No, because the declaration and intialization of a new variable bar happens locally. 
// The global scope of the variable bar gets shadowed (goes out of scope) while the body function executes.
//But comes back in scope once the function foo() is done executing. 
// The execution of foo would affect the output only if the body function reassignment did not use "let." 
// Thus the output is 1. 