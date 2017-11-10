/** ========================================
            - OLD SOLUTION -
            spinal tap case
    ======================================== **/


function spinalCase(str) {
  
  let spl = new RegExp("[^a-z]", "gi");
    
  str = str.replace(spl, "-");
  
  return str = str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(); 

}

spinalCase("AllThe-small Things");
