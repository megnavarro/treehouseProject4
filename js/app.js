/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// const logPhrase = (phrase) => {
//     console.log(Array.from(phrase.phrase));
// };

// const game = new Game(); 

// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);

// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());


// game.getRandomPhrase();

let game;

document.getElementById("btn__reset").addEventListener('click', () => {
    game = new Game();
    game.resetGame();
    game.startGame();
    document.addEventListener('keyup', (event) => {
        if (/^[a-z]$/.test(event.key)) {
            const keyboardButtons = document.getElementsByClassName('key');
            const buttonArray = Array.from(keyboardButtons);
            buttonArray.forEach((button) => {
                if(button.innerHTML === event.key) {
                    game.handleInteraction(button);
                }
            });
        }
    });
});

document.getElementById("qwerty").addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        game.handleInteraction(event.target);
    }
});

//(/^Key[A-Z]$/.test(event.code))


