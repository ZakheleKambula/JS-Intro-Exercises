//Add the following code to a file named greeting.js and run it
//Global variable
let greetingMessage = "Good Morning!";

function greetPeople(){
  console.log(greetingMessage);
}
function changeGreetingMessage(newMessage){
  greetingMessage = newMessage;
}
changeGreetingMessage("Good Evening");
greetPeople();

