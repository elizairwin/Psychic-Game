//below is my pseudocode

//define all variables for the game
//define alphabet choices and prompt a randomized pick
//have player select letter
//update counters (wins, losses, remaining guesses, letters guessed) during game
//go through the if/else scenarios
//push alerts throughout if/else scanarios
//declare win or loss
//reset game

//all variables are listed below
var wins = 0;
var losses = 0;
var remainingGuesses = 10;
var lettersGuessed = [];

//below is an array of choices available
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//below is how the computer will pick a letter and how it will be logged
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//below is how the user will pick a leter and how it will populate
document.onkeyup = function(event) {
    userGuess = event.key.toLowerCase();
    lettersGuessed.push(userGuess);
    remainingGuesses--;
    document.getElementById("letters-guessed").innerHTML = lettersGuessed
    document.getElementById("remaining-guesses").innerHTML = remainingGuesses

//if the player guesses the same as the computer, the below happens
    if ((userGuess === computerGuess) && (remainingGuesses > 0)) {
        alert("Way to go. You have ESP!");
        wins++;
        lettersGuessed.length = 0;
        document.getElementById("wins").innerHTML = wins //how wins are logged
        
    }
//if the player guesses different than the computer, the below happens
    if (userGuess !== computerGuess) {
        alert("Not a match!");
        losses++;
        document.getElementById("losses").innerHTML = losses //how losses are logged
    }   

//if the player has 0 chances left, the below happens
    if (remainingGuesses === 0) {
        alert("You're not a psychic!")
    }

//if the player loses 10 times, the below happens 
    if (losses === 10) {
        alert("And that's a wrap! 10 guesses and you're out.");
     
    }   
//if the player wins all 10 times he or she plays, the below happens
    if (wins === 10) {
        alert("10 times is a charm. You're super psychic!") //this would be rare :)
  
}

//reset function below 
    else if (remainingGuesses === 0) {
        location.reload("game");
    }

//i would like the error portion to be listed below
//i would like the error portion to include: non-alphabet guesses, repeat guesses
//will continue to work on this part
   // else (userGuess !== event.key); {
        // alert("Sorry, not a valid guess!")
//}

//below is tying back to the HTML
var eliza = "Wins: " + wins + "Losses: " + losses + "Guesses Left: " + remainingGuesses + "Your Guesses So Far: " + lettersGuessed;

}