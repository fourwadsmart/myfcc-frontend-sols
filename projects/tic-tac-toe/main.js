
const main = document.querySelector("#main"),
      game_board = document.querySelector("#game-box"),
      instruc = document.querySelector("#instruc");

let box_index = [0, 1, 2, 3, 4, 5, 6, 7, 8], // original board with indexes
    
    // the players
    your_player,
    mini_max;

// Players: html fragment for player selection
function htmlFragPlayers() {
  const fragment = document
  .createRange()
  .createContextualFragment(`
    <p id="instruc">Play against Max<br>pick your player</p>
    <div class="players">X</div>
    <div class="players">O</div>
`);
  return fragment;
}

// append fragment to div with id=game-box
game_board.appendChild(htmlFragPlayers());

// Boxes: html fragment of the grids
function htmlFragBoxes() {
  const fragment = document
  .createRange()
  .createContextualFragment(`
    <div class="box row-1 one">
      <span>&nbsp;</span>
    </div>
    <div class="box row-1 two">
      <span>&nbsp;</span>
    </div>
    <div class="box row-1 three">
      <span>&nbsp;</span>
    </div>

    <div class="box row-2 four">
      <span>&nbsp;</span>
    </div>
    <div class="box row-2 five">
      <span>&nbsp;</span>
    </div>
    <div class="box row-2 six">
      <span>&nbsp;</span>
    </div>

    <div class="box row-3 seven">
      <span>&nbsp;</span>
    </div>
    <div class="box row-3 eight">
      <span>&nbsp;</span>
    </div>
    <div class="box row-3 nine">
      <span>&nbsp;</span>
    </div>
`);
  return fragment;
}

// select your player
function select() {
  const players = document.querySelectorAll(".players");
  
  for(i = 0; i < players.length; i++) {
    players[i].addEventListener("click", function() {
      your_player = this.innerHTML;
      your_player == "O" ? mini_max = "X": mini_max = "O";
      game_board.innerHTML = "";
      // append box fragment to div id=game-box
      game_board.appendChild(htmlFragBoxes());
      play(); // it's play time
    });
  }
} select();

// play function calls the findBestMove function which calls minimax function to compute best move
function play() {
  const box = document.querySelectorAll(".box");
  
  for(i = 0; i < box.length; i++) {
    // holding i temporarily
    let temp = i;
    
    // listening to some human click
    box[i].addEventListener("click", function() {
      if(this.textContent != your_player && this.textContent != mini_max) {
        this.textContent = your_player;
        
        box_index[temp] = this.textContent;
        let bestMove = new findBestMove(box_index);
        
        // if bestMove index is found it means there some empty box in the board
        if (bestMove.index > -1){
          box[bestMove.index].innerHTML = mini_max;
          //console.log(box_index);
          //console.log(bestMove.index);
        }
        
        // return score for terminal state
        if(evaluate(box_index, mini_max)) {
          setTimeout(function(){
            alert("YOU LOSE!");
          }, 500);
          
          restart();
        }
        else if(evaluate(box_index, your_player)) {
          setTimeout(function(){
            alert("YOU WIN!");
          }, 500);
          
          restart();
        }
        else if(emptySpot(box_index).length === 0) {
          setTimeout(function(){
            alert("TIE!");
          }, 500);
          
          restart();
        }
      }
    });
  }
}

// restart the game 
function restart() {
  setTimeout(function() {
    game_board.innerHTML = "";
    game_board.appendChild(htmlFragBoxes());
    box_index = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    play();
  }, 1500);
}

// return an array of empty boxes
function emptySpot(board) {
  return board.filter(st => st != "O" && st != "X");
}

// evaluate if winning combinations exist
function evaluate(board, player) {
   if (
     (board[0] == player && board[1] == player && board[2] == player) ||
     (board[3] == player && board[4] == player && board[5] == player) ||
     (board[6] == player && board[7] == player && board[8] == player) ||
     (board[0] == player && board[3] == player && board[6] == player) ||
     (board[1] == player && board[4] == player && board[7] == player) ||
     (board[2] == player && board[5] == player && board[8] == player) ||
     (board[0] == player && board[4] == player && board[8] == player) ||
     (board[2] == player && board[4] == player && board[6] == player)
     ) 
   {
     
     if(player == mini_max) {
       return 10;
     }
     else 
       if(player == your_player) { 
         return -10;
       }
     return 0;
   }
}

// minimax algorithm: compute best move for findBestMove function
function minimax(board, depth, mm) {
    let avail = emptySpot(board);
    // evaluate score on board
    let score = evaluate(board, mm);
    // check and return a value for terminal states such as win, lose, and tie
    if(score == 10 || score == -10) {
      return score;
    }
    // else if(score == -10) { return score;}
    else if(avail.length === 0) {
      return 0;
    }
  
    if(mm == mini_max) {
      let bestScore = -1000;
      for(let i = 0; i < avail.length; i++) {
        let index = board[avail[i]];
        // make move
        board[avail[i]] = mini_max;
        // call minimax recursively and choose the maximum value
        bestScore = Math.max(bestScore, minimax(board, depth++, your_player));
        // undo the move
        board[avail[i]] = avail[i];
        // moves.push({index:index, score: bestScore});
      }
      return bestScore;
    }
    else if(mm == your_player) {
      let bestScore = 1000;
      for(let i = 0; i < avail.length; i++) {
        let index = board[avail[i]];
        // make move
        board[avail[i]] = your_player;
        // call minimax recursively and choose the minimum value
        bestScore = Math.min(bestScore, minimax(board, depth++, mini_max));
        // undo the move
        board[avail[i]] = avail[i];

      }
      return bestScore;
    }

}

// finding the best possible move and return it
function findBestMove(board) {
  let bestVal = -1000;
  let bestMove = -10;
  
  for(let i = 0; i < board.length; i++) {
    // Check if cell is empty
    if(board[i] !== "X" && board[i] !== "O") {
      let index = board[i];
      // make the move
      board[i] = mini_max;
      // compute the evaluation for this function
      let moveVal = minimax(board, 0, your_player);
      // undo the move
      board[i] = index;
      // If the value of the current move is bigger than best value, then update best value
      if(moveVal > bestVal) {
        bestMove = i;
        bestVal = moveVal;
        console.log(moveVal);
      }
      
    }
  }
  board[bestMove] = mini_max;
  this.move = board[bestMove];
  this.index = bestMove;
  // console.log(bestMove.index);
}
