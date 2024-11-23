document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("Choice 1").addEventListener("click", () => playGame('NUCELAR ENERGY.'));
    document.getElementById("Choice 2").addEventListener("click", () => playGame('FOSSIL FUELS.'));
    document.getElementById("Choice 3").addEventListener("click", () => playGame('SOLAR ENERGY.'));

    document.getElementById("Choice 4").addEventListener("click", () => playGame('Cheat off of someone else.'));
    document.getElementById("Choice 5").addEventListener("click", () => playGame('Use your book.'));
    document.getElementById("Choice 6").addEventListener("click", () => playGame('Try to remember.'));

    document.getElementById("Choice 7").addEventListener("click", () => playGame('Say YES'));
    document.getElementById("Choice 8").addEventListener("click", () => playGame('Say MABYE'));
    document.getElementById("Choice 9").addEventListener("click", () => playGame('Say NO'));

    document.getElementById("Choice 10").addEventListener("click", () => playGame('Tell teacher'));
    document.getElementById("Choice 11").addEventListener("click", () => playGame('Help them'));
    document.getElementById("Choice 12").addEventListener("click", () => playGame('Also cheat'));
})

function playGame(userChoice) {
    const choices = ['NUCELAR ENERGY.','FOSSIL FUELS.','SOLAR ENERGY.','Cheat off of someone else.','Use your book.','Try to remember.','Say YES','Say MABYE','Say NO','Tell teacher','Help them','Also cheat'];
    
    let result;

    if (userChoice === 'SOLAR ENERGY.') {
        alert('CORRECT');

    } else if(userChoice === 'Try to remember.'){
        alert('CORRECT')

    } else if(userChoice === 'Say NO') {
        alert('CORRECT')
    } else if(userChoice === 'Tell teacher'){
        alert('CORRECT')

    } else {
        alert('Your Wrong!');
    }
    console.log('User Choice: ${userChoice}');
    
    console.log('Result: ${result}');

    document.getElementById('result').textContent = result; 


}


