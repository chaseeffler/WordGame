// Make sure the JS file is linking correctly
console.log("It's connected");

//Creating a wordbank for the computer to choose from
var wordbank = ["luke","han","leia","vader","palpatine","empire", "rebels"];

//Creating the Arrays that will keep track of wins/losses/guesses
var wins = 0;
var losses = 0;
var guessed = [];
var emptyWord = [];



//creating my global variables
var gameWord = document.getElementById("gameword");
var inputText = document.getElementById("guessed");
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var remainingText = document.getElementById("remaining-guesses");





//Computer Guess
var computerChoice = wordbank[Math.floor(Math.random() * wordbank.length)];
var splits = computerChoice.split('');
var emptyWord = []
console.log(computerChoice);


gameWord.textContent = emptyWord;

//splitting the computerchoice into individual letters and making an array with that many _'s
for(var j = 0; j < splits.length; j++){
    emptyWord.push('_');
}



//Keyup Function
document.onkeyup = function(event){
    //for loop that verifies the user guess against the chosen word and adds wins
    for (var i = 0; i < computerChoice.length; i++){

        if(event.key === computerChoice[i].toLowerCase()){
            emptyWord[i] = event.key;
        }
        else {
            for(j = 0; j <= guessed.length; j++){
                if(event.key === computerChoice[i] && event.key === guessed[j]){
                }
                else if(event.key !== guessed[j]) {
                    guessed.push(event.key)
                }
            }
        }
    }

    //Putting the guessed letters in the "guessed" section
    
    //makes the userinput print into the webpage unless it's already there
    if(guessed.length === 9){
        guessed = [];
    }
 
    //adding wins
    if(splits === emptyWord){
        wins++;
    }
    //text content for the game
    inputText.textContent = "Your Guesses: " + guessed;
    winsText.textContent = "Wins: " + wins;
    gameWord.textContent = emptyWord;
} 


//function to reset the game
