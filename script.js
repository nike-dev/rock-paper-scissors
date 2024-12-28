//1. Get Computerchoice 
function getComputerChoice() {
    let choice = Math.random() * 10;
    if (choice <= 3) {
        return "Rock";
    }
    else if (choice > 3 && choice <= 6) {
        return "Paper";
    }
    else {
        return "Scissor";
    }
}

//2. Prompt user choice then store it into a variable

function getHumanChoice() {
    let choice = prompt("What do you choose?");
    return choice;
}

//3. Defining score variables




function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        let firstLetter = humanChoice[0].toUpperCase();
        let allOtherLetters = humanChoice.substring(1);
        humanChoice = firstLetter + allOtherLetters;

        if (humanChoice === computerChoice) {
            console.log("Draw! The round will be replayed.") //Round should be replayed here.
        } else if (humanChoice === "Rock" && computerChoice === "Paper") {
            computerScore++;
            console.log("You lose! Paper beats Rock.\n");
        } else if ((humanChoice === "Rock") && (computerChoice === "Scissor")) {
            humanScore++;
            console.log("You win! Rock beats Scissor.");
        } else if ((humanChoice === "Paper") && (computerChoice === "Rock")) {
            humanScore++;
            console.log("You win! Paper beats Rock.");
        } else if ((humanChoice === "Paper") && (computerChoice === "Scissor")) {
            computerScore++;
            console.log("You lose! Scissor beats Paper.");
        } else if ((humanChoice === "Scissor") && (computerChoice === "Rock")) {
            computerScore++;
            console.log("You lose! Rock beats Scissor.");
        } else if ((humanChoice === "Scissor") && (computerChoice === "Paper")) {
            humanScore++;
            console.log("You win! Scissor beats Paper.");
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



