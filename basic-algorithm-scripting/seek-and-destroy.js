/** ====================================
            - OLD SOLUTION -
            Seek and Destroy
    ==================================== **/


function destroyer(arr) {
  // Remove all the values
  var arg = arguments;
  function destr(a) {
      return a !== arg[1] && a !== arg[2] && a !== arg[3];
  }
  arr = arr.filter(destr);
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);


/** ====================================
            - NEW SOLUTION -
            Seek and Destroy
       Rewrite it with fat arrow func
    ==================================== **/


function destroyer(arr) {
  // Remove all the values
  var arg = arguments;
  return arr = arr.filter((a) => {
      
    return a !== arg[1] && a !== arg[2] && a !== arg[3];
    
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);