'use strict';

const menuLink = document.querySelectorAll('.menu__link'),
   subMenu = document.querySelectorAll('ul.menu_sub');

menuLink.forEach(function (link) {
   link.addEventListener('click', function (e) {
      subMenu.forEach(function (menuItem) {
         if (link.closest('li') === menuItem.closest('li')) {
            e.preventDefault();
            menuItem.classList.toggle('menu_active');
         }
      });
   });
});