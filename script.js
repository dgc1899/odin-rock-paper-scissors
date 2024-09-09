const divButtons = document.querySelector(".buttons");
const btnRock = document.createElement("button");
const btnPaper = document.createElement("button");
const btnScissors = document.createElement("button");
const lblResults = document.querySelector(".results");
const lblComputerScore = document.querySelector(".computerScore");
const lblHumanScore = document.querySelector(".humanScore");

function setupUI() {
    btnRock.textContent = "Rock";
    btnPaper.textContent = "Paper";
    btnScissors.textContent = "Scissors";

    btnRock. value = "Rock";
    btnPaper. value = "Paper";
    btnScissors. value = "Scissors";

    counterHuman = 0;
    counterComputer = 0;

    const buttons = [btnRock, btnPaper, btnScissors];

    buttons.forEach(button => {
        button.addEventListener("click", e => {
            let result = "";
            result = playRound(e.target.value, getComputerChoice());
            updateCounter(result);
            updateScore(result);
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

function updateCounter(result) {
    if (counterComputer == 5 || counterHuman == 5) {
        if (counterHuman > counterComputer) {
            alert("Congratulations! You won this game.");
            resetGame();
        }
        else {
            alert("The AI has won this game :( Better luck next time!");
            resetGame();
        }
    }
    else {
        if (result == "Computer") {
            counterComputer++;
        }
        else if (result == "Human") {
            counterHuman++;
        }
    }
}

function updateScore(result) {
    if (result == "Computer") {
        lblComputerScore.textContent = `${counterComputer}`;
    }
    else if (result == "Human") {
        lblHumanScore.textContent = `${counterHuman}`;
    }
}

function resetGame() {
    counterComputer = 0;
    counterHuman = 0;
    lblResults.textContent = "";
    lblComputerScore.textContent = "0";
    lblHumanScore.textContent = "0";
}

setupUI();