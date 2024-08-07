# odin-rock-paper-scissors
Rock, paper, scissors game in Js

1. Start
2. Ask user what his input is going to be (Rock, paper or scissors) in function getHumanChoice
    3. If userChoice is either rock, paper or scissors, store in humanChoice
    4. Else, return "Enter a valid choice"
5. Randomly decide computer choice in getComputerChoice
    6. In a range of int 1 - 3, select a random number (1 will be rock; 2 will be paper; 3 will be scissors)
    7. Return assigned string
8. Initialize computerScore and userScore at 0
9. In function playRound(getHumanChoice, getComputerChoice)
    10. Compare both choices
    11. Rock wins against scissors, loses against paper
    12. Paper wins against rock, loses against scissors
    13. Scissors wins against paper, loses against rock
    14. Increment either humanScore or computerScore
15. Repeat playRound 5 times in function playGame
