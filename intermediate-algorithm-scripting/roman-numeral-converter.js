/** ====================================
            - OLD SOLUTION -
        Roman Numeral converter
    ==================================== **/


function convertToRoman(num) {
  var arabToRoman = "";
  var romanNum = ["MMM", "MM", "M", "CM", "DCCC", "DCC", "DC", "D", "CD", "CCC", "CC", "C", "XC", "LXXX", "LXX", "LX", "L", "XL", "XXX", "XX", "X", "IX", "VIII", "VII", "VI", "V", "IV", "III", "II", "I"];
  var arabNum = [3000, 2000, 1000, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  
  for(let i = 0; i < arabNum.length; i++) {
    if(num >= arabNum[i] && num !== 0) {
      arabToRoman += romanNum[i];
      num -= arabNum[i];
      
    }
    
  }
  
  return arabToRoman;
}

convertToRoman(92);
