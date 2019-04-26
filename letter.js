

var Letter = function(keyLetter) {
    this.letter = keyLetter;
    this.appear = false;

    this.letterShow = function() {
        if (this.letter == " ") {
            this.appear = true;
            return " ";
        }
        if (this.appear === false) {
            return "_";
        }
        else {
            return this.letter;
        }
    };
};

module.exports = Letter;