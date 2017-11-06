/* Factorialize a number with JS */

function factorialize(num) {
  let fac = 1;
  for (let i = 1; i <= num; i++) {
    fac *= i;
    
  }
  num = fac;
  return num;
}

factorialize(5);