/** ========================================
               - OLD SOLUTION -
    ======================================== **/


function sumPrimes(num) {
  let sum = 0, prime;

  for(let i=1; i<=num; i++) {
    prime = true; // let's just assume i is prime
    if(i == 1) {/**Do nothing**/}
    if(i == 2 || i == 3) { sum +=i;} // 2 and 3 are primes
    
    else
      if(i>3) { // checking primes after 3
        for(j=2; j<i; j++){
          if(i % j === 0) { prime = false; break;}
          else {prime = true;}
        }
        // if(prime==true) { sum+=i;}
      }
      if(prime===true) { sum+=i;} // prime is found so we add it to sum
    
  }
  
  // can't figure out why I have to deduct 6 from the sum. I discovered this by accident
  num = sum -6;
  return num;
}

sumPrimes(10);


// NEW SOLUTION THAT WORKS WITH NO EXTRA HACKS

function sumPrimes(num) {
  let sum = 0, prime;

  if (num >= 2) {
    for (let i = 2; i <= num; i++) {
      let prime = true, n = 2;
      while (n <= i) {
        if(i % n == 0 && n != i) {
          prime = false;
        }
        n += 1;
      }
      if(prime) {sum += i}
    }
  }
  return sum;
}

sumPrimes(5); 
