function generateLetter() {
    letters = 'abcdefghijklmnopqrstuvwxyz';
    var letterPosition = Math.floor(Math.random() * letters.length);
    var letter =  letters.charAt(letterPosition);
    console.log("generating a new letter: ", letter);
    return letter;
}

function game() {
    var winCountElement = document.getElementById('winCount');
    var loseCountElement = document.getElementById('loseCount');
    var guessLeftElment = document.getElementById('guessLeft');
    var guessSoFarElement = document.getElementById('guessSoFar');
    //initialize the win count to 0, and lost cout to 0, and guess left is 9
    var winCount = 0;
    var loseCount = 0;
    var guessLeft = 9;

    // put the counter values to DOM Elements.
    winCountElement.textContent = winCount;
    loseCountElement.textContent = loseCount;
    guessLeftElment.textContent = guessLeft;

    // generate a letter from A to Z
    var letter = generateLetter();

    // provide the player with a way to guess what the letter is 
    document.onkeydown = function(event) {
        var guessLetter = event.key; // the player's guess
        console.log('keydown event\n\n' + 'key: ' + guessLetter);

        // Once a guess has been submitted first record it somewhere so the user can see their previous guesses.
        if (guessSoFarElement.textContent === '') {
            guessSoFarElement.textContent = guessLetter;
        } else {
            guessSoFarElement.textContent += ", " + guessLetter;
        }

        // Next, check whether it is the correct letter.

        if (guessLetter === letter) {
            //  if it is correct
            winCount += 1;
            guessLeft = 9;
            guessSoFarElement.textContent = '';
            letter = generateLetter();
        } else if (guessLeft > 0) {
            // If it is wrong and the player has guess left:
            guessLeft -= 1;
        } else if (guessLeft === 0) {
            // If it is wrong and the player has no guess left:
            loseCount += 1;
            guessLeft = 9;
            guessSoFarElement.textContent = '';
            letter = generateLetter();
        }

        winCountElement.textContent = winCount;
        loseCountElement.textContent = loseCount;
        guessLeftElment.textContent = guessLeft;
    };
}

game();