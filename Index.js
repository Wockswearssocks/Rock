let rock ="rock";
let paper = "paper";
let scissors = "scissors";
let lose = "You lose!";
let draw = "Draw";
let win = "You win!"
function computerPlay() {
   
   let number = Math.floor(Math.random() * 3 );

   if (number == 0) {
       return paper;
   } else if (number == 1) {
       return rock;
   } else if (number == 2) { 
       return scissors;
   }   
}

function playRound(playerSelection, computerSelection) {

    
    if (playerSelection == computerSelection) {
        return draw;
    } else if (playerSelection == rock && computerSelection == paper) {
        return lose;
        console.log("Paper beats Rock");
    } else if ( playerSelection == scissors && computerSelection == paper) {
        return win;
        console.log("Scissors beat paper");
    } else if (playerSelection == rock && computerSelection == scissors) {
        return win;
        console.log("Rock beats Scissors");
    } else if (playerSelection == paper && computerSelection == scissors) {
        return lose;
        console.log("Scissors beat paper");
    } else if (playerSelection == paper && computerSelection == rock) {
        return win;
        console.log("Paper beats Rock");
    } else if (playerSelection == scissors && computerSelection == rock) {
        return lose;
    }    console.log("Rock beats Scissors"); 
}

function game() {
     let playerScore = 0;
     let computerScore = 0;
     for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Rock,Paper,Scissors?") 
        let game = playRound();
        if (game = win ) {
            console.log(win);
            playerScore ++;
            console.log(playerScore + " " + computerScore)
        }else if (game = draw ) {
            console.log(draw);  
            console.log(playerScore + " " + computerScore)
        }else if (game = lose ) {
            console.log(lose);  
            computerScore ++ ;
            console.log(playerScore + " " + computerScore)
        }

     }
}

game();