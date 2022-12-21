/*
 * - Событие submit
 * - Действия браузера по умолчанию
 * - Свойство elements
 * - Класс FormData - https://developer.mozilla.org/en-US/docs/Web/API/FormData
 */

const formElem = document.querySelector('.js-register-form');

formElem.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  console.log(e.target.elements);

  const data = new FormData(e.target);
  const result = {};

  for (let [key, value] of data.entries()) {
    result[key] = value;
  }

  for (let key of Object.keys(e.target.elements)) {
    if (Number.isNaN(Number(key))) {
      console.log(key, e.target.elements[key].value);
    }
  }

  e.target.reset();
}
