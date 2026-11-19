//Write a function that searches an array of strings for every element 
//that matches the regular expression given by its argument. 
//The function should return all matching elements in an array.

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];


function allMatches(argu1, argu2) {
    return argu1.filter(string => argu2.test(string))
}

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']
