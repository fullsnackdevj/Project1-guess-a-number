'use strict';

//DOM MANIPULATION

// console.log(document.querySelector('.message').textContent);
// // selecting class and texts elements in HTML PAGE

// document.querySelector('.message').textContent = 'Correct Number!';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 23;

// // --

// classes:

// again,
// number,
// guess,
// message,
// score,
// highscore

// */

// initial value of score to compare
// initial state of highscore

// const secretNumber =
//   Math.trunc(Math.random(document.querySelector('.number') * 20)) + 1;

// const tryAgain = function () {
//   const secretNumber = Math.floor(Math.random() * 20) + 1;
//   document.querySelector('.number').textContent = secretNumber;

//   let score = 20;
//   document.querySelector('.number').textContent = '?';

//   document.querySelector('.message').textContent = 'Start guessing...';
// };

let secretNumber = Math.floor(Math.random() * 20) + 1;

// const tryAgain = function () {
//   location.reload();
// };

let highscore = 0;
let score = 20;

const displayMsg = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '❌ No Number!';
  } else if (guess === secretNumber) {
    displayMsg('✅ Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    // setting up new highScore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // if guess is too high
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMsg(guess > secretNumber ? '📈 too High!' : '📉 too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMsg('📈 Game Over, You Lose!');
      score--;
      document.querySelector('.score').textContent = 0;
    }
  }
});

// trying again event

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  score = 20;

  displayMsg('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
});
