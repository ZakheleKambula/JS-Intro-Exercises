//Create a new object named myObj that uses myProtoObj as its prototype

let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj); 
//Object.create(myProtoObj) creates a new empty object ({}) with the label (myObj) in memory 
//myObj inherits all the properties of myProtoObj through this prototype link 