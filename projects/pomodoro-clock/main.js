/********************************************************************
    this is the head of my JS file. Coding starts here 
    practice with querySelector instead of getElementById or TagName
    The querySelector() and querySelectorAll() are far more versatile 
    than the getElementById() and getElementsByTagName() methods
    also benefit from some incredible lookup speed, as they take 
    advantage of the same engine the browser uses to identify 
    elements to style when parsing the CSS of a page.
*********************************************************************/

let pause = document.querySelector("#pause"), // start, pause, resume button
    reset = document.querySelector("#reset"),
    sign = document.querySelector(".sign"),
    decrease = document.querySelectorAll(".decrease"),
    increase = document.querySelectorAll(".increase"),
    numbers = document.querySelectorAll(".numbers"),
    minutes = document.querySelector("#minutes"),
    seconds = document.querySelector("#seconds"),
    progress_desc = document.querySelector("#taskbreak-progress"),
    progress_bar =  new ldBar(".ldBar"),
    timer, // making time global for use in the timeCountDown()
    alarm = new Audio("https://res.cloudinary.com/mydevassets/video/upload/v1506960382/Ticking_Clock-KevanGC_mmrrg6.wav"),
    audio_src = document.querySelector("audio"); 

// function time countdown
function timeCountDown() {
  progress_desc.innerHTML = "Task Time"; // break description
  let st = 0; // check state to toggle break & task time
  let m = Number(numbers[0].innerHTML) - 1;
  let s = 60; // seconds countdown starting point
  let percent = 0; // calculating percent
  let one_percent = ((m + 1) * 60) / 100; // 1 percent
  let p_counter = 1; // percent counter
  
  timer = setInterval(function() {
    // if  second equal to zero
    if(s == 0) {
      // if m is not yet equal to zero
      if(m > 0) {
        m--; // decrement m
        s = 59; // go back to 59 seconds
      }
      // else if m and s are equal to zero
      else if(m == 0 && s == 0) {
        if(st == 0) {
          progress_desc.innerHTML = "Break Time"; // break description
          m = Number(numbers[1].innerHTML);
          st = 1;
          percent = 0;
        }
        else {
          progress_desc.innerHTML = "Task Time"; // task description
          m = Number(numbers[0].innerHTML);
          st = 0;
          percent = 0;
        }
      }
    }
    // count down
    else {
      s--; // decrementing seconds
      
      // alarm goes off at 10 seconds
      if(m == 0 && s < 11) {
        alarm.play();
      }
      else {
        // alarm stops at the seconds have gone
        alarm.pause();
      }
    }
    // loading the progress bar
    if(p_counter == one_percent) {
      // loading percent
      percent++;
      progress_bar.set(percent);
      // get back to zero to load another percent
      p_counter = 0;
    }
    p_counter++;
    // adding an extra zero for numbers under 10
    m < 10 ? minutes.innerHTML = "0" + m : minutes.innerHTML = m;
    s < 10 ? seconds.innerHTML = "0" + s : seconds.innerHTML = s;
  }, 1000);
}

// function start, pause and resume time countdown
function startPauseResumer() {
  // events happening
  pause.addEventListener("click", function() {
    // let m_resume = minutes.innerHTML; // save the minutes
    // let s_resume = seconds.innerHTML; // save the seconds
    // toggle class with javascript
    if(pause.classList.contains("ion-play")){
      pause.classList.remove("ion-play");
      pause.classList.add("ion-pause");
      timeCountDown(); // either start, pause or resume
      // minutes.innerHTML = m_resume; // resume the minutes
      // seconds.innerHTML = s_resume; // resume the seconds
    }
    else {
      pause.classList.remove("ion-pause");
      pause.classList.add("ion-play");
      clearInterval(timer); // pause count down
    }
  });
} startPauseResumer();


// function reset time
function resetter() {
  reset.addEventListener("click", function() {
    minutes.innerHTML = numbers[0].innerHTML;
    seconds.innerHTML = "00";
    clearInterval(timer); // pause count down
    progress_bar.set(0);
    // turn ion-play icon
    if(pause.classList.contains("ion-pause")) {
      pause.classList.remove("ion-pause");
      pause.classList.add("ion-play");
    }
  });
} resetter();


// function decrease task or break time
function decrea() {
  for(i=0; i<decrease.length; i++) {
    let n = i; // saving i for later
    
    (function(param) { // IIFE
      // adding my event handler into a IIFE to capture
      // n value in my addEventListener() callback
      decrease[i].addEventListener("click", function(e) {
        let numb = numbers[param].innerHTML;
        // never below 1
        if(numb > 5) {
          numb = parseInt(numb) - 5;
          if(numb == 5) {
            // adding an extra zero to make look good
            numbers[param].innerHTML = "05";
          }
          else {
            numbers[param].innerHTML = numb;
          }
        }
      });
    })(n);
  }
  
} decrea();


// function increase task or break time
function increa() {
  for(i=0; i<increase.length; i++) {
    let n = i; // saving i for later
    
    (function(param) { // IIFE
      // adding my event handler into a IIFE to capture
      // n value in my addEventListener() callback
      increase[param].addEventListener("click", function(e) {
        let numb = numbers[param].innerHTML;
        numbers[param].innerHTML = Number(numb) + 5;
      });
    })(n);
  }
  
} increa();
