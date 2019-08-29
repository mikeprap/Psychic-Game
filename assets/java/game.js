// create vaiable to store my values, Wins, Loses, UserGuess, Computer Guess, Computer choice
var wins = 0;
var loses = 0;
var guessLeft = 9
var guessSoFar = [];
var userGuess;
var computerGuess;
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var displayText = "Are you Psychic....Click any letter to start the game!!!";
// create function to display the results to the page
function updateDisplay() {
    document.querySelector("#displayText").innerHTML = displayText;
    document.querySelector("#wins").innerHTML = wins;
    document.querySelector("#loses").innerHTML = loses;
    document.querySelector("#guessLeft").innerHTML = guessLeft;
    document.querySelector("#guessSoFar").innerHTML = guessSoFar;
};
updateDisplay();

// create a function to generate a random letter for computer guess
function computerRandomLetter() {
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

// create an function to reset scores
function resetScores() {
    var guessSoFar = [];
    var guessLeft = 9;
}
computerRandomLetter()
console.log(computerGuess)
// create onkey up event function to grab userGuess

document.onkeyup = function (event) {
    userGuess = event.key;
    console.log(userGuess);
    var userGuess = event.key.toLowerCase();


    if (userGuess === computerGuess) {
        wins++;
        guessSoFar = [];
        guessLeft = 9;
        computerRandomLetter();
        console.log(computerGuess)

    }
    else if (userGuess != computerGuess) {
        guessLeft--;
        guessSoFar.push(userGuess)
        document.querySelector("#guessSoFar").innerHTML = guessSoFar;
    }
    if (guessLeft === 0) {

        guessLeft = 9;
        loses++;
        guessSoFar = [];

    }
    updateDisplay();
}