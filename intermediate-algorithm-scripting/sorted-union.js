/** ========================================
            - OLD SOLUTION -
     Sorted Union : Old way of solving this
    ======================================== **/

function uniteUnique(arr) {
  // two nested for loops
  for(let i=0; i<arguments.length; i++) { // loops through array of args
    for(let j=0; j<arguments[i].length; j++) { // loops through elements in array of args
      if(arr.indexOf(arguments[i][j]) == -1) { // 
        arr.push(arguments[i][j]);
      }
    }
  }
  return arr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);


// NEW SOLUTION WITH FILTER ~ 2020

function uniteUnique(...arr) {
  let args = [];
  for(let i = 0; i < arguments.length; i++) {
    args = args.concat(arr[i]); // create single array
  }
  // filter: remove duplicate
  return args.filter((a, e) => args.indexOf(a) === e);
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

