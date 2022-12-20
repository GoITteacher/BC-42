let myBtn = document.querySelector('#testButton');
let list = document.querySelector('ul');

/* 
Властивість innerHTML
 - Читання
 - Зміна
 - Додавання
 - insertAdjacentHTML
*/
const friends = ['Petro', 'Kirilo'];
const markup = friends
  .map(value => {
    return `<li>${value}</li>`;
  })
  .join('');

// console.log(markup);
// list.innerHTML = markup + list.innerHTML;

// list.textContent = '<h1>Hello World</h1>';

// console.log(list.innerHTML);

// =============

// list.insertAdjacentHTML('afterbegin', markup);
// list.insertAdjacentHTML('beforebegin', markup);
// list.insertAdjacentHTML('afterbegin', markup);
// list.insertAdjacentHTML('afterbegin', markup);

const newElem = document.createElement('li');
newElem.textContent = '1234234';
list.insertAdjacentElement('beforeend', newElem);
