/** ====================================================================
                            - OLD SOLUTION -
                            ________________
                            
    PROBLEM:
     Return the number of total permutations of the provided string 
     that don't have repeated consecutive letters. Assume that all 
     characters in the provided string are each unique.

    For example, aab should return 2 because it has 6 total permutations 
    (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) 
    don't have the same letter (in this case a) repeating.
    ==================================================================== **/



function permAlone(str) {
  var pat = /([a-z])\1/; // repeated character pattern
  var count = 0; // count the number of perm without repeated letters
  var aTmp;
  var val;
  
  str = str.split("");
  
  // swap mechanism for permution algorithm
  function swap(arr, pos1, pos2) {
      var temp = arr[pos1];
      arr[pos1] = arr[pos2];
      arr[pos2] = temp;
  }
  
  // permutation algorithm function
  function perm(arr, n) {
      n = n || arr.length; 
      if (n === 1) {
          aTmp = arr.slice().join("");
          if(!pat.test(aTmp)){
            count++; // counting here
          }
          
      }
      else {
          for(var i = 1; i <= n; i += 1) {
              perm(arr, n - 1);
              if (n % 2) {
                  val = 1;
              }
              else {
                  val = i;
              }
              swap(arr, val - 1, n - 1);
          }
      }
  }
  perm(str);
  
  return count;
}

permAlone("aab");