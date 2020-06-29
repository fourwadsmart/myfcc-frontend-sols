/** ====================================================================
                            - OLD SOLUTION -
                            ________________
                            
    PROBLEM:
     
    ==================================================================== **/



function palindrome(str) {
  // Good luck!
  var strvd;
  
  var arr;
  
  var nonAlphNum = /[^a-z0-9]/gi; // none-alphanumeric RegEx
  
  str = str.replace(nonAlphNum, ""); // remove none-alphanumeric
  
  str = str.toLowerCase(); // string to lowercase
  
  arr = str.split(""); // convert string to array
  
  strvd = arr.reverse(); // reserve array
  
  // convert back to string
  strvd = strvd.reduce(function(prev, curr) {
    return strvd = prev + curr;
  });

  
  if (str === strvd) {
	return true;
  }
  
  else if (str !== strvd) {
	return false;
  }

}

palindrome("_EYEEY*****");

// CODE REFACTORED ~ 2020

function palindrome(str) {
  // Good luck!
  let strvd, arr;
  let nonAlphNum = /[^a-z0-9]/gi;
  str = str.replace(nonAlphNum, "").toLowerCase(); 
  arr = str.split("");
  // reverse and convert back to string.
  strvd = arr.reverse().reduce(function(prev, curr) {
    return strvd = prev + curr;
  });
  return str === strvd ? true : false;
}

palindrome("_EYEEY*****");




/** ====================================
                My new solution
             Refactoring my code
    ==================================== **/


function palindrome(str) {
  var bool = false;
  var nonAlphaNum = /[^a-z0-9]/g; // none-alphanumeric RegEx
  
  str = str.toLowerCase().replace(nonAlphaNum, "");
  var strRev = str.split("").reverse().join("");
  
  if (str == strRev) { 
    bool = true; 
  }
  
return bool;

}

palindrome("_EYEEY*****");


/** ====================================
                My new solution
       Refactoring my code even more
    ==================================== **/


function palindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  var strRev = str.split("").reverse().join("");
  return str === strRev;
}

palindrome("_EYEEY*****");
