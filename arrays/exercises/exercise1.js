//In the following code, what are the final length values for array1, array2, array3, array4, and array5?

let array1 = [1, 2, undefined, 4];
//length value -> 4
//All items are elements assigned to indexes 0, 1, 2, 3 (from left to right)
//The primative value undefined is used as an element

let array2 = [1];
array2.length = 5;
//length value -> 5
//array2 .length property reassigns value 5, which creates 4 indexes with empty values
//array2 now has the value 1 at index 0 and 4 empty values at indexes 1-4

let array3 = [];
array3[-1] = [1];
//length value -> 0
//The addition of [1] at [-1] doesn't change the array length from zero 
//negative integer 'indexes' and their values are not recognized as indexes by the .length method 
//The length property index count starts at zero   

let array4 = [1, 2, 3, 4, 5];
array4.length = 3;
//length value -> 3
//array4 is reassigned three elements at indexes 0-2
//The elements that were previously at indexes 3 and 4 are discarded 

let array5 = [];
array5[100] = 3;
//length value -> 101
//array5 is reassigned the value 3 at index 100
//Length returns: "...A number one greater than the greatest used index position...", length is 101 (100 + 1)
