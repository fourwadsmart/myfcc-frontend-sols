/** ====================================================================
                            - OLD SOLUTION -
                            ________________
                            
    PROBLEM:
     Fill in the object constructor with the following methods below:
     
        getFirstName()
        getLastName()
        getFullName()
        setFirstName(first)
        setLastName(last)
        setFullName(firstAndLast)
        
     Run the tests to see the expected output for each method.
     The methods that take an argument must accept only one argument 
     and it has to be a string.
     These methods must be the only available means of interacting 
     with the object.
    ==================================================================== **/



var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
    
    this.getFirstName = function() {
      var fname = firstAndLast.split(" ");
      fname = fname[0];
      return fname;
    };
    
    this.getLastName = function() {
      var lname = firstAndLast.split(" ");
      lname = lname[1];
      return lname;
    };
  
    this.getFullName = function() {
      return firstAndLast;
    };
  
    this.setFirstName = function(fn) {
      firstAndLast = firstAndLast.split(" ");
      firstAndLast[0] = fn;
      return firstAndLast = firstAndLast.join(" ");
    };
    
    this.setLastName = function(ln) {
      firstAndLast = firstAndLast.split(" ");
      firstAndLast[1] = ln;
      return firstAndLast = firstAndLast.join(" ");;
    };
  
    this.setFullName = function(fln) {
      return firstAndLast = fln;
    };
  
    return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFirstName();
