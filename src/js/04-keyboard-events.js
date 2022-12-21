/*
 * Типы событий: keypress, keydown, keyup
 * - Ограничения keypress
 * - Свойства KeyboardEvent.key и KeyboardEvent.code
 */

const refs = {
  output: document.querySelector('.js-output'),
  clearBtn: document.querySelector('.js-clear'),
  input: document.querySelector('.js-input'),
};

// window.addEventListener('keypress', e => {
//   console.log(e);
// });

window.addEventListener('keyup', e => {
  // if (e.code === 'Enter') console.log('Hello World');
  console.log('up');
});

window.addEventListener('keydown', e => {
  console.log('down');
});

// refs.input.addEventListener('keydown', e => {
//   e.preventDefault();
//   console.log(e);
// });
