let score = 0;

function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];

    let randchoice = Math.floor(Math.random() * choices.length)

    return choices[randchoice];
}

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    playerSelection = prompt("Whats your move?");
    
    playerSelection.toLowerCase();

    if (playerSelection == computerSelection) {
        alert("Draw!");
    }

    if (playerSelection != computerSelection) {
        if (playerSelection == "rock" && computerSelection == "scissors") {
            alert("Rock beats scissors, you won!");
            score++;
        }

        else if (playerSelection == "paper" && computerSelection == "rock") {
            alert("Paper beats rock, you won!");
            score++;
        }

        else if (playerSelection == "scissors" && computerSelection == "paper") {
            alert("Scissors beats paper, you won!");
            score++;
        }

        else {
            alert("You lost!");
        }
    }
}



const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");