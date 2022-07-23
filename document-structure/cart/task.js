'use strict';

const products = document.querySelectorAll('.product');
const cartProducts = document.querySelector('.cart__products');

for (const product of products) {
   product.addEventListener('click', changeProductQuantity);
}

function changeProductQuantity(e) {
   const decButton = this.querySelector('.product__quantity-control_dec');
   const incButton = this.querySelector('.product__quantity-control_inc');
   const productQuantityValue = this.querySelector('.product__quantity-value');

   if (e.target === decButton) {
      productQuantityValue.innerHTML--;
      if (productQuantityValue.innerHTML <= 1) {
         productQuantityValue.innerHTML = '1';
      }
   } else if (e.target === incButton) {
      productQuantityValue.innerHTML++;
   }

   const addButton = this.querySelector('.product__add');
   const productId = this.dataset.id;
   const imgProduct =
      this.querySelector('.product__image').getAttribute('src');

   if (e.target === addButton) {
      const cartProductId = cartProducts.querySelectorAll('.cart__product');

      for (const item of cartProductId) {
         let count;

         if (cartProductId.length !== 0) {
            const productCount = item.querySelector('.cart__product-count');

            if (item.dataset.id === productId) {
               productCount.innerHTML =
                  +productQuantityValue.innerHTML + +productCount.innerHTML;
               count = item;
               cartProductId.replaceChild(item, count);
            }
         }
      }

      cartProducts.insertAdjacentHTML(
         'beforeEnd',
         `<div class="cart__product" data-id="${productId}">` +
         `<img class="cart__product-image" src="${imgProduct}">` +
         `<div class="cart__product-count">${productQuantityValue.innerHTML}</div>` +
         `</div>`
      ); //карточка товара
   }
}