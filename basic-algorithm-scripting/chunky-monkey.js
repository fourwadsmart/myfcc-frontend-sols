/** ====================================================================
                            - OLD SOLUTION -
                            ________________
                            
    PROBLEM:
     
    ==================================================================== **/



function chunkArrayInGroups(arr, size) {
  // Break it up.

  var arLenBySize = arr.length / size, arr2 = [], from = 0, to = size;
  
  for (i = 0; i < arLenBySize; i++) {
    
      arr2.push(arr.slice(from, to));
      from += size;
      to += size;
  
  }
  
  arr = arr2;
  return arr;
}

chunkArrayInGroups([0, 1, 2, 3, 4], 4);
