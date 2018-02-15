// requiring the Letter module exported from letter.js
var Letter = require("./letter.js");

// * **Word.js**: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:
function Word (array) {
  //   * An array of `new` Letter objects representing the letters of the underlying word
  this.letterObjectArray = [];
  // //   * A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.
  this.displayGameWord = function() {
    var displayString = "";
    for (var i = 0; i < this.letterObjectArray.length; i++) {
      displayString += this.letterObjectArray[i].guessedYet() + " ";
    }
    console.log(displayString);
  };

  //   * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)
  this.characterEvaluation = function () {
    var correctGuess = userGuess;
    for (var i = 0; i < this.letterObjectArray.length; i++) {
      if (this.letterObjectArray[i].userGuess == correctGuess) {
        this.letterObjectArray[i].letterWasGuessed();
      }
    };
  };

  //closes the Word constructor function
}

// exporting the Letter constructor
module.exports = Word;
