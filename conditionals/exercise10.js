//Without running this code, what will it print?
function show(foo = undefined, bar = null) {
  console.log(`foo is ${foo ?? 3}, bar is ${bar ?? 42} `);
}
show(5, 7);
show(0, 0);
show(4);
show();

//The first function invocation: show(5, 7)
//logs: foo is 5, bar is 7 
//The function call's arguments (5, 7) are passed to the function's parameters (foo and bar)
//The string interpolation becomes: foo is ${5 ?? 3}, bar is ${7 ?? 42}
//The arguments 5 and 7 are non-nullish values
//The program short-circuits and terminates
//The values of the last evaluated operands are returned (5 and 7)
//The right-hand operands of both arguments are not evaluated

//The second function invocation: show(0, 0)
//logs: foo is 0, bar is 0
//The function call's arguments (0, 0) are passed to the function's parameters (foo and bar)
//The string interpolation becomes: foo is ${0 ?? 3}, bar is ${0 ?? 42}
//The arguments 0 and 0 are non-nullish values
//The program short-circuits and terminates
//The values of the last evaluated operands are returned (0 and 0)
//The right-hand operands of both arguments are not evaluated

//The third function invocation: show(4)
//logs: foo is 4, bar is 42
//The string interpolation becomes: foo is ${4 ?? 3} and bar is ${null ?? 42}
//The first expression evaluates to 4 
//Because the function invocation has one argument, the rule of the function is to assign the default value to missing arguments in function calls 
//Therefore, null is assigned as the function inovocation's second argument
//Because null is nullish, the program moves to the evaluation and return of the non-nullish value (42)
//The last evaluated operand's values are returned (4 and 42)
//The program terminates after the second operand's return value and logs the results

//The fourth function invocation: show()
//logs foo is 3, and bar is 42
//The string interpolation expression is: foo is ${undefined ?? 3}, bar is ${null ?? 42}
//The parameters get initialized with the default values due to no corresponding arguments in the function invocation
//Because both default values are nullish, the non-nullish values are the last to be evaluated and returned
//The program terminates and logs the return values 