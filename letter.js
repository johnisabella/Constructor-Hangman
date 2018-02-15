// * **Letter.js**: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter.
function Letter (userGuess, guessed) {
//   * A string value to store the underlying character for the letter
  this.userGuess = userGuess;
//   * A boolean value that stores whether that letter has been guessed yet
  this.guessed = guessed;

//   * A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed (this is for the game screen display)
  this.guessedYet = function() {
    if (this.guessed == true) {
      return this.userGuess;
    } else {
    return "_"
  }
  };

//   * A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
  this.letterWasGuessed = function() {
    this.guessed = true;
  };

//closes the Letter constructor function
}

// exporting the Letter constructor
module.exports = Letter;
