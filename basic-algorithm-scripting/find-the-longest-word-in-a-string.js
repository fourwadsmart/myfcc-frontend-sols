/** ====================================
        Very simple but it works 
    ==================================== **/


function findLongestWord(str) {
  str = str.split(" ");
  
  var lword = str[0];
  for(i = 1; i < str.length; i++) {
	if (str[i].length > lword.length) {
      lword = str[i];
    }
  }
  return lword.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");