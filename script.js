// 'use strict';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = "Correct number!"

// document.querySelector('.number').textContent =  13;
// document.querySelector('.score').textContent =  20;
// document.querySelector('.guess').value =  23;
const secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;

document.querySelector('.number').textContent = secretNumber;
console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number 😫!'

    //When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct number!!!'
    document.querySelector('body').style.backgroundColor = 'green';
    //When number is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        'too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost you loser!';
      document.querySelector('.score').textContent = 0;
    }

    //When number is too low  
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low Low Low Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost you loser!';
      document.querySelector('.score').textContent = 0;
    }
  }
})