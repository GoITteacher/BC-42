/*
 * 1. Открыть и закрыть по кнопке
 * 2. Закрыть по клику в бекдроп: onBackDropClick
 * 3. Закрыть по ESC: onEscapeKeypress
 *
 * В CSS есть класс show-modal, который необходимо добавить на body при открытии модалки
 */

const refs = {
  openModalBtn: document.querySelector('[src]'),
  closeModalBtn: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector('.js-backdrop'),
};

refs.openModalBtn.addEventListener('click', () => {
  document.body.classList.add('show-modal');
});

refs.closeModalBtn.addEventListener('click', () => {
  document.body.classList.remove('show-modal');
});

window.addEventListener('keydown', e => {
  if (e.code === 'Escape') {
    document.body.classList.remove('show-modal');
  }
});

refs.backdrop.addEventListener('click', e => {
  if (e.target === e.currentTarget)
    document.body.classList.remove('show-modal');
});
