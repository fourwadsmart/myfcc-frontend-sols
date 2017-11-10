/** ================================================================
                            - OLD SOLUTION -
                            ________________
                            
    PROBLEM:
     Flatten a nested array. You must account for varying levels 
     of nesting.
    ================================================================ **/


function steamrollArray(arr) {
  // I'm a steamroller, baby
  var arr1 = [];
  // I  dived four level deep into the loop - not the best code. To repetitive!
  // first loop
  for(i=0; i<arr.length; i++) {
    if(Array.isArray(arr[i])) {
      // second loop
      for(j=0; j<arr[i].length; j++) {
        if(Array.isArray(arr[i][j])){
          //third loop
          for(x=0; x<arr[i][j].length; x++){
            if(Array.isArray(arr[i][j][x])) {
              //fourth loop
              for(y=0; y<arr[i][j][x].length; y++){
                arr1.push(arr[i][j][x][y]);
              }
            }
            else {arr1.push(arr[i][j][x]);}
          }
        }
        
        else { arr1.push(arr[i][j]);}
      }
    }
    else{arr1.push(arr[i]);}
  }
  arr = arr1;
  return arr;
}

steamrollArray([1, [2], [3, [[4]]]]);
