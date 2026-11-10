//Add a qux property with value 3 to the myObj object we created in the previous exercise. 
//Now, examine the following code snippets:
//Without running this code, 
//can you determine whether these two snippets produce the same output? Why?

let myProtoObj = {
  foo: 1,
  bar: 2,
};


let myObj = Object.create(myProtoObj); 
myObj.qux = 3

//Snippet 1
let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});

//Snippet 2
for (let key in myObj) {
  console.log(key);
};

//No
//Snippet 1 only outputs qux, the key property of the object - myObj
//The for/in loop iterates over all the key properties of the object and its prototype
//Snippet 2 in addition to producing the key property qux of the object - myObj,
//outputs all the key properties (foo and bar) of its prototype (myProtoObj)


