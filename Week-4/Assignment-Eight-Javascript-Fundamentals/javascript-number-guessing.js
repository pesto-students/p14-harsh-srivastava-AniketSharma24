function playGuessingGame(numToGuess, totalGuesses = 10) {
  if (isNaN(numToGuess)) {
    return 0;
  }

  let guesses = 0;
  let promptText = "Enter a number between 1 and 100.";
  while (guesses < totalGuesses) {
    // Take the entered user input
    const userGuess = parseInt(prompt(promptText), 10);
    if (userGuess === null || isNaN(userGuess)) {
      return 0;
    }

    // Increase guess count
    guesses++;

    if (userGuess === numToGuess) {
      return guesses;
    }

    // Replace the text as per the input
    if (guesses > 0) {
      const previousGuess = userGuess;
      if (previousGuess === null || isNaN(previousGuess)) {
        return 0;
      } else if (previousGuess < numToGuess) {
        promptText = `${previousGuess} is too small. Guess a larger number.`;
      } else if (previousGuess > numToGuess) {
        promptText = `${previousGuess} is too large. Guess a smaller number.`;
      }
    }
  }

  return 0; // Reset the guesses if the total number of guesses is reached
}

playGuessingGame(3, 3);
