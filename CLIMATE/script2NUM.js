let secretNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;
let maxAttempt = 5;

function makeGuess() {
    let guess = parseInt(document.getElementById("guessInput").value);
    attempts += 1;
    let message = "";
    if (guess === secretNumber) {

        message = 'Cograds you defeated apple, You win! in ${attempts} tries';
        document.getElementById("guessInput").disabled = true;

    } else if (guess > secretNumber) {
        message = "Too high try again";

    } else if (guess < secretNumber) {
        message = "Too low try again"
    } 

    document.getElementById("message").textContent = message;
    document.getElementById("attempts").textContent = 'Attempts: ${attempts} / ${maxAttempts}';



    if (attempts >= maxAttempts && guess !== secretNumber){
        
      document.getElementById("message").textContent = 'OOF GAME OVER WOMP WOMP SECRETNUM WAS ${secretNumber}.';
      document.getElementById("guessInput").disabled = true;

    }

    document.getElementById("guessInput").value = "";


}
