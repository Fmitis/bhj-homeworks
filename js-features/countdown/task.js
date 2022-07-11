'use strict';

const timer = document.getElementById('timer');
let count = Number(timer.textContent);

function setTimer() {
   if (count === 0) {
      clearInterval(interval);
      alert('Вы выиграли!');
   } else {
      count -= 1;
      timer.textContent = count;
   }
}

const interval = setInterval(setTimer, 1000);