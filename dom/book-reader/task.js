'use strict';

function changeFontSize(event) {
   event.preventDefault();
   const book = this.closest('.book');
   const count = book.querySelector('.font-size_active');

   if (!event.target.matches('.font-size_active')) {
      this.classList.add('font-size_active');
      count.classList.remove('font-size_active');
   }

   if (this.dataset.size === 'small') {
      book.className = 'book book_fs-small';
   } else if (this.dataset.size === 'big') {
      book.className = 'book book_fs-big';
   } else {
      book.className = 'book';
   }
}

const fontSizeButtons = document.querySelectorAll('.font-size');

for (const button of fontSizeButtons) {
   button.addEventListener('click', changeFontSize);
}