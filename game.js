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
}

function playerPlay() {
    let playerChoice = prompt("rock, paper or scissor?").toLowerCase();
    return playerChoice;
}

let playerSelection = playerPlay()
let computerSelection = computerPlay();


function round(playerSelection, computerSelection) {

    let result;

    if (playerSelection == "rock" && computerSelection == "rock") {
        result = "Draw";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        result = "You Lose! Paper beats Rock";
    } else if (playerSelection == "rock" && computerSelection == "Scissor") {
        result = "You Win! Rock beats Scissor";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        result = "You Win! Paper beats Rock";
    } else if (playerSelection == "paper" && computerSelection == "paper") {
        result = "Draw";
    } else if (playerSelection == "paper" && computerSelection == "scissor") {
        result = "You Lose! Scissor beats Paper";
    } else if (playerSelection == "scissor" && computerSelection == "rock") {
        result = "You Lose! Rock beats Scissor";
    } else if (playerSelection == "scissor" && computerSelection == "paper") {
        result = "You Win! Scissor beats Paper";
    } else if (playerSelection == "scissor" && computerSelection == "scissor") {
        result = "Drax";
    } else {
        result = "you need to chose rock, paper or scissor!!";
    }
    return result;
}

console.log(round(playerSelection, computerSelection));