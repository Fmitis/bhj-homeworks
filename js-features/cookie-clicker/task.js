'use strict';

const cookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');
const speedometer = document.getElementById('clicker__speed');
let count = 0;
let firstClick;
let secondClick;

function resizeAndCount() {
   secondClick === undefined ? secondClick = 0 : secondClick = firstClick;
   firstClick = new Date();
   cookie.width === 200 ? cookie.width = 220 : cookie.width = 200;
   speedometer.textContent = String((1 / (firstClick - secondClick) * 1000).toFixed(2));
   count++;
   counter.textContent = String(count);
}

cookie.onclick = resizeAndCount;