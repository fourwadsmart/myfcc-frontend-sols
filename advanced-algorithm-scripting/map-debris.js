/** ====================================================================
                            - OLD SOLUTION -
                            ________________
                            
    PROBLEM:
     Return a new array that transforms the element's average altitude 
     into their orbital periods.

     The array will contain objects in the format 
     {name: 'name', avgAlt: avgAlt}.

     You can read about orbital periods on wikipedia.

     The values should be rounded to the nearest whole number. 
     The body being orbited is Earth.

     The radius of the earth is 6367.4447 kilometers, and the GM value 
     of earth is 398600.4418 km3s-2.
    ==================================================================== **/



function orbitalPeriod(arr) {
  let GM = 398600.4418;
  let earthRadius = 6367.4447;
  let pi = 2 * Math.PI;
  
  for(let i = 0; i < arr.length; i++) {
    arr[i].avgAlt = Math.round(pi * Math.sqrt(Math.pow(earthRadius + arr[i].avgAlt, 3) / GM));
    
    arr[i].orbitalPeriod = arr[i].avgAlt;
    delete arr[i].avgAlt;
  }
  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
