'use strict';

// handling click events
// using event listener

document.querySelector('.check').addEventListener('click', function () {
  console.log(document.querySelector('.guess').value);
});
