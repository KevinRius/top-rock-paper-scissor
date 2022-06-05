let compScore = 0;
var playerScore = 0;



function computerPlay() {
    let rand = Math.floor(Math.random() * (4 - 1) + 1);
    let computerChoice;
    if (rand == 1) {
        computerChoice = "rock";
    } else if(rand == 2) {
        computerChoice = "paper";
    } else if(rand == 3) {
        computerChoice = "scissor";
    }
    return computerChoice;
}       //make a random choice for Computer

function playerPlay() {
    let playerChoice = prompt("rock, paper or scissor?").toLowerCase();
    return playerChoice;
}       // prompt player to make a choice

function round(playerSelection, computerSelection) {

    if (playerSelection == "rock" && computerSelection == "rock") {
        console.log("Draw");
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        console.log("You Lose! Paper beats Rock");
        compScore++;
    } else if (playerSelection == "rock" && computerSelection == "scissor") {
        console.log("You Win! Rock beats Scissor");
        playerScore++;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("You Win! Paper beats Rock");
        playerScore++;
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        console.log("Draw");
    } else if (playerSelection == "paper" && computerSelection == "scissor") {
        console.log("You Lose! Scissor beats Paper");
        compScore++;
    } else if (playerSelection == "scissor" && computerSelection == "rock") {
        console.log("You Lose! Rock beats Scissor");
        compScore++;
    } else if (playerSelection == "scissor" && computerSelection == "paper") {
        console.log("You Win! Scissor beats Paper");
        playerScore++;
    } else if (playerSelection == "scissor" && computerSelection == "scissor") {
        console.log("Draw");
    } else {
        console.log("you need to chose rock, paper or scissor!!");
    }
}       /* run a round of rock-paper-scissor, learned that parameters take variables 
        as value, make a local copy that is not saved globally, unlike references 
        which are kept */

function game() {

    for (let i = 0; i < 5; i++) {
        let playerSelection = playerPlay();
        let computerSelection = computerPlay();
        let match = round(playerSelection, computerSelection, compScore, playerScore);
        let score = 'player:' + playerScore + ' | computer:' + compScore;
        console.log(score);
    }

    if (playerScore > compScore) {
        console.log("Player Win!!");
    } else if (playerScore < compScore) {
        console.log("Computer Win!!");
    } else {
        console.log("Draw!!");
    }
} // run 5 round of the game, declare points and winner

game();