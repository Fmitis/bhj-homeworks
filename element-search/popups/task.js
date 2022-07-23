'use strict';

const modal = document.getElementById('modal_main'),
   modalSuccess = document.getElementById('modal_success'),
   closeButton = document.querySelectorAll('.modal__close');

function showModal() {
   modal.classList.add('modal_active');
}

window.onload = showModal;

closeButton.forEach(function (button) {
   button.addEventListener('click', function () {
      if (button.classList.contains('show-success')) {
         modalSuccess.classList.add('modal_active');
         modal.classList.remove('modal_active');
      } else {
         modal.classList.remove('modal_active');
         modalSuccess.classList.remove('modal_active');
      }
   });
});