//Exercise 6: Will this program produce an error when run? Why or why not?
const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);
//No. Because the global scope variable only gets shadowed while the block scope variable is in scope. 
// But once the block scope goes out of scope (after the block {}), the global scope variable (FOO) comes into scope, and console.log() accesses and logs its value.