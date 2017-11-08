/** ====================================
            - OLD SOLUTION -
            Truncate a string
    ==================================== **/

function truncateString(str, num) {
  // Clear out that junk in your trunk
  var dots = "...";
  var strLen = str.length; // save string length in a var
  
  if (strLen <= num) { str = str;}
  
  else
    if (strLen > 3) {
      if (num <= 3) { str = str.substr(0, num) + dots;}
      else { str = str.substr(0, num-3) + dots;}
      
  }
  
  else
    if (strLen <= 3) { str = str.substr(0, num) + dots;}
  
  return str;
  
}

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);



/** ====================================
            - NEW SOLUTION -
            Truncate a string
    ==================================== **/

