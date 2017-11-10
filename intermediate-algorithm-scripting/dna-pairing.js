/** ====================================
            - OLD SOLUTION -
         Pig Latin - old solution
    ==================================== **/


function pairElement(str) {
  var missPair = [["A", "T"], ["C", "G"], ["G", "C"], ["T", "A"]];
  var arr = [];
  for(let j = 0; j < str.length; j++) {
    for(let i = 0; i < missPair.length; i++) {
      if(str[j] == missPair[i][0]) {
        arr.push(missPair[i]);
      }
    }
  }
  return arr;
}

pairElement("ATCGA");
