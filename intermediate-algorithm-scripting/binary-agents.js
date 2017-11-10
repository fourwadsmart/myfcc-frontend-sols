/** ====================================================================
                            - OLD SOLUTION -
                            ________________
                            
    PROBLEM:
     Return an English translated sentence of the passed binary string.
     The binary string will be space separated.
    ==================================================================== **/


function binaryAgent(str) {
  str = str.split(" ");
  for(let i=0; i<str.length; i++){
    str[i] = parseInt(str[i], 2); // from binary to decimal
    str[i] = String.fromCharCode(str[i]); // from unicode to letters
  }
  // get everything back together!
  return str.join("");
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
