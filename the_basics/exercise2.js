//Exercise 2: Extract thousands, hundreds, tens, and ones digits from 4936.

let fourDigitsNumber = 4936;
const BASE = 10;

let onesPlace = (fourDigitsNumber %BASE);//6
let remainingNumber = (parseInt(fourDigitsNumber/BASE));//493
let tensPlace = (remainingNumber%BASE);//3
remainingNumber = (parseInt(remainingNumber/BASE));//49
let hundredsPlace = (parseInt(remainingNumber%BASE));//9
remainingNumber = (parseInt(remainingNumber/BASE));//4
let thousandsPlace = (remainingNumber);//4


console.log(`1. thousands place is ${thousandsPlace}`);
console.log(`2. hundreds place is ${hundredsPlace}`);
console.log(`3. tens place is ${tensPlace}`);
console.log(`4. ones place is ${onesPlace}`);













