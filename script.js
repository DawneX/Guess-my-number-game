'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayContent = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When guess has no number
  if (!guess) {
    displayContent('No Number !');
  }

  // When the guess is correct
  else if (guess === secretNumber) {
    displayContent('The Number is correct');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'rgb(71, 117, 255)';
    document.querySelector('.number').style.width = '40rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  //  When the guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayContent(
        guess > secretNumber
          ? 'The Number is too high'
          : 'The Number is too low'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});


document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.guess').value = '';
  displayContent('Start guessing');
  document.querySelector('.number').textContent = '?';

  document.querySelector('.score').textContent = score;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
