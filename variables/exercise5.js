//Exercise 5: What does this program log to the console? Why?
let foo = 'bar';
{
  let foo = 'qux';
  
}
console.log(foo);
//It logs the global scope's value because the console.log() function is outside the block scope where a new variable with the same name but a different value is declared. 
// If console.log() were in the block scope, the global scope's variable would be temporarily hidden and inaccessible (shadowed) to the inner block, and the inner value would be logged to the console. 
// If both scopes had console.log(), each scope's value would be logged. 