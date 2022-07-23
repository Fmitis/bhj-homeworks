'use strict';

function onScroll() {
   function isInViewport(element) {
      const viewportHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;

      elementTop < viewportHeight ?
         element.classList.add('reveal_active') :
         element.classList.remove('reveal_active');

      if (elementBottom <= 0) {
         element.classList.remove('reveal_active');
      }
   }

   const reveals = document.querySelectorAll('.reveal');

   for (const item of reveals) {
      isInViewport(item);
   }
}

window.addEventListener('scroll', onScroll);