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
function startGame() {
	selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
	lettersinWord = selectedWord.split("");
	numBlanks = lettersinWord.length;

	//Reset
	guessesLeft = 9;
	wrongLetters = [];
	blanksAndSucesses = [];

	for (var i=0; i<numBlanks; i++){
		blanksAndSucesses.push("_");
	}

	//Change HTML to reflect round conditions
	document.getElementbyID("wordToGuess").innerHTML = blanksAndSucesses.join(" ");
	document.getElementbyID("numGuesses").innerHTML = guessesLeft;
	document.getElementbyID("winCounter").innerHTML = winCount;
	document.getElementbyID("lossCounter").innerHTML = lossCount;

	//Testing / Debugging
	console.log(selectedWord);
	console.log(lettersinWord);
	console.log(numBlanks);
	console.log(blanksAndSucesses);

}

function checkLetter(letter) {
	//Check if letter exists in code at all
	var isLetterInWord = false;
	for (var i=0; i<numBlanks; i++) {
		if(selectedWord[i] == letter){
			isLetterInWord = true;
		}
	}
	// Check where in word letter exists, the populate out blanksAndSuccesses array
	if(isLetterInWord) {
		for (var i = 0; i<numBlanks; i++) {
			if(selectedWord[i] == letter) {
				blanksAndSuccesses[i] = letter;
		}
	}
}

//letter wasn't foound
else {
	wrongLetters.push(letter);
	guessesLeft--;
}

function roundComplete(){
	console.log("Win Count:" + winCount + "| lossCount:" + lossCount + "| Guesses Left" + numGuesses);
	
	//Update the HTML to reflect the most recent count stats
	document.getElementbyID("numGuesses").innerHTML = guessesLeft;
	document.getElementbyID("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
	document.getElementbyID("wrongGuesses").innerHTML = wrongLetters.join(" ");
	// Check if User won
	if (lettersinWord.toString() == blanksAndSuccesses.toString()) {
		winCount++;
		alert("you won!");

		//update the win counter in the HTML
		document.getElementbyID("winCounter").innerHTML = winCount;

		startGame();
	}
	// Check if user lost
	else if (guessesLeft == 0){
		lossCount++;
		alert("You Lost!");

		//Update the HTML
		document.getElementbyID("lossCounter").innerHTML = lossCount;

		startGame();
	}
}

// MAIN PROCESS
//Initiates the code the first time
startGame();

//Register keyclicks

document.onkeyup = function(event) {
	var letterGuessed = String.fromCharCode(event.keycode).toLowerCase();
	checkLetter(letterGuessed);
	roundComplete;
};
