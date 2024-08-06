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

function getHumanChoice() {
    let humanChoice = prompt("What is your choice?");
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {
        return "Invalid choice!";
    }
    return humanChoice;
}
