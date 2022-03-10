let score = 0;
const res = document.querySelector('p');
let round = 0;

function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];

    let randchoice = Math.floor(Math.random() * choices.length)

    return choices[randchoice];
}

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    
    
    playerSelection.toLowerCase();

    if (playerSelection == computerSelection) {
        document.getElementById("res").textContent = ("Draw! Score: " + score);
        round++;
    }

    if (playerSelection != computerSelection) {
        if (playerSelection == "rock" && computerSelection == "scissors") {
            score++;
            round++;
            document.getElementById("res").textContent = ("Rock beats scissors, you won! Score: " + score);
        }

        else if (playerSelection == "paper" && computerSelection == "rock") {
            score++;
            round++;
            document.getElementById("res").textContent = ("Paper beats rock, you won! Score: " + score);
        }

        else if (playerSelection == "scissors" && computerSelection == "paper") {
            score++;
            round++;
            document.getElementById("res").textContent = ("Scissors beats paper, you won! Score: " + score);
            
        }

        else {
            round++;
            document.getElementById("res").textContent = ("You lost this round! Score: " + score);
            
        }
    
        if (round == 5) {
            if (score >= 3) {
                document.getElementById("res").textContent = ("You won this game with a score of: " + score);
            }
        
            else{
                document.getElementById("res").textContent = ("You lost this game with a score of: " + score);
            }
        
            round = round - round;
            score = score - score;
        }
    
    }
}




