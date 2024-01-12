/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  str = str.replace(/[^a-zA-Z ]/g, "")
  let s=0; e=str.length-1;

  while(s<=e){
    if(str[s] === str[e]){
      s++;
      e--;
      return true;
    }
    else{
      return false;
      break;
    }
  }
  return true;
}

module.exports = isPalindrome;
