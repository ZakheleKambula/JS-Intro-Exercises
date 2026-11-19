//What do the following error message and stack trace tell you?

/*$ node exercise2.js
/Users/wolfy/tmp/exercise2.js:4
  console.log(greeting);
              ^

ReferenceError: greeting is not defined
    at hello (/Users/wolfy/tmp/exercise2.js:4:15)
    at Object.<anonymous> (/Users/wolfy/tmp/exercise2.js:13:1)
    at Module._compile (internal/modules/cjs/loader.js:721:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:732:10)
    at Module.load (internal/modules/cjs/loader.js:620:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:560:12)
    at Function.Module._load (internal/modules/cjs/loader.js:552:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:774:12)
    at executeUserCode (internal/bootstrap/node.js:342:17)
    at startExecution (internal/bootstrap/node.js:276:5)*/

//line 3 -> the code is run in node and the file name is: exercise2.js (js -> JavaScript file)
//line 4 -> The error is at line 4 of exercise2.js  
//line 5 -> the visual representation of where the error is
//line 8 -> defines the exception as a ReferenceError -> "greeting" is not defined (or doesn't exist in memory)
//line 9 -> hello is the function call
//line 10 -> anonymous object (function) at code line 13 the first character 
