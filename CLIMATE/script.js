document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("Rock").addEventListener("click", () => playGame('Rock'));
    document.getElementById("Paper").addEventListener("click", () => playGame('Paper'));
    document.getElementById("Scissors").addEventListener("click", () => playGame('Scissors'));
})
function playGame(userChoice) {
    const choices = ['Rock','Paper','Scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result;

    if (userChoice === computerChoice) {
        result = "A tie!";

    } else if (
        (userChoice === 'Rock' && computerChoice === 'Scissors') ||
        (userChoice === 'Paper' && computerChoice === 'Rock') ||
        (userChoice === 'Scissors' && computerChoice === 'Paper') 
    ) {
        result = 'You Win! ${userChoice} beats ${computerChoice}';

    } else {
        result = 'You Lost! ${computerChoice} beats ${userChoice}';
    }
    console.log('User Choice: ${userChoice}');
    console.log('Computer Choice: ${computerChoice}');
    console.log('Result: ${result}');

    document.getElementById('result').textContent = result; 


}
