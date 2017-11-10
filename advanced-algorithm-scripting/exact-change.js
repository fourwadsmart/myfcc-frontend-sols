/** ====================================================================
                            - OLD SOLUTION -
                            ________________
                            
    PROBLEM:
     Design a cash register drawer function checkCashRegister() 
     that accepts purchase price as the first argument (price), 
     payment as the second argument (cash), and cash-in-drawer 
     (cid) as the third argument.

     cid is a 2D array listing available currency.

     Return the string "Insufficient Funds" if cash-in-drawer 
     is less than the change due. Return the string "Closed" if 
     cash-in-drawer is equal to the change due.

     Otherwise, return change in coin and bills, sorted in highest 
     to lowest order.
    ==================================================================== **/


function checkCashRegister(price, cash, cid) {
  var change, 
      changeTotal = cash - price, 
      cidTotal = 0,
      cashValue = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
  
  // let's see how much we have in cid
  for(i = 0; i < cid.length; i++) {
    cidTotal += cid[i][1] * 100; // mult by 100 to avoid tiny errors
  }
  cidTotal /= 100; // getting the right value
  
  if(cidTotal < changeTotal) { return "Insufficient Funds";}
  if(cidTotal == changeTotal) { return "Closed";}
  
  // let's see how many coins and bills I should give
  change = [];
  for(h = cid.length -1; h >= 0; h--){
    if(changeTotal >= cid[h][1]) {
      change.push(cid[h]);
      changeTotal = (changeTotal*100) - (cid[h][1]*100);//mult by 100
      changeTotal /= 100; // get original value with decimals
    }
    else
      if(cid[h][1] > changeTotal) {
        cid[h][1] = Math.floor(changeTotal / cashValue[h]) * cashValue[h];
        if(cid[h][1] > 0) change.push(cid[h]); // making sure that the number is greater than 0
        
        changeTotal = (changeTotal*1000) % (cashValue[h]*1000);
        changeTotal /= 1000;
        //if(h == 5){return changeTotal;} // this is for debugging
      }
  }
  
  // if changeTotal still have left over then Insufficient Funds
  if(changeTotal > 0){ return "Insufficient Funds"; }
  
  // Here is your change, ma'am.
  return change;
}


checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
