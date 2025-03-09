//Global Score variables
let humanScore = 0;
let computerScore = 0;

const container = document.querySelector(".container");
const btnContainer = document.createElement("div");

const btnRock = document.createElement("button");
btnRock.innerText = "Play Rock";
btnRock.value = "Rock";
btnRock.setAttribute("class", "btn");

const btnPaper = document.createElement("button");
btnPaper.innerText = "Play Paper";
btnPaper.value = "Paper";
btnPaper.setAttribute("class", "btn");


const btnScissors = document.createElement("button");
btnScissors.innerText = "Play Scissors";
btnScissors.value = "Scissors";
btnScissors.setAttribute("class", "btn");




btnContainer.append(btnRock, btnPaper, btnScissors);
container.append(btnContainer);

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
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    }
    console.log(`Your score: ${humanScore} vs Computer score: ${computerScore}`);
    console.log("");
}

function declareWinner() {
    if (humanScore === computerScore) {
        console.log("Final result: Draw!");
    } else if (humanScore > computerScore) {
        console.log("Final result: User is victorious!!!")
    } else {
        console.log("Final result: The computer is victorious!!!")
    }
}


btnContainer.addEventListener("click", e => {
    const targetNodeName = e.target.nodeName.toLowerCase();
    if (targetNodeName === "button") {
        function getHumanChoice() {
            const userInput = e.target.value;
            let choice = userInput.trim();
            choice = choice[0].toUpperCase() + choice.substring(1).toLowerCase();
            return choice;
        }
        function getComputerChoice() {
            const randomNum = Math.random() * 10;
            let computerChoice;

            computerChoice =
                (randomNum <= 3)
                    ? "Rock"
                    : (randomNum <= 6)
                        ? "Paper"
                        : "Scissors";
            return computerChoice;
        }
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
});



