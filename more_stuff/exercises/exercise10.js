//What gets returned by y++ in the second snippet, and why?

let y = "5";
y++ 

//5
//The placement of the increment operator (++ ->increments by 1) determines the return value
//When the ++ is placed after the variable, 
//first, the value is coerced (if not numeric) to numeric type
//second, the value is returned before the increment
//thus the value (if it was a string) is replaced with a new numeric value without the increment
//the the increment happens
//but if the ++ is before the variable, 
//first, the value is coerced (if not numeric) to numeric type 
//second, the new numeric type is then incremented and returned 
//Since y comes before the increment, y doesn't retain its original value
//first, its string value type ('5') is coerced to numeric type
//second, the new numeric value (5) is returned  
//the new numeric value 6 (5 + 1) is assigned to the variable y
//thus y = 6

