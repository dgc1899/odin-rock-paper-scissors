function setupUI() {
    const divButtons = document.querySelector(".buttons");
    const btnRock = document.createElement("button");
    const btnPaper = ocument.createElement("button");
    const btnScissors = document.createElement("button");
    const lblResults = document.querySelector(".results");

    btnRock.textContent = "Rock";
    btnPaper.textContent = "Paper";
    btnScissors.textContent = "Scissors";

    btnRock. value = "Rock";
    btnPaper. value = "Paper";
    btnScissors. value = "Scissors";

    const buttons = [btnRock, btnPaper, btnScissors];

    buttons.forEach(button => {
        button.addEventListener("click", e => {
            const result = "";
            result = playRound(e.target.value, getComputerChoice());
        })
        divButtons.appendChild(button);
    });
}

function getComputerChoice() {
    let computerChoice;
    let random = Math.floor(Math.random() * 3);
    if (random === 1) {
        computerChoice = "Rock";
    }
    else if (random === 2) {
        computerChoice = "Paper";
    }
    else {
        computerChoice = "Scissors";
    }
    return computerChoice;
}

// function getHumanChoice() {
//     let humanChoice = prompt("What is your choice?");
//     humanChoice = humanChoice.toLowerCase();
//     return humanChoice;
// }

function playRound(humanChoice, computerChoice) {
    let result = false;
    if (humanChoice === computerChoice) {
        lblResults.textContent = "It's a draw...";
        return "Draw";
    }
    else {
        if (humanChoice === "Rock" && computerChoice === "Scissors") {
            result = true;
        }
        if (humanChoice === "Paper" && computerChoice === "Rock") {
            result = true;
        }
        if (humanChoice === "Scissors" && computerChoice === "Paper") {
            result = true;
        }
    
        if (result === true) {
            lblResults.textContent = "Congrats! you win this round.";
            return "Human"
        }
        else {
            lblResults.textContent = `Oof, you lost this one. ${computerChoice} beats ${humanChoice}`;
            return "Computer"
        }
    }
}

function playGame() {
    
}
