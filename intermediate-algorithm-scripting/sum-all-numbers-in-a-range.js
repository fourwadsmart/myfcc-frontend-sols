/** ====================================
            - OLD SOLUTION -
          Sum numbers in a range
    ==================================== **/


function sumAll(arr) {
  
  let sum = Math.min(arr[0], arr[1]);
  let numOfSum = Math.max(arr[0], arr[1]) - Math.min(arr[0], arr[1]);
    
  for (let i = 1; i <= numOfSum; i++) {
    sum += Math.min(arr[0], arr[1]) + i;
  }
  
  return sum; 
}
sumAll([5, 10]);
