// * **index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:
// requiring the Letter module exported from letter.js
var Word = require("./word.js");
// requiring the Letter module exported from letter.js
var Letter = require("./letter.js");
//requiring the inquirer module (will eventually move to index page)
var inquirer = require("inquirer");

var gameWordBank = ["warrior", "salutation", "pigeon", "camel", "bridge", "wheel", "lizard", "chair", "cobra", "puppy", "rabbit", "tree", "lotus", "triangle", "headstand"]
//global variables for the game (that are reset upon the start of a new game)
var gameWordLetterArray = [];
var guessedLetterArray = [];

//Game logic
//   * Randomly selects a word and uses the `Word` constructor to store it
var newGame = function() {
  // randomly select a word from an array of words
  var gameWord = gameWordBank[Math.floor(Math.random() * gameWordBank.length)];
  //remove the console.log below before submitting.
  // console.log(gameWord);
  // create a newWord object using the Word constructor function
  newWord = new Word (gameWord);
  // generate an array for the letters in the gameword, which will be used in the logic to determine what happens with each user guess.
  for (var i = 0; i < gameWord.length; i++) {
    var character = gameWord.charAt(i);
    gameWordLetterArray.push(character);
    // generate letter objects for each letter in the game word
    var arrayLetterObjects = new Letter (character, false);
    newWord.letterObjectArray.push(arrayLetterObjects);
  }
  // console.log(newWord.letterObjectArray);
  newWord.displayGameWord();
  askQuestion();
};

//check to see if game has been won
var gameWinCheck = function () {
  var guessedArray = [];
  for (var i = 0; i < newWord.letterObjectArray.length; i++) {
    guessedArray.push(newWord.letterObjectArray[i].guessed);
  }
    if (guessedArray.includes(false)) {
      askQuestion();
      } else {
      console.log("\nCongratulations! You guessed the word and win the game!");
      newGame();
    }
};

//user will start with 10 guesses.
var guessCount = 10;

//Prompts the user for each guess and keeps track of the user's remaining guesses
var askQuestion = function() {

  if (guessCount == 0) {
    console.log ("Sorry, you're out of guesses. Game over.");
    newGame();

  } else {
    //game prompt
    inquirer.prompt([
      {
        name: "letter",
        message: "Guess a letter!"
      }

    ]).then(function(answers) {
      userGuess = answers.letter;

      if (guessedLetterArray.includes(answers.letter.toLowerCase())) {
        console.log ("You have already guessed " + answers.letter.toLowerCase());
        guessCount--;
        console.log("\nYou have " + guessCount + " guesses remaining.");
        console.log("\nYour guesses so far: " + guessedLetterArray + "\n");
        newWord.displayGameWord();
        askQuestion();

      } else if (gameWordLetterArray.includes(answers.letter.toLowerCase())) {
        guessedLetterArray.push(answers.letter.toLowerCase());
        console.log ("Good job! " + answers.letter + " is a correct guess.");
        newWord.characterEvaluation();
        console.log("\nYou have " + guessCount + " guesses remaining.");
        console.log("\nYour guesses so far: " + guessedLetterArray + "\n");
        newWord.displayGameWord();
        gameWinCheck();
        // askQuestion();

      } else {
        guessCount--;
        guessedLetterArray.push(answers.letter.toLowerCase());
        console.log (answers.letter + " is an incorrect guess.")
        console.log("\nYou have " + guessCount + " guesses remaining.");
        console.log("\nYour guesses so far: " + guessedLetterArray + "\n");
        newWord.displayGameWord();
        askQuestion();
      }
    });
  };
};

//initial call of the newgame function to start the game.
newGame();
