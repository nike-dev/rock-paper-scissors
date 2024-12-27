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
    let choice = prompt("What do you choose?", "Rock or Paper or Scissors");
    return choice;
}

let humanScore = 0;
let computerScore = 0;


//3. Compare the two choice variables to determine the winner

function playRound(humanChoice, computerChoice) {
  let firstLetter = humanChoice[0].toUpperCase();
  let allOtherLetters = humanChoice.substr(1);
  humanChoice = firstLetter + allOtherLetters;
    
    if (humanChoice === computerChoice) {
        console.log("Draw! The round will be replayed.") //Round should be replayed here.
    } if (humanChoice === "Rock" && computerChoice === "Paper") {
        computerScore++;
        console.log("You lose! Paper beats Rock.");
    } if ((humanChoice === "Rock") && (computerChoice === "Scissor")) {
        humanScore++;
        console.log("You win! Rock beats Scissor.");
    }else if ((humanChoice === "Paper") && (computerChoice === "Rock")) {
        humanScore++; 
        console.log("You win! Paper beats Rock.");
    }else if ((humanChoice === "Paper") && (computerChoice === "Scissor")) {
        computerScore++; 
        console.log("You lose! Scissor beats Paper.");
    }else if ((humanChoice === "Scissor") && (computerChoice === "Rock")) {
        computerScore++; 
        console.log("You lose! Rock beats Scissor.");
    }else if ((humanChoice === "Scissor") && (computerChoice === "Paper")) {
        humanScore++; 
        console.log("You win! Scissor beats Paper.");
    }
}
const humanSelection = getHumanChoice();
console.log(`You chose ${humanSelection}.`);
const computerSelection = getComputerChoice();
console.log(`Computer chose ${computerSelection}.`);

playRound(humanSelection, computerSelection);

//4. The winner gets a point stored into a counter
//5. Run the game for 5 rounds and announce the overall winner. 



// Step 1: Get Computer choice

// Function getComputerChoice() when executed outputs "rock", "paper" or "scissors".
