/** ====================================
            - OLD SOLUTION -
      a function that looks through an 
      array of objects (first argument) 
      and returns an array of all objects 
      that have matching property and 
      value pairs (second argument).
    ==================================== **/

function whatIsInAName(collection, source) {
  // What's in a name?
  let arr = [];
  let src = Object.keys(source);
  for(let i = 0; i < collection.length; i++) {
    let found = false; // checker to see if every source is in collection
    for(j = 0; j < src.length; j++) {
      if(collection[i].hasOwnProperty(src[j]) && collection[i][src[j]] == source[src[j]])       { found = true; } // return true if source key:values are equal
      else { found = false;} // return false if source key:values are not equal
    }
    if(found === true) { arr.push(collection[i]);} // push the object to array if true
  }
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });



// new solution implemented

function whatIsInAName(collection, source) {
  let arr = [];
  // Only change code below this line
  let src_k = Object.keys(source);

  arr = collection.filter((obj) => {
    let found = true;
    src_k.forEach((n) => {
      if(source[n] != obj[n]) {
        found = false
      }
    });
    return found;
  });
  // Only change code above this line
  console.log(arr);
  return arr; 
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });




