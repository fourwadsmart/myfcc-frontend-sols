/** ====================================
             - OLD SOLUTION -
      Repeat a string a number of times
    ==================================== **/


function repeatStringNumTimes(str, num) {
  // repeat after me
  var i = 1;
  var stradd = str;
  
  if(num > 0) {
    while(i < num) { 
      stradd = stradd + str;
      i++;
    } 
  }
  
  else { stradd = "";}
  
  str = stradd;
  return str;
  
}

repeatStringNumTimes("abc", 3);



/** ====================================
             - NEW SOLUTION -
      Repeat a string a number of times
    ==================================== **/


function repeatStringNumTimes(str, num) {
  
  if(num > 0) {
    return str.repeat(num);
  }
  return str = "";
}

repeatStringNumTimes("abc", 3);
