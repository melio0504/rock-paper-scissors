function getComputerChoice() {
    choice =  Math.floor(Math.random() * 3);

    if (choice === 0) {
        console.log('rock')
    } else if (choice === 1) {
        console.log('paper')
    } else {
        console.log('scissors')
    }

    return choice;
}

function getHumanChoice() {
    let answer = prompt("Rock Paper Scissors! What would it be?").toLowerCase();

    console.log(answer);

    return answer;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    let humanChoice = getHumanChoice;
    let computerChoice = getComputerChoice;

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();


function playGame() {



    playRound(humanSelection, computerSelection);
}