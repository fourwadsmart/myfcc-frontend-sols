/* simple method to reverse a string */

function reverseString(str) {
  str = str.split("");
  str = str.reverse();
  str = str.join("");
  return str;
}

reverseString("hello");