//Create a file named say2.js and add the code below:

//Example 1: Hardcoded function
console.log("hello");
console.log("hi");
console.log("how do you do");
console.log("Quite all right");

//Example 2: Dynamic/flexabile code, can make changes in one line of code
function say (text){
  console.log(text);
} 
say("hello");
say("hi");
say("how do you do");
say("Quite all right");

//Example 3: Make changes (==>) in one location  
function say(text){
  console.log("==>" + text);
} 
say("hello");
say("hi");
say("how do you do");
say("Quite all right");

//Example 4.1: Let's create an add function that returns the sum of two numbers without console.log():
function add(a, b){
  return a + b;
}
add(2, 3); 
//Example 4.2: Let's create an add function that returns the sum of two numbers with console.log():
function add(a, b){
  return a + b;
}
console.log(add(2, 3)); 

//Example 5: Default Parameter
function say(text = "hello") {
  console.log(text + "!");
}
say("Howdy");
say();
say("");
say(undefined);

//Example 6: Nested functions
function nest(text = "Who am I?"){
  function nested(text = "Who am I?"){
    console.log(text + " " + "I am the child, the nested function" + " " + "and only accessible within the parent scoop" + "!");//private helper function
  };
  console.log(text + " " + "I am the parent, the nesting function" + "!");
  nested()
  nested("I am the reason the default text value is ignored.");//The default value is ignored because of the provided argument
}
nest();
