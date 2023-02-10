// Define computer function to randomly return 'Rock', 'Paper', or 'Scissors'
function getComputerChoice() {
    let choice = '';

    // Randomly select a number from 1-3
    let randomNumber = Math.floor((Math.random() * 3)) + 1;

    // Assign a number to each choice
    if (randomNumber == 1) {
        choice = 'Rock';
    } else if (randomNumber == 2) {
        choice = 'Paper';
    } else if (randomNumber == 3) {
        choice = 'Scissors';
    }
    return choice;
}

// Define function that plays a single round of Rock Paper Scissors
function oneRound(playerSelection, computerSelection) {

    // Make player's selection case-insensitive
    playerSelection = playerSelection.toLowerCase();

    return "Default string!"
}