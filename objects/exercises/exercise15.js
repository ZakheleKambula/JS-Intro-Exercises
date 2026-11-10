//Identify all of the variables, object property names, primitive values, and objects in the following code. 
//This problem is even more challenging than the previous one.
//Note that some items in this program may appear in multiple categories.

function bar(argu1, argu2) {
  let foo = 'Hello';
  const qux = {
    abc: [1, 2, 3, [4, 5, 6]],
    def: null,
    ghi: NaN,
    jkl: foo,
    mno: argu1,
    pgr: argu2,
  };
  return qux;
}
let results = bar('Victor', 'Antonina'); 

//variables -> bar, argu1, argu2, foo, qux, results
//object property names -> abc, def, ghi, jkl, mno, pgr
//primitive values -> 'Hello', abc, def, ghi, jkl, mno, pgr, 1, 2, 3, 4, 5, 6, NaN, null
//'Victor', 'Antonina'
//objects -> bar,
/*
{
    abc: [1, 2, 3, [4, 5, 6]],
    def: null,
    ghi: NaN,
    jkl: foo,
    mno: argu1,
    pgr: argu2,
  };
*/ 
//[1, 2, 3, [4, 5, 6]]
//[4, 5, 6]