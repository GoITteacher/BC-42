/**
 * - Показываем и скрываем добавляя/удаляя класс js-visible
 * - Скрываем через определённое время
 * - Скрываем при клике
 * - Не забываем чистить таймер
 */

const NOTIFICATION_DELAY = 3000;
let timeoutId = null;

const refs = {
  notification: document.querySelector('.js-alert'),
};

/*
 * Функции
 */

setTimeout(() => {
  refs.notification.classList.add('js-visible');
}, 3000);

timeoutId = setTimeout(() => {
  refs.notification.classList.remove('js-visible');
}, 5000);

refs.notification.addEventListener('click', e => {
  e.target.classList.remove('js-visible');
  clearTimeout(timeoutId);
});
