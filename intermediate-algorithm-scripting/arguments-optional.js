/** ====================================================================
                            - OLD SOLUTION -
                            ________________
                            
    PROBLEM:
     Create a function that sums two arguments together. 
     If only one argument is provided, then return a 
     function that expects one argument and returns the sum.
     
     For example, addTogether(2, 3) should return 5, and addTogether(2) 
     should return a function.
     
     Calling this returned function with a single argument will then 
     return the sum:
     var sumTwoAnd = addTogether(2);
     sumTwoAnd(3) returns 5.
    ==================================================================== **/


function addTogether() {
  var arg = arguments;
  var sum = 0;
  if(arg.length === 1) { // if only one arg is passed
    if(typeof arg[0] !== "number") {return sum = undefined; }
    
    else {
      return function(s) {
        if(typeof s !== "number"){
          return undefined;
        }
        else {
          return s + arg[0]; 
        }
      }
    }
  }
  
  // if more than one argument is passed
  if(typeof arg[0] !== "number" || typeof arg[1] !== "number") {
     sum = undefined;
  }
  else {
     return sum = arg[0] + arg[1];
  }
    
  return sum;
}

addTogether(2)(5);
