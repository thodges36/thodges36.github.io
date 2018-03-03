// Arrays for the words user guesses
var westWords = ["cowboy", "rustler", "cattle", "varmint", "bronco", "spurs", "sheriff", "bandit", "greenhorn", "maverick"];
// variable to be held 
var currentWord = "";
// empty for current word
var currWrdLtrs = [];
// the blanks (_ _ _ etc.)
var numBlanks = 0;
// Guesses displays for the user
var answerDisplay = [];
// wrong guesses, and display to userGuess
var wrongLtrs = [];
//wins
var wins = 0;
//remaining guesses
var guessesLeft = 9;

// FUNTIONS

//Starts a new game
function newGame() {

    //Computer selects a word
    currentWord = westWords[Math.floor(Math.random() * westWords.length)];
    console.log("The current word chosen is: " + currentWord);

    //For each individual letter
    currWrdLtrs = currentWord.split("");
    console.log("The current word's letters are: " + currWrdLtrs);

    //Get the number of letters
    numBlanks = currWrdLtrs.length;
    console.log("The number of letters in the current word is: " + numBlanks);

    //Reset game
    guessesLeft = 9;
    wrongLtrs = [];
    answerDisplay = [];

    //Add the number of blanks to the answerDisplay
    for (i = 0; i < numBlanks; i++) {
        answerDisplay.push("_");
        console.log(answerDisplay);
    }

    //Display current information
    document.getElementById("theWord").innerHTML = answerDisplay.join(" ");
    document.getElementById("remGuesses").innerHTML = "Number of Guesses Remaining: " + " " + guessesLeft;
    document.getElementById("wins").innerHTML = "Wins: " + " " + wins;

}

function checkLtrs(letter) {

    //Check if the letter pressed is letter
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        //Check if the letter guessed is one of the letters in the word
        var correctLetter = false;

        for (var i = 0; i < numBlanks; i++) {
            if (currentWord[i] == letter) {
                correctLetter = true;
            }
        }

        //Check where the correct letter is located on the word
        if (correctLetter) {
            for (var i = 0; i < numBlanks; i++) {
                if (currentWord[i] == letter) {
                    answerDisplay[i] = letter;
                }
            }
        }

        //If the letter isn't part of the word
        else {
            wrongLtrs.push(letter);
            guessesLeft--
        }
        console.log(answerDisplay);

    } else { //If user input is not a letter from the alphabet
        alert("Select a letter from the alphabet (a to z)");
    }
}

function roundComplete() {

    //Update HTML with Game Stats
    document.getElementById("remGuesses").innerHTML = "Number of Guesses Remaining: " + " " + guessesLeft;
    document.getElementById("theWord").innerHTML = answerDisplay.join(" ");
    document.getElementById("guessedLetters").innerHTML = "Letters Already Guessed:" + " " + wrongLtrs.join(" ");


    //Check if the user won
    if (currWrdLtrs.toString() == answerDisplay.toString()) {
        wins++;
        alert("Congratulations! You spelled '" + currentWord + "' correctly.");
        console.log("win!");

        // Update the wins in the HTML doc
        document.getElementById("wins").innerHTML = "Wins: " + " " + wins;

        //Start New Game and clear letters already guessed
        newGame();
        document.getElementById("guessedLetters").innerHTML = "Letters Already Guessed:" + " " + " ";

    } else if (guessesLeft == 0) {

        alert("You Lost! The correct word was '" + currentWord + "'.")
        console.log("You Lost!");


        //Start New Game
        newGame();
        document.getElementById("guessedLetters").innerHTML = "Letters Already Guessed:" + " " + " ";

    }
}


//Call function to start the game for the first time
newGame();

//Get input from user on what keys are being pressed
document.onkeyup = function (event) {
    //Create a variable to hold all the letters that have been guessed
    var ltrsGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    console.log("You Guessed the letter: " + ltrsGuessed); // Testing via Console.Log

    //Run the check letters function
    checkLtrs(ltrsGuessed);
    roundComplete();


}


