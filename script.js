//1. Get Computerchoice 
function getComputerChoice() {
    let choice = Math.random() * 10;
    console.log(choice);
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
console.log(getComputerChoice());

//2. Prompt user choice then store it into a variable
//3. Compare the two choice variables to determine the winner
//4. The winner gets a point stored into a counter
//5. Run the game for 5 rounds and announce the overall winner. 



// Step 1: Get Computer choice
// Function getComputerChoice() when executed outputs "rock", "paper" or "scissors".

