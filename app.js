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

// Buttons
const buttons = document.querySelectorAll('button');
const divResult = document.querySelector('.result');
const pScore = document.querySelector('.playerScore');
const cScore = document.querySelector('.compScore');
let btns = document.getElementById('btns');
let clone = btns.cloneNode(true);

// Display total points
let playerPoints = 0;
let computerPoints = 0;


// Use .forEach to iterate through each button
buttons.forEach((button) => {

    // Define play function for button
    let play = () => {

        // Play one round of Rock Paper Scissors
        let text = oneRound(button.id, getComputerChoice());
        divResult.textContent = text;

        if (text.includes('win') == true) {
            playerPoints++;
            console.log(playerPoints);
        } else if (text.includes('lose') == true) {
            computerPoints++;
        }

        if (playerPoints == 5) {
            divResult.textContent = 'Player is the WINNER!';
        } else if (computerPoints == 5) {
            divResult.textContent = 'Computer is the WINNER!';    
        }

        // Update score
        pScore.textContent = `Player: ${playerPoints}`;
        cScore.textContent = `Computer: ${computerPoints}`;

        // To removeEventListener
        if (playerPoints == 5) {
            divResult.textContent = 'Player is the WINNER!';
            btns.replaceWith(clone);
        } else if (computerPoints == 5) {
            divResult.textContent = 'Computer is the WINNER!'; 
            btns.replaceWith(clone);
        }
    };

    button.addEventListener('click', play);
});