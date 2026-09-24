//Write a function that takes a string and returns all-caps if characters are >10

function isLongerThanTen (text) {
  if (text.length > 10) {
    return(text.toUpperCase());
  } else {
    return(text);
  }

};