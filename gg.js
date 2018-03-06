var alphabet = 'abcdefghijklmnopqrstuvwxyz';

var computerGuess = alphabet.split('')[Math.floor(Math.random() * alphabet.length)];

var yourGuess = [];
var guesses = 0;
var wins = 0;
var losses = 0;

function resetGame(){
	guesses = 0;
	yourGuess = [];
	computerGuess = alphabet.split('')[Math.floor(Math.random() * alphabet.length)];
}

document.addEventListener('keydown', function(e) {
	if(alphabet.indexOf(e.key) > -1){
		if(yourGuess.indexOf(e.key) == -1){
			if(guesses < 9){
				guesses++;
				document.getElementById('guessCount').innerHTML = guesses;
				yourGuess.push(e.key);
				document.getElementById('all-of-your-guesses').innerHTML = yourGuess;
				document.getElementById('your-current-guess').innerHTML = e.key;
				if(e.key === computerGuess){
					wins++;
					document.getElementById('wins').innerHTML = wins;
					resetGame();
				}
			} else {
				losses++;
				document.getElementById('losses').innerHTML = losses;
				alert("You lose, the computers guess is " + computerGuess);
				resetGame();
			}
		} else {
			alert('You have already guessed that letter');
		}
	} else {
		alert("Please choose letter from alphabet")
	}
});