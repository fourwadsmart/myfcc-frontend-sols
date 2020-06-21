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


// same solutions with array filter method

function diffArray(arr1, arr2) {
  var newArr = []
  
  .concat(arr1.filter((u) => {
    return arr2.indexOf(u) == -1;
  }))
  
  .concat(arr2.filter((u) => {
    return arr1.indexOf(u) == -1;
  }));


  return newArr;
}






