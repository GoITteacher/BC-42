// saveToLS('myData', 'Hello World');
// saveToLS('myData3', 'Hello World');

// for (let i = 0; i < localStorage.length; i++) {
//   const key = localStorage.key(i);
//   console.log(key, loadFromLS(key));
// }

// localStorage.removeItem('myData1');

// ===================================

import { loadFromLS, saveToLS } from './helpers.js';

const refs = {
  formElem: document.querySelector('.js-feedback-form'),
};

/* function loadData() {
  console.log(refs.formElem.elements);
  const value1 = loadFromLS('username');
  const value2 = loadFromLS('message');

  const nameElem = refs.formElem.elements.username;
  const messageElem = refs.formElem.elements['message'];

  nameElem.value = value1;
  messageElem.value = value2;
}

loadData();

refs.formElem.addEventListener('input', e => {
  const nameElem = e.target.name;
  const value = e.target.value;
  saveToLS(nameElem, value);
}); */

// ==============================

loadData();

function loadData() {
  const data = loadFromLS('objForm') || {};
  for (let key of Object.keys(data)) {
    refs.formElem.elements[key].value = data[key];
  }

  if (refs.formElem.elements['username'].value === '') {
    refs.formElem.elements['username'].value = 'Anonymus';
  }
}

refs.formElem.addEventListener('input', e => {
  const data = loadFromLS('objForm') || {};
  const nameElem = e.target.name;
  data[nameElem] = e.target.value;
  saveToLS('objForm', data);
});

refs.formElem.addEventListener('submit', e => {
  e.preventDefault();

  for (let key of Object.keys(e.target.elements)) {
    if (Number.isNaN(Number(key))) {
      const elem = e.target.elements[key];
      if (elem.value.trim() === '') {
        alert('Заповнені не всі поля!');
        return;
      }
    }
  }

  localStorage.removeItem('objForm');
  e.target.reset();
});

// refs.formElem.addEventListener('submit', e => {
//   e.preventDefault();

//   const { username, message } = e.target.elements;
//   if (username.value === '' || message.value === '') {
//     alert('Error');
//     return;
//   }

//   localStorage.removeItem('objForm');
//   e.target.reset();
// });
