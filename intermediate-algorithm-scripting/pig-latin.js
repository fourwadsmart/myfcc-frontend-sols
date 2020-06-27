/** ====================================
            - OLD SOLUTION -
         Pig Latin - old solution
    ==================================== **/


function translatePigLatin(str) {
  var vowels = ["a", "e", "i", "o", "u"];
  str = str.split("");
  if (vowels.includes(str[0])) {
    str.push("w");
  }
  else {
    var num = 0;
    while(vowels.includes(str[num]) === false) {
      str.push(str[num]);
      str.shift();
    }
  }
  
  str = str.join("") +"ay";
  return str;
}

translatePigLatin("paragraphs");



// New solution with for loop



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

