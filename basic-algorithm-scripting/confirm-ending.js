/** ====================================
            - OLD SOLUTION -
     Check if string ends with certain
     value.
    ==================================== **/


function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  
  var start = str.length - target.length;
  var t = target.substr(0, target.length);
  var s = str.substr(start, str.length);
  
  if (t == s) {
    str = true;
  }
  
  else {
    str = false;
  }
  
  
  return str;
}

confirmEnding("Bastian", "n");




/** ======================================
            - NEW SOLUTION -
     NOTE: FCC Does not accepts solutions
     with endsWith() built-in method
    ====================================== **/

function confirmEnding(str, target) {
  return str.endsWith(target);
}
confirmEnding("Bastian", "n");


