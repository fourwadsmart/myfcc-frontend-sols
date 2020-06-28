/** ========================================
               - OLD SOLUTION -
          Sum of fibonacci numbers
    ======================================== **/


function sumFibs(num) 
{
  // store the two last value and the sum
  var bLast = 1, last = 1, sum = 1;
  while(last <= num)
  {
    if (last % 2 == 1) // check for odd values
    {
      sum += last;
    }
    last += bLast; // last become last + before-last
    bLast = last - bLast; // before-last becomes what was once last
  }
  num = sum;
  return num;
}

sumFibs(4);



// CODE REFACTORED ~ 2020

function sumFibs(num) {
  // store the two last value and the sum
  let bLast = 1, last = 1, sum = 1;
  while(last <= num) {
    if (last % 2 == 1) {
      sum += last;
    }
    last += bLast; // last become last + before-last
    bLast = last - bLast; // before-last becomes what was once last
  }
  return sum;
}
sumFibs(4);


