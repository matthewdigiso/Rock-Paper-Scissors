// Function to generate computer's choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Function to determine the result
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'draw';
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'scissors' && computerChoice === 'paper') ||
        (userChoice === 'paper' && computerChoice === 'rock')
    ) {
        return 'win';
    } else {
        return 'lose';
    }
}

// Function to update the result
function playGame(userChoice) {
    const computerChoice = getComputerChoice();

    // Display choices
    document.getElementById('user-choice').textContent = userChoice;
    document.getElementById('computer-choice').textContent = computerChoice;

    // Determine the winner
    const result = determineWinner(userChoice, computerChoice);
    const resultElement = document.getElementById('result');

    // Update result display
    if (result === 'win') {
        resultElement.textContent = "You win!";
        resultElement.classList.remove('lose', 'draw');
        resultElement.classList.add('win');
    } else if (result === 'lose') {
        resultElement.textContent = "You lose!";
        resultElement.classList.remove('win', 'draw');
        resultElement.classList.add('lose');
    } else {
        resultElement.textContent = "It's a draw!";
        resultElement.classList.remove('win', 'lose');
        resultElement.classList.add('draw');
    }
}

// Add event listeners to buttons
document.getElementById('rock-btn').addEventListener('click', function() {
    playGame('rock');
});;

document.getElementById('paper-btn').addEventListener('click', function() {
    playGame('paper');
});

document.getElementById('scissors-btn').addEventListener('click', function() {
    playGame('scissors');
});
