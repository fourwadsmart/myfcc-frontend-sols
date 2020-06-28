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


// NEW SOLUTION WITH MAP ~ 2020

function convertHTML(str) {
  // &colon;&rpar;
  let htmlenti = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;"};
  let strArr = str.split('');

  return strArr.map((a) => {
    return htmlenti[a] == undefined ? a : htmlenti[a];
  }).join("");
}

convertHTML("Hamburgers < Pizza < Tacos");  
