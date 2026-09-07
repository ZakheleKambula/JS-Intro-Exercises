//Exercise 3: What happens when you run the following program? Why do we get that result?
{
  let foo = 'bar';
}
console.log(foo);
//It returns a "ReferenceError: foo is not defined," because the variable is defined in a block scope. 