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
// Create function getHumanChoice () {
//  let choice = input from user;
//  return choice;}

function getHumanChoice() {
    let choice = prompt("What do you choose?");
    return choice;
}
let humanScore = 0;
let computerScore = 0;

for (let i = 0; i < 4; i++) {
    const humanSelection = getHumanChoice();
    console.log(`You chose ${humanSelection[0].toUpperCase() + humanSelection.substring(1).toLowerCase()}.`);
    const computerSelection = getComputerChoice();
    console.log(`Computer chose ${computerSelection}.`);

    playGame(humanSelection, computerSelection);
    console.log(humanScore, computerScore);
}
const humanSelection = getHumanChoice();
console.log(`You chose ${humanSelection[0].toUpperCase() + humanSelection.substring(1).toLowerCase()}.`);
const computerSelection = getComputerChoice();
console.log(`Computer chose ${computerSelection}.`);
playGame(humanSelection, computerSelection);
console.log(humanScore, computerScore);
if (computerScore < humanScore) {
    console.log("The human wins!");
}else if (computerScore === humanScore) {
    console.log("It's a draw.");
} else {
    console.log("Computer wins!")
}


//4. The winner gets a point stored into a counter
//5. Run the game for 5 rounds and announce the overall winner. 


function playGame(humanChoice, computerChoice) {



    //3. Compare the two choice variables to determine the winner

    function playRound(humanChoice, computerChoice) {
        let firstLetter = humanChoice[0].toUpperCase();
        let allOtherLetters = humanChoice.substring(1);
        humanChoice = firstLetter + allOtherLetters;


        if (humanChoice === computerChoice) {
            console.log("Draw! The round will be replayed.") //Round should be replayed here.
        } else if (humanChoice === "Rock" && computerChoice === "Paper") {
            computerScore++;
            console.log("You lose! Paper beats Rock.");
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
    }
    playRound(humanChoice, computerChoice)
}

