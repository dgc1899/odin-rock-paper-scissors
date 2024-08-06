let humanScore = 0;
let computerScore = 0;

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
    if (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {
        return "Invalid choice!";
    }
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    let result = false;
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
        humanScore++;
    }
    else {
        console.log(`Oof, you lost this one. ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
