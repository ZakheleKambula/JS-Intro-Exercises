//Use map and filter to first determine the lengths of all the elements in an array of string values, then discard the even values (keep the odd values).

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
function oddLengths(array) {
return array.map(allValuesLengths => allValuesLengths.length).filter(oddValuesLengths => oddValuesLengths % 2 !== 0);
};
console.log(oddLengths(arr));
