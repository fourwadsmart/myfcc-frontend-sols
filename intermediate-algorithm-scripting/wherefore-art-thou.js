/** ====================================
            - OLD SOLUTION -
      a function that looks through an 
      array of objects (first argument) 
      and returns an array of all objects 
      that have matching property and 
      value pairs (second argument).
      Solutions UPDATED
    ==================================== **/

function whatIsInAName(collection, source) {
  // What's in a name?
  let src = Object.keys(source);
  let arr = [];

  for(let i = 0; i < collection.length; i++) {
    let found = true;
    for(let j = 0; j < src.length; j++) {
      if(source[src[j]] != collection[i][src[j]]) {
        found = false;
        break;
      }
    }
    if(found === true) {
      arr.push(collection[i]);
    } 
  }
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });



// new solution implemented

function whatIsInAName(collection, source) {
  let src_k = Object.keys(source);
  let arr = collection.filter((obj) => {
    let found = true;
    src_k.forEach((n) => {
      if(source[n] != obj[n]) {
        found = false
      }
    });
    return found;
  });
  
  console.log(arr);
  return arr; 
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });




