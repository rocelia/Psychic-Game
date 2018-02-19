
        
        // Letter choices
        var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

        // Setting other variables

        var wins = 0;
        var losses = 0;
        var guessesLeft = 9;
        var guesses = 9;
        var lettersGuessed = [];
        var correctLetter = null;


        // Computer Selects a random Letter once page is opened

        var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log(computerGuess);
        
        // User only has only 9 guesses
        // shows number of guesses you have left (function)

        var updateGuessesLeft  = function () {
            document.querySelector('#guessesleft').innerHTML =  guessesLeft;
            console.log(updateGuessesLeft )
        };

        var updateLetterToGuess = function () {
            this.letterToGuess = this.computerGuess[Math.floor(Math.random() * this.alphabet.length)];
            console.log(updateLetterToGuess);
        };

        // Shows the letters user has guessed so far

        var currentGuesses = function () {
            document.querySelector('#currentguesses').innerHTML = lettersGuessed;

        };

        // reset everything back to zero if user guesses correctly or guesses left reaches 0

        var reset = function () {
            totalGuesses = 9;
            guessesLeft = 9;
            lettersGuessed = [];

            updateLetterToGuess();
            updateGuessesLeft ();
            currentGuesses();
        }

        updateLetterToGuess();
        updateGuessesLeft ();



        // user presses key to begin guessing
        document.onkeyup = function (event) {
            guessesLeft--;
            var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

            lettersGuessed.push(userGuess);
            updateGuessesLeft ();
            currentGuesses();
            // wins counter goes up if user guesses correctly

            // if (guessesLeft > 0) {
            if (userGuess == computerGuess) {
                wins++;
                console.log("You win");
                document.querySelector('#wincounter').innerHTML = wins;
                reset();
            }

            // losses counter goes up if user guesses incorrectly

            if (guessesLeft == 0) {
                losses++;
                console.log("you lose");
                document.querySelector('#losscounter').innerHTML =  losses;
                reset();
            }
        }