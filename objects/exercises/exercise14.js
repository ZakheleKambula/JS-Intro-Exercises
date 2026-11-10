//Identify all of the variables, object property names, primitive values, 
//and objects shown in the following code (assume the code has not been executed).

function hello(greeting, name) {
  return greeting + ' ' + name;
}; 

function xyzzy() {
  return {a: 1, b: 2, c: [3, 4, 5], d: {} };
}

const howdy = hello('hi', 'Grace'); 
let foo = xyzzy();

//variables -> hello, greeting, name,
//xyzzy, 
//howdy, foo,

//object property names -> 
//a, b, c, d,

//primitive values -> ' '
//a, b, c, d, 1, 2, 3, 4, 5
//'hi', 'Grace'

//objects -> 
/*function hello(greeting, name) {
  return greeting + ' ' + name;
};*/

/*function xyzzy() {
  return {a: 1, b: 2, c: [3, 4, 5], d: {} };
}*/
//{a: 1, b: 2, c: [3, 4, 5], d: {} }, 
//[3, 4, 5], 
//{}
