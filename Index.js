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
        console.log("Paper beats Rock");
        return lose;        
    } else if ( playerSelection == scissors && computerSelection == paper) {
        console.log("Scissors beat paper");
        return win;
    } else if (playerSelection == rock && computerSelection == scissors) {
        console.log("Rock beats Scissors");
        return win;
    } else if (playerSelection == paper && computerSelection == scissors) {
        console.log("Scissors beat paper");
        return lose;
    } else if (playerSelection == paper && computerSelection == rock) {
        console.log("Paper beats Rock");
        return win;  
    } else if (playerSelection == scissors && computerSelection == rock) {
        console.log("Rock beats Scissors");
        return lose;
    }   
}

function game() {
     let playerScore = 0;
     let computerScore = 0;
     for (let i = 0; i < 5; i++) {
        let player = prompt("Rock,Paper,Scissors?") ;
        let game = playRound(player, computerPlay())
        if (game == win ) {
            console.log(win);
            playerScore ++;
            console.log(playerScore + " " + computerScore)
        }else if (game == draw ) {
            console.log(draw);  
            console.log(playerScore + " " + computerScore)
        }else if (game == lose ) {
            console.log(lose);  
            computerScore ++ ;
            console.log(playerScore + " " + computerScore)
        }

     }
}

game();