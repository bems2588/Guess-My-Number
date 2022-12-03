// 'use strict';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = "Correct number!"

// document.querySelector('.number').textContent =  13;
// document.querySelector('.score').textContent =  20;
// document.querySelector('.guess').value =  23;
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No number 😫!'
    displayMessage('No number 😫!');
    //When player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct number!!!')
    // document.querySelector('.message').textContent = 'Correct number!!!'
    document.querySelector('.number').textContent = secretNumber;
    console.log(secretNumber);
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //When guess is wrong 

  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent = guess > secretNumber ? 'Too High!' : 'Too Low Low Low Low';
      displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low Low Low Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {

      displayMessage('You lost you loser!!!!')
      // document.querySelector('.message').textContent = 'You lost you loser!'
      document.querySelector('.score') = 0;
    }

  }
  //When number is too high
  //   } else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent =
  //         'too high!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost you loser!';
  //       document.querySelector('.score').textContent = 0;
  //     }

  //     //When number is too low  
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too Low Low Low Low';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost you loser!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
})

document.querySelector('.again').addEventListener('click', function () {

  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...')
  // document.querySelector('.message').textContent = "Start guessing...";
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

