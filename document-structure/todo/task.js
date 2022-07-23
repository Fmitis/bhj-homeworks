'use strict';

const tasksControl = document.querySelector('.tasks__control');
const tasksInput = document.querySelector('.tasks__input');
const btnTasksAdd = document.querySelector('.tasks__add');
const tasksList = document.querySelector('.tasks__list');

tasksControl.addEventListener('click', addedTask);

tasksControl.addEventListener('keyup', addedTask);

function addedTask(e) {
   e.preventDefault();

   if (
      (e.key === 'Enter' && tasksInput.value.trim() !== '') ||
      (e.target === btnTasksAdd && tasksInput.value.trim() !== '')
   ) {
      tasksList.insertAdjacentHTML(
         'afterBegin',
         '<div class="task"><div class="task__title"></div><a href="#" class="task__remove">&times;</a></div>'
      );

      const taskTitle = document.querySelector('.task__title');
      taskTitle.textContent = tasksInput.value;
      tasksControl.reset();
   }
}

tasksList.addEventListener('click', deletedTask);

function deletedTask(e) {
   e.preventDefault();

   const taskRemoves = document.querySelectorAll('.task__remove');
   const task = e.target.closest('.task');

   for (const item of taskRemoves) {
      if (e.target === item) {
         task.remove();
      }
   }
}