/** ========================================
               - OLD SOLUTION -
    ======================================== **/

function smallestCommons(arr) {
  let gVal = Math.max(arr[0], arr[1]); // greatest value in array
  let lVal = Math.min(arr[0], arr[1]); // smallest value in array
  let lcm = 0; // an initial value for lcm
  
  // let's look for the lcm
  do {
    lcm += lVal; // do this until we find a value that is divisible by gVal
  } while(lcm % gVal !== 0);
  
  // now let's get the dirty job done!
  var lcmfr = false;
  
  while(lcmfr === false) {
    for(let i=lVal; i<=gVal; i++) {
      // check that all value can evenly divide lcm
      lcm%i !== 0 ?  lcmfr = false: lcmfr = true;
      // break if any range value cannot evenly divide lcm
      if(lcmfr === false) {
        lcm+=lVal;
        break; // stop loop if false
      }
    }
    
  }
  //console.log(lcmForRange());
  arr = lcm;
  return arr;
}

smallestCommons([1,13]);
