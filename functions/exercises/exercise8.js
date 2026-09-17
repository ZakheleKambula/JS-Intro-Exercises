//Exercise 8: Without running the following code, what do you think it will output?
function foo(bar, qux) {
  console.log(bar);
  console.log(qux);
}

foo(42, 3.1415, 2.718);

//First, foo will intialize console.log(bar) and log the value 42
//Second, foo will intialize console.log(qux) and log the value 3.1415
//Lastly, the value 2.718 will be ignored because there is no parameter to pass the argument through