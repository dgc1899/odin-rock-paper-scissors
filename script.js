function getComputerChoice() {
    let computerChoice;
    let random = Math.floor(Math.random() * 3);
    if (random === 1) {
        computerChoice = "rock";
    }
    else if (random === 2) {
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors";
    }
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("What is your choice?");
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    let result = false;
    if (humanChoice === computerChoice) {
        console.log("It's a Draw...");
        return "Draw";
    }
    else {
        if (humanChoice === "rock" && computerChoice === "scissors") {
            result = true;
        }
        if (humanChoice === "paper" && computerChoice === "rock") {
            result = true;
        }
        if (humanChoice === "scissors" && computerChoice === "paper") {
            result = true;
        }
    
        if (result === true) {
            console.log("Congrats, you won the round!");
            return "Human"
        }
        else {
            console.log(`Oof, you lost this one. ${computerChoice} beats ${humanChoice}`);
            return "Computer"
        }
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        if (humanSelection !== "rock" && humanSelection !== "paper" && humanSelection !== "scissors") {
            console.log("Invalid choice detected, skipping...")
            i--;
        }
        else {
            let result = playRound(humanSelection, computerSelection);
            if(result === "Human") {
                humanScore++;
            }
            else if(result === "Computer") {
                computerScore++;
            }
        }
    }

    if(humanScore > computerScore) {
        console.log(`Congrats! you won the game. Final counter: You - ${humanScore}  AI - ${computerScore}`);
    }
    else if(computerScore > humanScore) {
        console.log(`You lost this one. Final counter: You - ${humanScore}  AI - ${computerScore}`);
    }
    else {
        console.log("Huh, that's weird...")
    }
}

playGame();