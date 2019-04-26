
var Letter = require("letter.js");

function Word (keyWord) {
    var selectedWord = this;
    this.word = keyWord;
    this.wordLetters = [];
    this.wordGuessed = false;

    this.getLetters = function() {
        for (var i = 0; i < selectedWord.word.length; i++) {
            var newLetter = new Letter(selectedWord.word[i]);
            this.wordLetters.push(newLetter);
        }
    };

    this.guessedCorrectWord = function() {
        if (this.wordLetters.every(function(correctLetter) {
            return correctLetter.appear === true;
        }))
        {
            this.wordGuessed = true;
            return true;
        }
    }


    this.wasLetterFound = function(guessedLetter) {
        var letterToShow = 0;
        this.wordLetters.forEach(function(correctLetter) {
            if (correctLetter.letter === guessedLetter) {
                guessedLetter.appear = true;
                letterToShow++;
            }
        })
        return letterToShow;
    };

    this.wordShow = function() {
        var display = "";
        selectedWord.wordLetters.forEach(function(correctLetter) {
            var currentLetter = correctLetter.letterShow();
            display += currentLetter;
        });

        return display;
    };
}

module.exports = Word;