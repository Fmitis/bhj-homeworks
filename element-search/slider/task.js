'use strict';

const left = document.querySelector('.slider__arrow_prev');
const right = document.querySelector('.slider__arrow_next');
const sliderItems = Array.from(document.querySelectorAll('.slider__item'));

left.onclick = sliderLeft;
right.onclick = sliderRight;

function sliderRight() {
   let slideIndex = sliderItems.findIndex(
      (index) => index === document.querySelector('.slider__item_active')
   );
   sliderItems[slideIndex].classList.remove('slider__item_active');
   slideIndex + 1 >= sliderItems.length ?
      sliderItems[0].classList.add('slider__item_active') :
      sliderItems[slideIndex + 1].classList.add('slider__item_active');
}

function sliderLeft() {
   let slideIndex = sliderItems.findIndex(
      (index) => index === document.querySelector('.slider__item_active')
   );
   sliderItems[slideIndex].classList.remove('slider__item_active');

   slideIndex <= 0 ?
      sliderItems[sliderItems.length - 1].classList.add('slider__item_active') :
      sliderItems[slideIndex - 1].classList.add('slider__item_active');
}