/** ====================================
            - OLD SOLUTION -
         DNA PAIRING - OLD SOLUTION
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


// NEW SOLUTION WITH ONE FOR LOOP ~ 2020

function pairElement(str) {
  let missPair = {"A": ["A", "T"], "C": ["C", "G"], "G": ["G", "C"], "T": ["T", "A"]};
  let arr = [];
  for(let i = 0; i < str.length; i++) {
    arr.push(missPair[str[i]]);
  }
  return arr;
}

pairElement("ATCGA");


// NEW SOLUTION WITH MAP FUNCTION ~ 2020

function pairElement(str) {
  let missPair = {"A": ["A", "T"], "C": ["C", "G"], "G": ["G", "C"], "T": ["T", "A"]};
  let arr = [...str];
  return arr.map((strand) => missPair[strand] );
}
pairElement("ATCGA");

