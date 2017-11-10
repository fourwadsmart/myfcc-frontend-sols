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

