const prompt = require('prompt-sync')();


const guessingGame = (range) => {
  const random = Math.floor(Math.random() * range) + 1;
  const username = prompt("Please enter username: ");
  let point = 0;
  let number = parseInt(prompt(`Guess a number from 1 to ${range}:  `))


  if (random === number) {
    point = point + 1;
    console.log(`You guessed the correct number and you have been awarded ${point} point(s)`);
    console.log('You are now in the next stage')
    guessingGame(range + 1);
    point = point += 1;
  } else {
    console.log('Try again.')
  }
};

guessingGame(2);


