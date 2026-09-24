//Without running this code, what will it print?

console.log(false ?? null);
//logs false 
//The program short-circuits when a value that is not nullish (neither null nor undefined) is encountered;

console.log(true ?? (1 + 2));
//logs true
//The value "true" is not nullish
// This leads to short-circuiting and program termination without evaluating the right operand

console.log((1 + 2) ?? true);
//logs 3
//The left operand's expression is evaluated and evaluates to 3
//The value 3 is not nullish
//The program short-circuits and terminates without evaluating the right operand

console.log(null ?? false);
//logs false
//Because the left operand's return value is nullish; the program moves to the evaluation of the right operand
//The right operand's return value is not nusllish, it is therefore logged

console.log(undefined ?? (1 + 2));
//logs 3
//The left operand's return value is nullish 
//The program moves to the evaluation of the right operand's return value
//The return value is 3, which is therefore logged to the console

console.log((1 + 2) ?? null);
//logs 3 
//short-circuits and terminates the program 
//The right-hand side operand is not evaluated 

console.log(null ?? undefined);
//logs undefined
//Because null is nullish, the program moves to evaluate the right operand
//The right operand is nullish too, so the last evaluated operand's value is returned

console.log(undefined ?? null);
//logs null
//The left operand is nullish; the right-hand side is evaluated
//The right-hand side is nullish too; null is returned because it is the last evaluated operand