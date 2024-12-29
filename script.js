//Rock-Paper-Scissors Game

//Global Score variables
let humanScore = 0;
let computerScore = 0;

//Function to get Computer's choice
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

//Function to get Human's choice
function getHumanChoice() {
    let userInput = prompt("What do you choose?");
    let choice = userInput.trim();
    choice = choice[0].toUpperCase() + choice.substring(1).toLowerCase();
    return choice;
}
//function to take choices and execute each round
function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        console.log("Draw! The round will be replayed.")
    } else if ((humanChoice === "Rock" && computerChoice === "Paper") ||
        (humanChoice === "Paper" && computerChoice === "Scissors") ||
        (humanChoice === "Scissors" && computerChoice === "Rock")) {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    } else if ((humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")) {
        humanScore++;
        console.log("You win! ${humanChoice} beats ${computerChoice}.");
    }
    console.log(`Your score: ${humanScore} vs Computer score: ${computerScore}`);
    console.log("");
}

//Prints final result to console
function declareWinner() {
    if (humanScore === computerScore) {
        console.log("Final result: Draw!");
    } else if (humanScore > computerScore) {
        console.log("Final result: User is victorious!!!")
    } else {
        console.log("Final result: The computer is victorious!!!")
    }
}

//Main game function to play 5 rounds
function playGame() {
    //Loops the choices and rounds for upto 5
    for (let i = 0; i < 5; i++) {

        const humanSelection = getHumanChoice();
        console.log(`You chose ${humanSelection[0].toUpperCase() + humanSelection.substring(1).toLowerCase()}.`);
        const computerSelection = getComputerChoice();
        console.log(`Computer chose ${computerSelection}.`);



        playRound(humanSelection, computerSelection);
    }
    declareWinner();
}

playGame(); //Executes the game



