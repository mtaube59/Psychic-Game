var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var lettersTried = [];
var remaingLetters = 10;

// // var winsText = document.getElementById("wins-text");
// var lossesText = document.getElementById("losses-text");

// Computer chooses a random letter from the array computerChoices
var computerLetter = computerChoices[Math.floor(Math.random()*computerChoices.length)];
console.log (computerLetter)
function reset(){
    var guessesLeftText = document.getElementById("left-text");
    var userGuessesText = document.getElementById("guesses-text");
    lettersTried = [];
    remaingLetters = 10;
    computerLetter = computerChoices[Math.floor(Math.random()*computerChoices.length)];
    console.log(computerLetter)
    guessesLeftText.textContent = "Guesses Left: " + remaingLetters;
    userGuessesText.textContent = "Your Guesses So Far: " + lettersTried;
}


document.onkeyup = function(event){
    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var guessesLeftText = document.getElementById("left-text");
    var userGuessesText = document.getElementById("guesses-text");
    //taking in user input
    console.log (winsText)
    var userGuess = event.key;
    console.log(userGuess);
    if (userGuess === "a" || userGuess === "b" || userGuess ==="c" || userGuess === "d" || userGuess ==="e" || userGuess ==="f" || userGuess === "g" || userGuess === "h" || userGuess === "i" || userGuess === "j"|| userGuess === "k" || userGuess === "l" || userGuess === "m" || userGuess ==="n"|| userGuess === "o"|| userGuess === "p"|| userGuess === "q"|| userGuess === "r" || userGuess === "s" || userGuess === "t" || userGuess === "u" || userGuess === "v" || userGuess === "w" || userGuess === "x" || userGuess === "y" || userGuess === "z") {
        // lettersTried.forEach (function (str) {
        //     console.log(str)
        //     if (userGuess === str) {
        //         return;
        //     }
        // })
            lettersTried.push(userGuess);
            userGuessesText.textContent = "Your Guesses So Far: " + lettersTried;
            console.log(lettersTried)
            if (remaingLetters > 0) {

            
                // chack to see if user guess equals computer letter
                if (userGuess !== computerLetter) {  
                
                    remaingLetters--;
                    guessesLeftText.textContent = "Guesses Left: " + remaingLetters;
                    console.log(remaingLetters)
                }
                // if not equal to computer letter then...
                else {
                    wins++
                    console.log("wins: " + wins)
                    winsText.textContent = "Wins: " + wins;
                    reset();
                

                // push letters into array letters tried
                }
            
            }
            else {
                losses++;
                console.log("losses: " + losses);
                lossesText.textContent = "Losses: "  + losses;
                reset()
            }

    }

}
//empty letter tried array, add to losses, reset remaining letters

// Framing it out //




// user inputs a letter key and it is checked against the computer's choice, if not the correct letter key the user selects other letter keys until he has exhausted all 10 tries which results in a loss being scored

//if the user input matches the Computer's random letter than the user is awarded a win 

//there should be an output of what letters have been guessed as the user goes along

//there is a counter that shows how many tries are left for the user before loss

//the results of wins and losses are visually represented on the html from javascript

// lossesText.textContent = "losses-text" + losses;
// 
