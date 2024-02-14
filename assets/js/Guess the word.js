const Master = {
    secretWord: "", // Replace with the actual secret word
  
    guess: function(word) {
      // Replace this with your actual implementation
      // It should return -1 if word is not in words,
      // or an integer representing the number of exact matches
      if (word === this.secretWord) {
        return 10;
      } else {
        return -1;
      }
    }
  };
  
  function guessSecretWord(words, allowedGuesses) {
    const wordList = words.slice();
    const remainingGuesses = allowedGuesses;
  
    function submitGuess() {
      const guessInput = document.getElementById('guessInput');
      const userGuess = guessInput.value.trim().toLowerCase();
  
      if (userGuess.length !== 6 || !/^[a-z]+$/.test(userGuess)) {
        displayOutput("Please enter a valid 6-letter word.");
        return;
      }
  
      const matches = Master.guess(userGuess);
  
      if (matches === 6) {
        displayOutput("You guessed the secret word correctly.");
      } else {
        displayOutput(`Your guess "${userGuess}" had ${matches} matches.`);
        makeGuess();
      }
    }
  
    function makeGuess() {
      if (remainingGuesses <= 0) {
        displayOutput("Either you took too many guesses, or you did not find the secret word.");
        return;
      }
  
      // Replace this with your Minimax algorithm or any other efficient guessing strategy
      const guessedWord = wordList[Math.floor(Math.random() * wordList.length)];
      const matches = Master.guess(guessedWord);
  
      remainingGuesses--;
  
      displayOutput(`Computer's guess "${guessedWord}" had ${matches} matches. Remaining guesses: ${remainingGuesses}`);
    }
  
    window.submitGuess = submitGuess;
  }
  
  function displayOutput(message) {
    const outputElement = document.getElementById('output');
    const p = document.createElement('p');
    p.textContent = message;
    outputElement.appendChild(p);
  }
  
  // Example usage
  const wordList = ["acckzz", "ccbazz", "eiowzz", "abcczz"];
  const allowedGuesses = 10;
  
  guessSecretWord(wordList, allowedGuesses);
  