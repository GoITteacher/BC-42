/*
 * События мыши
 * - mouseenter и mouseleave (это ховер)
 * - mouseover и mouseout
 * - mousemove (chatty event - болтливое событие)
 * - Допмат по координатам: https://nerdparadise.com/programming/javascriptmouseposition
 * - Хорошая задачка - https://learn.javascript.ru/task/move-ball-field
 */

const boxRef = document.querySelector('.js-box');

// boxRef.addEventListener('mouseenter', e => {
//   console.log('mouseover');
//   e.stopPropagation();
//   e.target.classList.add('box--active');
// });

// boxRef.addEventListener('mouseleave', e => {
//   console.log('mouseout');
//   e.stopPropagation();
//   e.target.classList.remove('box--active');
// });

// boxRef.addEventListener('mouseover', e => {
//   console.log('mouseover');
//   e.stopPropagation();
//   e.target.classList.add('box--active');
// });

// boxRef.addEventListener('mouseout', e => {
//   console.log('mouseout');
//   e.stopPropagation();
//   e.target.classList.remove('box--active');
// });

// ==================

boxRef.style.position = 'absolute';
window.addEventListener('mousemove', e => {
  boxRef.style.top = e.offsetY + 'px';
  boxRef.style.left = e.offsetX + 'px';
});
