// Make sure the JS file is linking correctly
console.log("It's connected");

//Creating a wordbank for the computer to choose from
var wordbank = ["luke","han","leia","vader","palpatine","empire", "rebels"];

//Creating the Arrays that will keep track of wins/losses/guesses
var wins = 0;
var losses = 0;
var guess = 9;
var guessed = [];
var emptyWord = [];
var inWord = true;
var letter = 0;



//creating my global variables
var gameWord = document.getElementById("gameword");
var inputText = document.getElementById("guessed");
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var remainingText = document.getElementById("remaining-guesses");
var computerChoice = 0;
var splits = [];



//Computer Guess function
function startGame(){
splits = [];
emptyWord = [];
computerChoice = 0;
guess = 9;
guessed = [];
inWord = true;
computerChoice = wordbank[Math.floor(Math.random() * wordbank.length)];
splits = computerChoice.split('');
    for (var j = 0; j < splits.length; j++){
    emptyWord.push('_');
    }
//text content for the game
inputText.textContent = "Your Guesses: " + guessed;
winsText.textContent = "Wins: " + wins;
lossesText.textContent = "Losses: " + losses;
gameWord.textContent = emptyWord;
remainingText.textContent = "Guesses Left: " + guess;
console.log(computerChoice);
}

startGame()



//splitting the computerchoice into individual letters and making an array with that many _'s



//Keyup Function
document.onkeyup = function(event){

    //for loop that verifies the user guess against the chosen word and adds wins
    for (var i = 0; i < computerChoice.length; i++){

        if(event.key === computerChoice[i].toLowerCase()){
            emptyWord[i] = event.key;
        }
        else if(event.key !== computerChoice[i].toLowerCase()) {
            inWord = false;
        }
    }

    if (inWord === false){
        guessed.push(event.key);
        guess--;
    }


    console.log(emptyWord);
    console.log(splits);
    console.log(guessed);

inputText.textContent = "Your Guesses: " + guessed;
winsText.textContent = "Wins: " + wins;
lossesText.textContent = "Losses: " + losses;
gameWord.textContent = emptyWord;
remainingText.textContent = "Guesses Left: " + guess;

//for loop for restarting the game if user runs out of guesses
for (var k = 0; k <= guessed.length; k++){
    if(guess === 0){
        losses++;
        alert("You Lost!");
        startGame()
    }
    }


//adding wins
if(splits.toString() === emptyWord.toString()){
    wins++;
    alert("You Won!");
    startGame();
}
}


//function to reset the game
