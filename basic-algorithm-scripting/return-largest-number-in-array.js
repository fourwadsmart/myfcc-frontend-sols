/** ====================================
     return largest number in 2d array
            - OLD SOLUTION -
    ==================================== **/


function largestOfFour(arr) {
  // You can do this!
  let ln; // undefined largest number
  
  for (let i = 0; i < arr.length; i++) { // looping parent array
    
    ln = arr[i][0]; // assuming that first number in each sub-array is the largest 
    
    for (let j = 1; j < arr[i].length; j++) { // looping sub-array
      
      arr[i][j] > ln ? ln = arr[i][j] : ln = ln; // comparing numbers in sub-array
      
    }
    
    arr[i] = ln; // returning sub-array largest number
    
  }
  
  return arr;
}

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);



/** ====================================
                - NEW SOLUTION -
        Using Array built in methods:
        array.map() and array.reduce()
    ==================================== **/




function largestOfFour(arr) {
  
  return arr.map((a) => {
    return a.reduce((acc, cur) => Math.max(acc, cur));
  });
  
}

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
