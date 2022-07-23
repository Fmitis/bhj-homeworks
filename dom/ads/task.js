'use strict';

function rotateAds() {
   const activeAd = document.querySelector('.rotator__case_active');
   const adsList = document.querySelector('.rotator');

   if (activeAd === adsList.lastElementChild) {
      adsList.firstElementChild.classList.add('rotator__case_active');
      adsList.lastElementChild.classList.remove('rotator__case_active');
   } else {
      activeAd.classList.remove('rotator__case_active');
      activeAd.nextElementSibling.classList.add('rotator__case_active');
   }
}

setInterval(rotateAds, 1000);