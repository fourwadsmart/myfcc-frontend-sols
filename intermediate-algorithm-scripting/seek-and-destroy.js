/** ====================================================================
                            - NEW SOLUTION -
                            ________________
                            
    PROBLEM:
     You will be provided with an initial array (the first argument 
     in the destroyer function), followed by one or more arguments. 
     Remove all elements from the initial array that are of the 
     same value as these arguments.
     
    ==================================================================== **/

function destroyer(arr) {
  // convert arguments into array
  let args = Object.values(arguments);

  return arr.filter((el) => {
    // only elements that is not in the args.
    return args.indexOf(el) == -1
  });
  return arr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
