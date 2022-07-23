'use strict';

const hints = document.querySelectorAll('.has-tooltip');
const tooltipDivNew = document.createElement('div');
tooltipDivNew.classList.add('tooltip');

for (const hint of hints) {
   hint.addEventListener('click', toggleHint);
}
let count = null;

function toggleHint(e) {
   e.preventDefault();
   const title = this.getAttribute('title');

   this.insertAdjacentElement('afterEnd', tooltipDivNew);

   const tooltipDiv = document.querySelector('.tooltip');
   tooltipDiv.textContent = title;

   const { left, bottom } = this.getBoundingClientRect();
   tooltipDiv.style.left = left + 'px';
   tooltipDiv.style.top = bottom + 'px';

   if (count === title) {
      count = null;

      tooltipDivNew.remove();

   } else if (e.target) {
      tooltipDiv.classList.add('tooltip_active');
      count = this.nextElementSibling.textContent;
   }
}