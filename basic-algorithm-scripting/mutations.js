/** ====================================
            - OLD SOLUTION -
         Mutation old  solution
    ==================================== **/

function mutation(arr) {
  let bool;
  arr[0] = arr[0].toLowerCase();
  arr[1] = arr[1].toLowerCase();
  
  for(let i=0; i < arr[1].length; i++) {
    if (arr[0].indexOf(arr[1][i]) !== -1) {
      bool = true;  
    }
    else {
      bool = false;
      return bool;
    } 
  }
  arr = bool;
  return arr;
}

mutation(["voodoo", "no"]);

