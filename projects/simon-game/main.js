
/*********************************************************
 *********************** SIMON GAME **********************
 *********************************************************/

/** all important variables in one object literal **/

const va = {
  
  /* States and Counters */
  state: "off",
  strict: false,
  random_seq: [], // array for random sequence
  delay: 1000,
  timer: 0, // initializing the timer
  count: {level: 0, term: 0}, // counter for level and for current term in random sequence
  
  /* DOM Elements */
  on_off: document.getElementById('off-on'),
  btn: document.getElementById('switch-btn'),
  cnt: document.getElementById('count'),
  stri: document.getElementById('strict'),
  light: document.getElementById('light'),
  start: document.getElementById('start'),
  side_btn: document.querySelectorAll('.side-btn'),
  
  /* Audio Files */
  audio: [
    { green: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3') },
    { red: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3') },
    { yellow: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3') },
    { blue: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3') }
  ]
}


// game switch: on or off
function switchFn() {
  va.on_off.addEventListener('click', function() {
    
    if(va.btn.classList.contains('on')) {
      
      va.btn.classList.remove('on'); 
      va.btn.classList.add('off');
      
      // toggle count color
      va.cnt.classList.remove('red');
      va.cnt.classList.add('gray');
      stateToggle(true); // toggle state. Simon is off
      va.cnt.innerHTML = '--';
      
      // turn strict mode off
      va.light.classList.remove('bg-red');
      va.light.classList.add('bg-gray');
      va.strict = false;
      
      // remove sequenceMatch event handler
      document.getElementById('simon').removeEventListener('click', sequenceMatch);
      
    }
    
    else {
      va.btn.classList.remove('off'); 
      va.btn.classList.add('on');
      // toggle count color
      va.cnt.classList.remove('gray');
      va.cnt.classList.add('red');
      stateToggle(true); // toggle state. Simon is on
    }
    
  });
} switchFn();


// return or toggle the state switch: on or off
function stateToggle(toggle = false) {
  
  // return state if toggle is not true
  if(toggle == false || toggle == undefined) {
    // is Simon on or off?
    return va.state;
  }
  else if (toggle == true){
    // toggle state if toggle param == true
    va.state == 'on' ? va.state = 'off' : va.state = 'on';
    // clear timer
    clearTimeout(va.timer);
  }
}


// toggle strick mode: true or false

function strict() {

  va.stri.addEventListener('click', function(e) {
    
    if(stateToggle() == 'on') {

      if(va.light.classList.contains('bg-gray')) {

        va.light.classList.remove('bg-gray');
        va.light.classList.add('bg-red');

        // strict equal true
        va.strict = true;
      }
      else {

        va.light.classList.remove('bg-red');
        va.light.classList.add('bg-gray');

        // strict equal false
        va.strict = false;

      }
    }
  });
  
} strict();


// start game. Only if swicth is on
function start() {
  va.start.addEventListener('click', function() {
    if(stateToggle() == 'on') {
      
      // clear timer before starting
      clearTimeout(va.timer);
      
      // reset counter before starting
      va.count.level = 1;
      
      // empty random array
      va.random_seq = [];
      randomTermFn();
      // wait a second!
      setTimeout(function() {
        // start playing
        play();
      }, 500);

    }
    else {
      clearTimeout(va.timer);
    }
  });
} start();


// let's play the game
function play() {
  // change button play delay
  switch (va.count.level) {
    case 1 || 2 || 3 || 4 || 5:
      va.delay = 1000;
      break;
    case 6 || 7 || 8 || 9 || 10:
      va.delay = 750;
      break;
    case 11 || 12 || 13 || 14 || 15:
      va.delay = 500;
      break;
    case 16 || 17 || 18 || 19 || 20:
      va.delay = 250;
      break;
    default:
      /* Nothing */
  }
  
  // is simon on!
  if(stateToggle() == 'on') {
    document.getElementById('simon').removeEventListener('click', sequenceMatch);
    
    if(va.count.level < 20) {
      
      // adding zero before single digit numbers
      va.count.level < 10 ? va.cnt.innerHTML = "0" + va.count.level : va.cnt.innerHTML = va.count.level;
      
      // random sequence
      va.timer = setTimeout(function() {
        randBtnPlay(va.random_seq, va.delay);
      }, 500);
      
      // execute 2 seconds later after code above
      va.timer = setTimeout(function() {
        document.getElementById('simon').addEventListener('click', sequenceMatch);
      }, va.delay * va.random_seq.length + 500);
      
    }
  }
  // clear timer when simon is off
  else {
    clearTimeout(va.timer);
  }
}


// generate a random number between 0 and 3
// and push it to the va.random_seq array
function randomTermFn() {
  let rand = Math.floor((Math.random() * 4));
  va.random_seq.push(rand);
}


// randBtnPlay: Random button play
// rand: array of random values
// c: a counter starting at 0
function randBtnPlay(rand, delay, c = 0) {
  
  // is switch on!
  if(stateToggle() == 'on') {
    
    // match button with correct bright background color
    let bgcolor = ['bg-green', 'bg-red', 'bg-yellow', 'bg-blue'];
    // match button color with sound
    let color = ['green', 'red', 'yellow', 'blue'];
    
    va.timer = setTimeout(function() {
      if(c < rand.length) {
        
        // add the corresponding audio
        va.audio[rand[c]][color[rand[c]]].play();
        // make button flash
        va.side_btn[rand[c]].classList.add(bgcolor[rand[c]]);

        // remove flash
        (function(r) {
          setTimeout(function() {
            va.side_btn[r].classList.remove(bgcolor[r]);
          }, va.delay - 150);
        })(rand[c]);

        c++;
        // recursive call until last element is reached
        randBtnPlay(rand, delay, c);
        
      }
      
    }, delay);
    
  }
}


// event handler: match button clicks 
// with random sequence terms
function sequenceMatch(e) {
  
  if(stateToggle() == 'on') {

    // a reference to the original random sequence
    let rand = va.random_seq;
    // match background flash color and color id for audio
    let bgcolor = ['bg-green', 'bg-red', 'bg-yellow', 'bg-blue'];
    // color id to match correct button in the sequence term
    let colorid = ['green', 'red', 'yellow', 'blue'];

    va.audio[colorid.indexOf(e.target.id)][e.target.id].play();
    va.side_btn[colorid.indexOf(e.target.id)].classList.add(bgcolor[colorid.indexOf(e.target.id)]);


    // remove flash
    (function(r) {
      setTimeout(function() {
        va.side_btn[r].classList.remove(bgcolor[r]);
      }, 500);
    })(colorid.indexOf(e.target.id));


    // the real deal 
    if(colorid.indexOf(e.target.id) > -1) {
      if(e.target.id == colorid[rand[va.count.term]]) {
        // next
        va.count.term++;

        // is that the end!
        if(va.count.term == rand.length) {
          // reset term counter
          va.count.term = 0;

          // were we playing level 20? Restart the game
          if(va.count.level == 20) {
            va.count.level = 0;
            va.random_seq = [];

            // I will change this later 
            setTimeout(function() {alert('YOU ROCK. YOU MUST BE A MEMORY PLAYER!!')}, 500);

          }
          else {
            va.count.level++;
          }

          // add a random term to the sequence
          randomTermFn();
          // play next level
          play();

        }
      }


      // what if pressed key does not match current term in the sequence
      else
        if(e.target.id != colorid[rand[va.count.term]]) {      
          va.count.term = 0;

          // is game strict!
          if(va.strict == true) {
            // restart the game all over again
            va.random_seq = [];
            va.count.level = 1;
            randomTermFn();

            // I will change this later
            setTimeout(function() {alert('YOU LOST ON STRICT MODE!!')}, 500);

          }
          // I will change this later
          if(va.strict != true) {setTimeout(function() {alert('THAT WAS INCORRECT!!')}, 500);}

          // repeat level or start all over
          play();
        }
    }
    
  }

  
}

