/** ====================================
            - OLD SOLUTION -
        Search and replace a value
    ==================================== **/

function myReplace(str, before, after) {
  str = str.split(" ");
  for (let i = 0; i < str.length; i++) {
    if(str[i] == before) {
      before = before.split("");
      if (before[0] == before[0].toUpperCase()) {
        after = after.split("");
        after[0] = after[0].toUpperCase();
        after = after.join("");
        str[i] = after;
        str = str.join(" ");
        
      }
      
      else {
        str[i] = after;
        str = str.join(" ");
      }
    }
  }
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
