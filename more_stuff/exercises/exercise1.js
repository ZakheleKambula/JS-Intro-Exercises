//What does this code log to the console, why?

let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);

//it logs -> [1, 4, 3]
//The variables array1 and array2 share the same pointer that references the same object array in memory [1, 2, 3]
//The variables array1's reassignment of element value [2] at index [1] with the new element value (4) 
//is visible to array2 because both variables point to the same object array in memory
//This reassignment is the direct cause of the object array's mutation from [1, 2, 3] -> [1, 4, 3]