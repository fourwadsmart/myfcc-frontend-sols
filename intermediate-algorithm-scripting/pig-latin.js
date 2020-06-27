/** ====================================
            - OLD SOLUTION -
         Pig Latin - old solution
    ==================================== **/


// CODE UPDATE

function translatePigLatin(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let strArr = str.split("");
  if (vowels.includes(strArr[0])) {
    strArr.push("w");
  }
  else {
    let num = 0;
    while(!vowels.includes(strArr[0]) && num < str.length) {
      strArr.push(strArr.shift());
    }
  }
  return strArr.join("") +"ay";
}

translatePigLatin("paragraphs");


// NEW SOLUTIONN WITH FOR LOOP

function translatePigLatin(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let strArr = str.split("");

  if (vowels.includes(strArr[0])) {
    return strArr.join("") + "way";

  }
  else {
    let newStrArr = [...strArr];
    let consonant = true;
    for(let i = 0; i < strArr.length; i++) {
      if (vowels.includes(strArr[i])) {consonant = false; }
      
      if (consonant) {
        let removedcons = newStrArr.shift();
        newStrArr.push(removedcons);
      }
    }
    strArr = [...newStrArr];
  }
  return strArr.join("") +"ay";
}

console.log(translatePigLatin("california"));

