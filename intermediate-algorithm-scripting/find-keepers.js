/** ================================================================
                            - OLD SOLUTION -
                            ________________
                            
    PROBLEM:
     Create a function that looks through an array (first argument) 
     and returns the first element in the array that passes a truth 
     test (second argument).
    ================================================================ **/



function findElement(arr, func) {
  var num = 0;
  num = arr.filter(func); // return all element in array that passes the func rule
  num = num[0]; // take only the first element
  return num;
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
