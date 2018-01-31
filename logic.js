//GLOBAL VARIABLES
// Arrays and Variables for holding data
var wordOptions = ["jeremiah", "nenna", "darion", "adam", "jerome", "lou", "greg"];
var selecedWord = "";
var lettersinWord = [];
var numBlanks = 0;
var blanksAndSucesses = [];
var wrongLetters = [];

//Game Counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;

// FUNCTIONS
function startGame(){
	selecedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
	console.log(selecedWord);

	lettersinWord = selecedWord.split("");
	console.log(lettersinWord);

	numBlanks = lettersinWord.length;
	console.log(numBlanks);

	//RESET
	guessesLeft = 9;
	wrongLetters = [];
	blanksAndSucesses = [];

	for (var i = 0; i < numBlanks; i++){
		blanksAndSucesses.push("_");
		console.log(blanksAndSucesses);
	}
	//Update HTML
	document.getElementById("wordToGuess").innerHTML = blanksAndSucesses.join(" ");
	document.getElementById("numGuesses").innerHTML = guessesLeft;
	document.getElementById("winCounter").innerHTML = winCount;
	document.getElementById("lossCounter").innerHTML = lossCount;
};

function checkLetter(letter){
	var isLetterInWord = false;
	for (var i = 0; i < numBlanks; i++){
		if(selecedWord[i] == letter){
			isLetterInWord = true;
		}
	}
	if(isLetterInWord){
		for (var i = 0; i < numBlanks; i++){
			if(selecedWord[i] == letter){
				blanksAndSucesses[i] = letter;
			}
		}
	} else {
		wrongLetters.push(letter);
		guessesLeft--;
	}
};

function roundComplete(){
	console.log("Win Count:" + winCount + "| lossCount:" + lossCount + "| Guesses Left" + numGuesses);

	document.getElementById("numGuesses").innerHTML = guessesLeft;
	document.getElementById("wordToGuess").innerHTML = blanksAndSucesses.join(" ");
	document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");

	if (lettersinWord.toString() == blanksAndSucesses.toString()){
		winCount++;
		alert("You Won!");

		//Update in HTML Win Count
		document.getElementById("winCounter").innerHTML = winCount;
		startGame();
	} else if (guessesLeft == 0){
		lossCount++;
		alert("You Lost!");
		document.getElementById("lossCounter").innerHTML = lossCount;
		startGame();
	}
};

// MAIN PROCESS
//Initiates the code the first time
startGame();

//Register keyclicks

document.onkeyup = function(event) {
	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	console.log(letterGuessed);
	checkLetter(letterGuessed);
	roundComplete();
};
