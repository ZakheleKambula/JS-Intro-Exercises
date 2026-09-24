//exercise 1: What values do the following expression evaluate to?

false || (true && false); //Due to the operation precedence the expression in parenthesis is evaluated first
//false || false 
//The AND (&&) operator requires both values to be true to retun true but since they are not, it returns false
//The OR (||) operator requires either value to be true but since none isn't, it returns false 

true || (1 + 2); //The expression evaluates to true because the OR operator requires only one value to evaluate to true
//Since the condition is met, short-circuit evaluation executes, and the program terminates without evaluating the right-side operand

(1 + 2) || true; // 3
//The left operand evaluates to 3; which is truthy, the short-circuit evaluation executes, and the program ends
//Because 3 is a truthy value, the condition evaluates to 3, and the right operand is not evaluated.

true && (1 + 2); // 3
//The AND operator requires both operands' values to evaluate to truthy to return true
//The right checks out; the expression evaluates to 3, which is a truthy value, also checks out 
//The last operand to be evaluated has its value returned as the result

false && (1 + 2); // false
//The left operand evaluates to falsy
//The short-circuit evaluation executes and ends the program
//The right operand is not evaluated
//The result is the value false

(1 + 2) && true; // true
//The left operand evaluates to 3, which is a truthy value
//The right is evaluted second and evaluates to true, also a truthy value
//The last evaluated operand has its value returned as the result

(32 * 4) >= 129; // false
//The left operand is evaluated first and evaluates to the value 128
//The greater than or equal to operator then compares 128 and 129
//128 is not greater than or equal to 129
//The entire expression evaluates to false and returns the boolean value false

false !== !true; //false 
//The strick inequality operator (!==) checks for inequality in type and value 
//The NOT (!) operator has a higher precedence over the !== operator
//!true is evaluated first, which evaluates to false by negation (!)
//The left operand is checked second, which evaluates to falsy
//The final comparison is: false !== false making the expression strickly equal
//Therefore, the entire expression evaluates to false
//The boolean value false is returned

true === 4; // false 
//The strick equality operator checks for equality in type and value 
//Moving from letf to right; the left operand's value is boolean (true)
//The right operand's value is a number (4)
//Both operands are different in value and type, thus stictly unequal
//The entire expression evaluates to false

false === (847 === '847'); // true 
//The expression in the parentheses has operation preference 
//The operands in the parenthesis are different in type (Number and String)
//The entire expression in the parenthesis evaluates to false
//The final comparison is: false === false, which is strictly equal
//The entire expression evaluates to true 

false === (847 == '847'); // false
//The loose equality operator in the parenthesis compares for equality 
//If operands value have different types, the == coerses the String to Number type
//The string value ('847') is coerced to a Number type value (847)
//The parenthesis expression becomes: (847 == 847), which evaluates to true
//The final comparison is: false === true
//The entire expression evaluates to false because the === operator requires equality in type and value 

(!true || (!(100 / 5) === 20) || ((328/4) === 82)) || false;
//The parenthesis have the highest order of grouping
//The first entire grouped expression A is: (!true || (!(100 / 5) === 20) || ((328/4) === 82)) 
//The second grouped expression B is: false
//The NOT (!) operator has the highest precedence in comparison operations
//Step 1 (isolation for evaluation): !true || (!(100 / 5) === 20)
//Step 1.1 (step 1 evaluation): false || (!(20) === 20), true is negated to false and (100/5) evaluates to (20)
//Step 1.2 (step 1.1 parenthesis evaluation): (!20 === 20) evaluates to false 
//Step 1.3 (Step 1 final comparison): false || false (the evaluation contininues because no truthy value is encountered yet)
//Step 2 (evaluate): ((328/4) === 82)) || false;
//Expression in parenthesis have the highest precedence
//Step 2.1: (parenthesis evaluation): ((328/4) === 82)) evalutes to (82 === 82))
//Step 2.1 (parenthesis final comparison): (82 === 82) evaluates to true 
//Step 2 (parenthesis final result): true
//Step 3 (Short-circuit evaluation execution): the program ends when truthy is encountered
//Step 3.1: The rest of the expression (|| false) is not evaluated
//Step 4 (The entire expression result): true
