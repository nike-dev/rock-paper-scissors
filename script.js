function getComputerChoice() {
    let choice = Math.random() * 10;
    if (choice <= 3) {
        return "Rock";
    }
    else if (choice > 3 && choice <= 6) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("What do you choose?");
    return choice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        let firstLetter = humanChoice[0].toUpperCase();
        let allOtherLetters = humanChoice.substring(1);
        humanChoice = firstLetter + allOtherLetters;

        if (humanChoice === computerChoice) {
            console.log("Draw! The round will be replayed.")
        } else if (humanChoice === "Rock" && computerChoice === "Paper") {
            computerScore++;
            console.log("You lose! Paper beats Rock.");
        } else if ((humanChoice === "Rock") && (computerChoice === "Scissors")) {
            humanScore++;
            console.log("You win! Rock beats Scissors.");
        } else if ((humanChoice === "Paper") && (computerChoice === "Rock")) {
            humanScore++;
            console.log("You win! Paper beats Rock.");
        } else if ((humanChoice === "Paper") && (computerChoice === "Scissors")) {
            computerScore++;
            console.log("You lose! Scissors beats Paper.");
        } else if ((humanChoice === "Scissors") && (computerChoice === "Rock")) {
            computerScore++;
            console.log("You lose! Rock beats Scissors.");
        } else if ((humanChoice === "Scissors") && (computerChoice === "Paper")) {
            humanScore++;
            console.log("You win! Scissors beats Paper.");
        }
        console.log(`Your score: ${humanScore} vs Computer score: ${computerScore}`);
    }

    for (let i = 0; i < 5; i++) {

        const humanSelection = getHumanChoice();
        console.log(`You chose ${humanSelection[0].toUpperCase() + humanSelection.substring(1).toLowerCase()}.`);
        const computerSelection = getComputerChoice();
        console.log(`Computer chose ${computerSelection}.`);

        playRound(humanSelection, computerSelection);
    }

    if (humanScore === computerScore) {
        console.log("Final result: Draw!");
    } else if (humanScore > computerScore) {
        console.log("Final result: User is victorious!!!")
    } else {
        console.log("Final result: The computer is victorious!!!")
    }
}

playGame();



