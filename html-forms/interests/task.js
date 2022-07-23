'use strict';

const interestsActive = document.querySelectorAll('.interests_active');

for (const interest of interestsActive) {
   const input = interest.closest('li').querySelector('input');
   input.addEventListener('change', (e) => {
      const inner = interest.querySelectorAll('input');
      for (const item of inner) {
         input.checked === true ? item.checked = true : item.checked = false;
      }
   });
}