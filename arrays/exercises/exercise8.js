//Write a function similar to oddLengths in exercise 6 but without the map and filter method only the reduce method 

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
function oddLengths (strings) {
return strings.reduce((accumulator, element) => (element.length % 2 === 1? accumulator.concat(element.length) : accumulator), []);
};
console.log(oddLengths(arr));