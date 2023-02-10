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

    // Declare rules for what choice beats which choice
    if (playerSelection == 'rock') {
        if (computerSelection == 'scissors'){
            return 'You win! Rock beats Scissors';
        } else if (computerSelection == 'paper'){
            return 'You lose! Paper beats Rock';
        } else {
            return 'Tie!'
        }
    }

    if (playerSelection == 'paper') {
        if (computerSelection == 'rock'){
            return 'You win! Paper beats Rock';
        } else if (computerSelection == 'scissors'){
            return 'You lose! Scissors beats Paper';
        } else {
            return 'Tie!'
        }
    } 

    if (playerSelection == 'scissors') {
        if (computerSelection == 'paper'){
            return 'You win! Scissors beats Paper';
        } else if (computerSelection == 'rock'){
            return 'You lose! Rock beats Scissors';
        } else {
            return 'Tie!'
        }
    }

    return 'Default string!'
}