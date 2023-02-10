// Define computer function to randomly return 'Rock', 'Paper', or 'Scissors'
function getComputerChoice() {
    let choice = '';

    // Randomly select a number from 1-3
    let randomNumber = Math.floor((Math.random() * 3)) + 1;

    // Assign a number to each choice
    if (randomNumber == 1) {
        choice = 'rock';
    } else if (randomNumber == 2) {
        choice = 'paper';
    } else if (randomNumber == 3) {
        choice = 'scissors';
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

    return 'Something went wrong!'
}

// Define game function to play 5 rounds
function game() {

    // Keep track of player and computer points
    let playerPoints = 0;
    let computerPoints = 0;

    // Call oneRound function 5 times and keep score
    for (let i = 1; i <= 5; i++) {
        let computerSelection = getComputerChoice();
        let playerSelection = prompt('Choose Rock, Paper, or Scissors?', '');
        let text = oneRound(playerSelection, computerSelection);

        if (text.includes('win') == true) {
            console.log(`Round ${i}: Player wins!`);
            playerPoints++;
        } else if (text.includes('lose') == true) {
            console.log(`Round ${i}: Computer wins!`);
            computerPoints++;
        } else if (text.includes('Tie') == true) {
            console.log(`Round ${i}: Tie!`);
        } else {
            console.log(`Round ${i}: Inconclusive!`);
        }
    }

    console.log(`Player: ${playerPoints}`);
    console.log(`Computer: ${computerPoints}`);

    // Declare the winner
    if (playerPoints > computerPoints) {
        return 'Player wins!'
    } else if (playerPoints < computerPoints) {
        return 'Computer wins!'
    } else {
        return 'Tie!'
    }
}

console.log(game());