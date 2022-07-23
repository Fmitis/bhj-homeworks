'use strict';

const tabs = Array.from(document.querySelectorAll('.tab'));
const tabContent = Array.from(document.querySelectorAll('.tab__content'));
const tabPanel = document.querySelector('.tabs');
let currentTabIndex = 0;

function showText(event) {
   event.preventDefault();
   let tabIndex = tabs.indexOf(event.target);
   tabs.forEach((tab) => {
      if (tab === event.target) {
         tab.classList.add('tab_active');
         tabContent[tabIndex].classList.add('tab__content_active');
         tabs[currentTabIndex].classList.remove('tab_active');
         tabContent[currentTabIndex].classList.remove('tab__content_active');
         currentTabIndex = tabIndex;
      }
   });
}

tabPanel.addEventListener('click', showText);