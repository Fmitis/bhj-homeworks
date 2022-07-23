'use strict';

const button = document.querySelector('.dropdown__value');
const dropDownList = document.querySelector('.dropdown__list');
const dropdownItems = Array.from(document.querySelectorAll('.dropdown__item'));

function onClick(event) {
   event.preventDefault();
   button.textContent = this.textContent;
   dropDownList.classList.remove('dropdown__list_active');
}

button.addEventListener('click', () => {
   dropDownList.classList.add('dropdown__list_active');
});

dropdownItems.forEach((item) => {
   item.addEventListener('click', onClick);
});