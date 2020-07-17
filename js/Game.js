/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = 'null';
    }

/*
 * Creates phrases for use in the game
 * @return {array} An array of phrases that could be used in the game
 */
    createPhrases(){
        const phrases = [
            new Phrase("You'll shoot your eye out, kid"),
            new Phrase("You're my boy, Blue"),
            new Phrase("Greetings, my excellent friends"),
            new Phrase("There’s no crying in baseball"),
            new Phrase("I wouldn’t say I’ve been missing it, Bob"),
          ];
      
          return phrases;
    };

/*
 * Selects random phrase from phrases property
 * @return {Object} Phrase object chosen to be used
 */
    getRandomPhrase() {
        return this.phrases[this.getRandomInt(0, this.phrases.length)];
    };

/*
 * Generates a random integer
 * Found on MDN.org
 * @parameter {Integer} min - minimum number to be returned
 * @parameter {Integer} max - maximum number to be returned
 */
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive 
      };

/*
 * Begins game by selecting a random phrase and displaying it to user
 */
    startGame(){
        document.getElementById('overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase()
        this.activePhrase.addPhraseToDisplay(Phrase);
    };

/*
 * Handles onscreen keyboard button clicks
 * @param (HTMLBUttonElement) button - the clicked button element
 */
    handleInteraction(button) {
        
        button.disabled = true;

        if(this.activePhrase.checkLetter(button.innerHTML)) {
            button.className = 'chosen';
            this.activePhrase.showMatchedLetter(button.innerHTML);
            if(this.checkForWin()) {
                this.gameOver(true);
            }
        } else {
            button.className = 'wrong';
            this.removeLife();
        }

    };

/*
 * Checks for winning move
 * @return {boolean} True if game has been won, false if game wasn't won
 */
    checkForWin() {
       const letterCheckArray = document.querySelectorAll('.hide');
       if (letterCheckArray.length === 0) {
           return true;
       } else {
           return false;
       }
    };

/*
 * Increases the value of the missed property
 * Removes a life from the scoreboard
 * Checks if player has remaining lives and ends game if player is out
 */
    removeLife() {
        const lives = document.querySelectorAll('.tries');
        lives[this.missed].firstElementChild.setAttribute('src', "images/lostHeart.png");
        lives[this.missed].firstElementChild.className = 'lost';
     
        this.missed++;

        if (this.missed === 5) {
            this.gameOver(false);
        }

    };

/*
 * Displays game over message
 * @param {boolean} gameWon - Whether or not the user won the game
 */

    gameOver(gameWon){
        const startScreenOverlay = document.getElementById('overlay')
        startScreenOverlay.style.display = 'block';
        

        const endGameMessage = document.getElementById("game-over-message");
        if (gameWon) {
            endGameMessage.textContent = 'Way to go! You won the game!';
            startScreenOverlay.className = 'win';
        } else {
            endGameMessage.textContent = "Sorry, you didn't guess the phrase. Better luck next time!";
            startScreenOverlay.className = 'lose';  
        }
    };

    resetGame() {
        document.querySelector("#phrase ul").innerHTML = '';

        const keyboardLetters = document.querySelectorAll(".keyrow button");
        keyboardLetters.forEach((button) => {
            button.disabled = false;
            button.className = 'key';
        });

        const heartImages = document.querySelectorAll('img');
        heartImages.forEach((image) => {
            image.setAttribute('src', 'images/liveHeart.png');
        });        
    }
}

