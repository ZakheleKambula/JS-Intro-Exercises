//Create a function that creates and returns a copy of an object 
//Do not mutate the original object 
//The function should let you omit the array of key arguemnt when calling the function
//If you do omit the argument, the function
//should copy all the existing keys from the object 

let userInfo = {
  name: 'Zee', 
  surname: 'Kambula', 
  country: 'South Africa',
};


let arrayOfKeys = Object.keys(userInfo);

function copyOfObject(argu1, argu2) {
 let emptyObject = {};
 if (argu2 === undefined) {
  argu2 = Object.keys(argu1);
  
 };
  for (keys in argu2) {
  argu2[keys];
  argu1[argu2[keys]];
  emptyObject[argu2[keys]] = argu1[argu2[keys]];

 } return emptyObject;
 
};
copyOfObject(userInfo, /*arrayOfKeys*/); 
