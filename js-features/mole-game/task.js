'use strict';

const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

let deadCount = Number(dead.textContent);
let lostCount = Number(lost.textContent);

function playAgain() {
   deadCount = 0;
   dead.textContent = deadCount;
   lostCount = 0;
   lost.textContent = lostCount;
}

const allHoles = document.querySelectorAll('.hole');

for (let i = 1; i < allHoles.length - 1; i++) {
   const hole = document.getElementById('hole' + i);
   hole.onclick = function () {
      if (hole.classList.contains('hole_has-mole')) {
         deadCount += 1;
         dead.textContent = deadCount;
      } else {
         lostCount += 1;
         lost.textContent = lostCount;
      }

      if (deadCount >= 10) {
         alert('Вы выиграли!');
         playAgain();
      }

      if (lostCount >= 5) {
         alert('Вы проиграли...');
         playAgain();
      }
   };
}