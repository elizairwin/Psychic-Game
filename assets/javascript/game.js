//variables are all listed below
var wins = 0;
var losses = 0;
var remainingGuesses = 10;
var lettersGuessed = [];
var computerGuess;

//below is an array of what the computer can guess
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//below is how the computer will pick a letter and how it will be logged
var newLetter = function() {
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    computerGuess.push(computerGuess);
    console.log(computerGuess[0]);
}
//below is how the player will pick a leter and how it will be logged
document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    lettersGuessed.push(userGuess);
    console.log(computerGuess);
}
//if the player guesses the same as the computer, the below happens
if (userGuess === computerGuess) {
    alert("Way to go. You have ESP!");
    wins++;
    lettersGuessed.lenth = 0; //resets their guessses since they won
    remainingGuesses = 10;
}
//if the player guesses different than the computer, the below happens
if (userGuess !== computerGuess) {
    alert("Not a match!");
    losses++;
    lettersGuessed.push(userGuess);
    remainingGuesses--;
}
//if the player has 0 chances left, the below happens
if (remainingGuesses === 0) {
    alert("You're not a psychic!")
    location.reload();
}
//if the player loses 10 times, the below happens 
else if (losses === 10) {
    alert("And that's a wrap! 10 guesses and you're out.");
    location.reload();
}
//if the player wins all 10 times he or she plays, the below happens
else if (wins === 10) {
    alert("10 times is a charm. You're super psychic!")
    location.reload();
}
//error portion below - i.e. the player doesn't push correct key
else {
    alert("Sorry, not a valid guess!")
}
var html = "<h1>The Psychic Game!</h1>" + "<p>Hi There! Guess What Letter I'm thinking of!</p>" + "<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>" + "<p>Guesses Left: " + remainingGuesses + "</p>" + "<p>Your Guesses So Far: " + userGuess.join(", ") + "</p>";
document.querySelector("#game").innerHTML = html;