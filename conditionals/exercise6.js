//What does this code output to the console?

function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}
isArrayEmpty([]);

//Not empty
//Because the if statement checks for truthiness 
//The function's invocation value ([]) is an object, which is not a falsy value