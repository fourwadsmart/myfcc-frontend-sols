/** ====================================
            - OLD SOLUTION -
            Diff two arrays
    ==================================== **/

function diffArray(arr1, arr2) {
  let newArr = [];
  
  // Loop through arr1
  for(let i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) === -1) {
      newArr.push(arr1[i]);
    }
  }
  
  // Loop through arr2
  for(let i = 0; i < arr2.length; i++) {
     if (arr1.indexOf(arr2[i]) === -1) {
       newArr.push(arr2[i]);
     }
  }
  
  // Same, same; but different.
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
