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
    return strArr.join("") +"ay";
  }
  else {
    let num = 0;
    while(!vowels.includes(strArr[0]) && num < str.length) {
      num += 1;
      strArr.push(strArr.shift());
    }
  }
  return strArr.join("") +"ay";
}
translatePigLatin("rhythm");


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


// A SOLUTION ON FREECODECAMP FORUM WITH REGULAR EXPRESSIONS
function translatePigLatin(str) {
  return str
    .replace(/^[aeiou]\w*/, "$&way")
    .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
}

// test here
translatePigLatin("consonant");

