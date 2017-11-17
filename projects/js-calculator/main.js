// Math library: http://mathjs.org/docs/reference/functions/eval.html
let result = document.getElementById("result"), // for showing result and current digit
    accumulator = document.getElementById("accumulator"), // for chaining operations
    numbers = document.getElementsByClassName("number"),
    operators = document.querySelectorAll(".operator, .percent"),
    clear = document.getElementsByClassName("other"),
    equal = document.getElementsByClassName("equal")[0],
    modulator = document.getElementsByClassName("percent"), // let's do something with it later
    justCalc = false; // track when calculation was just made. to avoid numbers to be logged to accumulator

// some constant
const oplist = "-+*/%",
numblist = "0123456789";

/* Keep in mind: numbers add operators operators add numbers to the accumulator through their functions */

// calculate the final result
function calc(eq) { // make operations on chain in accumulator when equal key is pressed
  eq.addEventListener("click", function() {
    // if result has more than zero char
    if (result.innerHTML.length > 0) {
      // if single char and is not in oplist (operators and numbers will never be mixed)
      if(oplist.indexOf(result.innerHTML) == -1 && justCalc == false) {
        let acc = accumulator.innerHTML += result.innerHTML;
        let total = eval(acc);
        result.innerHTML = total;
        accumulator.innerHTML = total;
        justCalc = true;
      }
    }

  });
} calc(equal);


// what to do when numbers are clicked
function add(numbs) { // add a number or a dot to the result
  for(i=0; i<numbs.length; i++) {
    numbs[i].addEventListener("click", function() {
      let target = this.textContent;
      // if result has no numbers don't let zeros first
      if(target == 0 && result.innerHTML == "") {
        // do nothing
      }
      else {
        // if justCalc is true wipe all data on screen
        if(justCalc) {
          accumulator.innerHTML = "";
          result.innerHTML = "";
          justCalc = false;
        }

        // No more that 8 numbers in the result field
        if(result.innerHTML.length < 8) {
          // if result has a sign operator and result is not empty 
          // had to check for empty otherwise empty would be found at index 0
          if(oplist.indexOf(result.innerHTML) > -1 && result.innerHTML !== "") {
            //console.log(oplist.indexOf(result.innerHTML));
            accumulator.innerHTML += oplist[oplist.indexOf(result.innerHTML)];
            result.innerHTML = "";
          }
          // if key pressed is a dot and result does not have a decimal point yet
          if(target == "." && result.innerHTML.indexOf(".") == -1) {
            // if result is empty add a zero before the decimal point
            if(result.innerHTML == ""){
              result.innerHTML += "0" + target;
            }
            else {
              result.innerHTML += target;
            }
            //accumulator.innerHTML += target;
          }
          // capture only numbers event
          if(target !== ".") {
            result.innerHTML += target;
            //accumulator.innerHTML += target;
          }
        }       
      }
 
    });
  }
} add(numbers);


// operators
function operate(op) { // operation to perform: % / * + -
  for(i=0; i<op.length; i++) {
    op[i].addEventListener("click", function() {
      let target = this.textContent;
      
      // if the key operator pressed is not the equal sign
      if(target !== "=") {
        // if the result field is not empty
        if(result.innerHTML !== ""){
          // next if statement was a tricky one but i nailed it
          // if the key pressed is in oplist and result does not have any oplist operator signs
          if(oplist.indexOf(target) > -1 && oplist.indexOf(result.innerHTML) == -1) {
            // calculation (equal sign operator) was just used
            if(justCalc == true){
              accumulator.innerHTML = "";
              accumulator.innerHTML += result.innerHTML;
              result.innerHTML = "";
              justCalc = false; // enable the calc function
            }
            else {
              accumulator.innerHTML += result.innerHTML;
            }
          }
          result.innerHTML = target;
        }
      }
    });
  }
} operate(operators);


// clear all results
function clearAll(ca) {
  for(i=0; i<ca.length; i++) {
    ca[i].addEventListener("click", function() {
      let target = this.textContent;
      // clear result
      if(target == "CE") {
        result.innerHTML = "";
        accumulator.innerHTML = "";
      }
      // clear all
      else if(target == "AC"){
        result.innerHTML = "";
        accumulator.innerHTML = "";
      }
    });
  }
} clearAll(clear); // clear all results