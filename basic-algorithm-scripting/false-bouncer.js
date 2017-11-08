/** ====================================
            - OLD SOLUTION -
      Falsy Boucer: remove falsy values
    ==================================== **/

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  // var fal = [false, null, 0, "", undefined, NaN];
  return arr = arr.filter(Boolean);
  
}

bouncer([7, "ate", "", false, 9]);

