/** ====================================================================
                            - OLD SOLUTION -
                            ________________
                            
    PROBLEM:
     
    ==================================================================== **/




function rot13(str) { // LBH QVQ VG!
  str = str.toLowerCase();
  var str2 = "";
  var char;
  for(let i = 0; i < str.length; i++) {
    char = str[i].charCodeAt();
    if (char < 97) { // char less than "a"
      str2 += str[i];
    }
    else if (str[i].charCodeAt() < 110) { // char less than "m". 
      str2 += String.fromCharCode(char + 13);
    }
    else {
      str2 += String.fromCharCode(char - 13); // char greater than "m"
    }
  }
  str = str2.toUpperCase();
  
  return str;
}

// Change the inputs below to test
rot13("LBH QVQ VG! - SERR PBQR PNZC");


