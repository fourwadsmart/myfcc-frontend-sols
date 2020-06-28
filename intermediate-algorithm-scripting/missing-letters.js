/** ====================================
            - OLD SOLUTION -
         missing letters - old solution
    ==================================== **/

function fearNotLetter(str) {
  str = str.split("");
  var charCode = str[0].charCodeAt();
  
  for(let i=0; i<str.length; i++) {
    if(str[i].charCodeAt() !== charCode) {
      str = String.fromCharCode(charCode);
      break; // program should stop after that
    }
    charCode++; 
    if (charCode == str[str.length-1].charCodeAt()) { 
      str = undefined;
      break; // program should stop after that
    }
  }
  
  return str;
}

fearNotLetter("bcd");

// CODE REFACTORED ~ 2020
// CLEAN AND MORE READABLE

function fearNotLetter(str) {
  var charCode = str[0].charCodeAt();

  for(let i=0; i<str.length; i++) {
    if(str[i].charCodeAt() !== charCode) {
      return String.fromCharCode(charCode);
    }
    charCode++; 
  }
  return undefined;
}
