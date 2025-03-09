//Global Score variables
let humanScore = 0;
let computerScore = 0;

const container = document.querySelector(".container");
const btnContainer = document.createElement("div");

const btnRock = document.createElement("button");
btnRock.innerText = "Play Rock";
btnRock.value = "Rock";

const btnPaper = document.createElement("button");
btnPaper.innerText = "Play Paper";
btnPaper.value = "Paper";


const btnScissors = document.createElement("button");
btnScissors.innerText = "Play Scissors";
btnScissors.value = "Scissors";

const scoreBoard = document.createElement("div");
const gameTextWindow = document.createElement("div");


btnContainer.append(btnRock, btnPaper, btnScissors);
container.append(btnContainer, scoreBoard, gameTextWindow);
scoreBoard.innerText = `Human Score : 0\nComputer Score : 0`;



function playRound(humanChoice, computerChoice) {
    gameTextWindow.innerText = `You choose ${humanChoice} & Computer chose ${computerChoice}.\n`
    if (humanChoice === computerChoice) {
        gameTextWindow.innerText += "It's a Draw!";
    } else if ((humanChoice === "Rock" && computerChoice === "Paper") ||
        (humanChoice === "Paper" && computerChoice === "Scissors") ||
        (humanChoice === "Scissors" && computerChoice === "Rock")) {
        computerScore++;
        gameTextWindow.innerText += `You lose! ${computerChoice} beats ${humanChoice}.`;
    } else if ((humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")) {
        humanScore++;
        gameTextWindow.innerText += `You win! ${humanChoice} beats ${computerChoice}.`;
    }
    scoreBoard.innerText = 
    `Human Score : ${humanScore}\nComputer Score : ${computerScore}`;
}

function declareWinner() {
     if (humanScore > computerScore) {
        gameTextWindow.innerText += "\nFinal result: User is victorious!!!"
    } else {
        gameTextWindow.innerText += "\nFinal result: The computer is victorious!!!";
    }
    humanScore = 0;
    computerScore = 0;
}


btnContainer.addEventListener("click", e => {
    const targetNodeName = e.target.nodeName.toLowerCase();
    if (targetNodeName === "button") {
        function getHumanChoice() {
            const choice = e.target.value;
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
        
        if (humanScore === 5 || computerScore === 5) declareWinner();

    }
});



