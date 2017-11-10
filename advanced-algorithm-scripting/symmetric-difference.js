/** ====================================================================
                            - OLD SOLUTION -
                            ________________
                            
    PROBLEM:
     Create a function that takes two or more arrays and returns an 
     array of the symmetric difference (△ or ⊕) of the provided arrays.

    Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), 
    the mathematical term "symmetric difference" of two sets is the set 
    of elements which are in either of the two sets, but not in both 
    (A △ B = C = {1, 4}). For every additional symmetric difference 
    you take (say on a set D = {2, 3}), you should get the set with 
    elements which are in either of the two the sets but not both 
    (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).
    ==================================================================== **/



function sym(args) {
  var allArgs = arguments;
  var newArr = []; // this just hold temp values
  var curArg = [];
  
  // remove duplicates from sub-arrays
  for(i = 0; i < allArgs.length; i++) {
    for(ii = 0; ii < allArgs[i].length; ii++) {
	  if(newArr.indexOf(allArgs[i][ii]) == -1) {newArr.push(allArgs[i][ii]);}
    }
    allArgs[i] = newArr; // replace with reduced array version
    newArr = []; // empty temp array
  }
  
  // copy non-symetric values uppon comparison
  newArr = allArgs[0]; // first array is preloaded
  for(j = 1; j < allArgs.length; j++) {
    newArr = newArr.concat(allArgs[j]); // merging with the first array
 
    // remove duplicates
    for(h = 0; h < newArr.length; h++) {
      if(newArr.indexOf(newArr[h]) == newArr.lastIndexOf(newArr[h])) {
        // push non-symmetric to a new array
        curArg.push(newArr[h]);
      }
    }
    newArr = curArg; // newArr contain non-symmetric value
    curArg = []; // empty current array
    
  }
  
  return newArr;
  
}

sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]);
