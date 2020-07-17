/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;

/*
 * Initializes game when 'Start Game' button is clicked
 */
document.getElementById("btn__reset").addEventListener('click', () => {
    game = new Game(); //initialize game object
    game.resetGame();
    game.startGame();
    // Enables use of keyboard to select letters during game
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

/*
 * Listens for keyboard button clicks to select letters
 */
document.getElementById("qwerty").addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        game.handleInteraction(event.target);
    }
});


