//What does the following code log to the console, and why?

function barCodeScanner(serial) {
  switch(serial) {
    case '123' :
      console.log('Product1');
    case '113' :
      console.log('Product2');
    case '142' :
      console.log('Product3');
    default:
      console.log('Product not found!');
  }

}
barCodeScanner('113');
//logs: Product2, Product3, Product not found!
//JS passes the function call's argument ('113') through the function's parameter (serial) to the switch statement to search for a match in the cases 
//The switch statement evaluates the first (case '123') for a match, but it doesn't match; it skips its print statement
//The reason the case '123' print statement is skipped, but the others are printed (later), is because the later statements come after the condition is met
//When a condition is met and prints, if no exit measures are set, any console.log() below will be printed too, this is called the "fall-through"
//JS no longer checks for validity and the function (console.log()) does its job of printing 
//The second case (Case '113') search is a match, and its print statement logs to the console
//Because there is no "break" keyword that stops the program after a case evaluates to true (matches), the program continues
//The third case (case '142') console statemtent logs to the console
//The default (or else) statement (which is supposed to log when no condition evaluates to true) logs to the console
//The switch statement stops at the end of the block because there is nothing else to log