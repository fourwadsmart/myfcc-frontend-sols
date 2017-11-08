/** ====================================
            - OLD SOLUTION -
            Where do I belong
    ==================================== **/



function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  
  arr.push(num);
  arr.sort(function compareNumbers(a, b) {
  return a - b;
  });
  
  return arr.indexOf(num);
}

getIndexToIns([2, 5, 10], 15);



/** ====================================
            - OLD SOLUTION -
            Where do I belong
        Rewritten with fat arrow func
    ==================================== **/


function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr.push(num);
  
  arr.sort((a, b) => {
    return a - b;
  });
  
  return arr.indexOf(num);
}

getIndexToIns([2, 5, 10], 15);

