'use strict';

document.querySelectorAll('.file__date').forEach((item) => {
  item.addEventListener('click', () => {
    item.parentNode.classList.toggle('file__date--active');
  });
});

document.querySelectorAll('.files__main-wrap').forEach((item) => {
  item.addEventListener('click', () => {
    item.parentNode.classList.toggle('files__container--active');
  });
});
