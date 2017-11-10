/** ====================================================================
                            - OLD SOLUTION -
                            ________________
                            
    PROBLEM:
     Check if the predicate (second argument) is truthy on all elements 
     of a collection (first argument).
     
     Remember, you can access object properties through either 
     dot notation or [] notation.
    ==================================================================== **/



function truthCheck(collection, pre) {
  // Is everyone being true?
  var allTrue = true; // assume it is true for all
  var falsy = [false, 0, "", null, undefined]; // falsy
  
  for(i=0; i<collection.length; i++) {
    var col = collection[i][pre];
    for(j=0; j<falsy.length; j++) {
      // NaN is tricky. It is not equal to anything. Not even itself
      if(col === falsy[j] || col !== col) {
        allTrue = false;
        break;
      }
    }
    if(allTrue === false) 
    {break;} // stop loop if false
  }
  pre = allTrue;
  return pre;
}

truthCheck([{"single": "double"}, {"single": NaN}], "single");
