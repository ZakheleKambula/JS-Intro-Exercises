//What does the following program log to the console? Why?

let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar (argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
}

bar(foo, qux);

console.log(foo.a);
console.log(qux);

//console.log(foo.a) -> hi;
//foo is by reference making mutation of the object a: 'hello' 
// -> a: 'hi' visible locally and globally 
//console.log(qux) -> hello;
//The variable qux is passed by value making its reassignment locally confined