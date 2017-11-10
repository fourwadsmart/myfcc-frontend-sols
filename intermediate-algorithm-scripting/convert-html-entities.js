/** ========================================
            - OLD SOLUTION -
     Sorted Union : Old way of solving this
    ======================================== **/


function convertHTML(str) {
  // &colon;&rpar;
  var enti = ["&", "<", ">", '"', "'"];
  var htmlenti = ["&amp;", "&lt;", "&gt;", "&quot;", "&apos;"];
  
  for(let i=0; i<enti.length; i++) {
    let reg = new RegExp(enti[i], "gi"); // 
    str = str.replace(reg, htmlenti[i]);
  }
  
  return str;
}

convertHTML("Hamburgers < Pizza < Tacos");

