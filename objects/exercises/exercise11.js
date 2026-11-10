//Write some code to replace the value 6 in the following object with 606

let obj = {
  foo: { a: "hello", b: "world" },
  bar: ["example", "men", null, {xyz: 6}, 88],
  qux: [4, 8, 12]
}; 
obj.bar[3].xyz = 606; 
console.log(obj);
//The dot notation gives access to the bar property in the obj object
//The index [3] locates the item at this specific index, the obejct: ({xyz:6})
//The bracket notation ['xyz'] gives access to the key property
//The assignment operator (=) tells JavaScript to replace the value 6 with 606
