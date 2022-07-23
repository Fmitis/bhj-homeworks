'use strict';

const chatActive = document.querySelector('.chat-widget');
const chatInput = document.querySelector('.chat-widget__input');
const messages = document.querySelector('.chat-widget__messages');

chatActive.addEventListener('click', openChat);

function openChat(event) {
   event.preventDefault();

   chatActive.classList.add('chat-widget_active');
}

chatInput.addEventListener('keyup', sendMessage);

function sendMessage(e) {

   if (e.key === 'Enter' && chatInput.value !== '') {
      messages.innerHTML += `
      <div class="message message_client">
            <div class="message__time">${nowTime()}</div>
            <div class="message__text">${chatInput.value}</div>
      </div>
      `;

      messages.innerHTML += `
      <div class="message">
            <div class="message__time">${nowTime()}</div>
            <div class="message__text">${botMessage()}</div>
      </div>
      `;

      console.log(messages.lastChild);

      chatInput.value = '';
   }
}

function botMessage() {
   const messagesArr = [
      'А ты смешной))',
      'Ты кто такой? Давай, до свидания!',
      'Все операторы заняты с такими же как ты...',
      'Вас много, а я тут одна.',
      'У меня перерыв на обед. Пиши завтра, а лучше в понедельник...',
      'Ой, всё!((',
   ];

   let rand = Math.floor(Math.random() * messagesArr.length);
   return messagesArr[rand];
}

function nowTime() {
   const nowDate = new Date();
   const nowHours = nowDate.getHours() < 10 ? `0${nowDate.getHours()}` : `${nowDate.getHours()}`;
   const nowMinutes = nowDate.getMinutes() < 10 ? `0${nowDate.getMinutes()}` : `${nowDate.getMinutes()}`;
   const nowSeconds = nowDate.getSeconds() < 10 ? `0${nowDate.getSeconds()}` : `${nowDate.getSeconds()}`;
   return `${nowHours}:${nowMinutes}:${nowSeconds}`;
}