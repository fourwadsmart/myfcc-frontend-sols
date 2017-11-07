/** ====================================
    My first solution to this problem 
    ==================================== **/


function titleCase(str) {
  str = str.toLowerCase().split(" "); // Convert string to lowercase then split into array
  
  for(let i = 0; i < str.length; i++) {
    
    str[i] = str[i].split(""); // convert array elements into array themselves
    str[i][0] = str[i][0].toUpperCase(); // uppercase first elements in sub array
    str[i] = str[i].join(""); // join sub arrays into one word-strings
  }
  
  str = str.join(" "); // join everything back into one string
  
  return str;
}

titleCase("I'm a little tea pot");


/** ====================================
                My new solution
    ==================================== **/


function titleCase(str) {
  str = str.toLowerCase();
  return str = str.replace(/\b\w/g, (letter) => {
    return letter.toUpperCase();
  });
}

titleCase("I'm a little tea pot");

// this solution would work most of the time but it has some flaws. Especially with apostrophe