/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */


class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

/*
 * Display phrase on game board
 */
    addPhraseToDisplay(){
        const phraseArray = Array.from(this.phrase);
        const phraseArea = document.querySelector('#phrase ul');

        phraseArray.forEach((character) => {
            if (/[a-z]/.test(character)) {
                const letterPlaceholder = document.createElement('li');
                phraseArea.appendChild(letterPlaceholder);
                letterPlaceholder.className = `hide letter ${character}`;
                letterPlaceholder.textContent = `${character}`;
            } else if (/\s/.test(character)) {
                const spacePlaceholder = document.createElement('li');
                phraseArea.appendChild(spacePlaceholder);
                spacePlaceholder.className = 'space';
                spacePlaceholder.textContent = `${character}`;
            } else if (/(\W|\S)/.test(character)) {
                const otherCharPlaceholder = document.createElement('li');
                phraseArea.appendChild(otherCharPlaceholder);
                otherCharPlaceholder.className = 'other-char';
                otherCharPlaceholder.textContent = `${character}`;
            }
        });
    };

/*
 * Checks if passed letter is in phrase
 * @param (string) letter - letter to check
 */
    checkLetter(letter) {      
        return this.phrase.includes(letter);
    };

/*
 * Displayed passed letter on screen after a match is found
 * @param (string) letter - letter to display
 */    
    showMatchedLetter(letter) {
        document.querySelectorAll(`.${letter}`).forEach((element) => {
            element.className = `show letter ${letter}`});
    };
}