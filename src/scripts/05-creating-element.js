let myBtn = document.querySelector('#testButton');
let list = document.querySelector('.usernames');

/* 
Створення
document.createElement(tagName);
*/
const items = [];

for (let i = 0; i < 10; i++) {
  const liItem = document.createElement('li');

  liItem.setAttribute('id', 'myItem');
  liItem.classList.add('blue');
  liItem.style.border = '1px solid black';

  items.push(liItem);
}

/* 
    Додавання
    - element.append(el1, el2, ...) - додає один або декілька елементів після всіх дітей елемента element.
    - element.prepend(el1, el2, ...) - додає один або декілька елементів перед усіма дітьми елемента element.
    - element.after(el1, el2, ...) - додає один або декілька елементів після елемента element.
    - element.before(el1, el2, ...) - додає один або декілька елементів перед елементом element.
*/

list.append(...items);

/* 
Видалення
elem.remove();
*/

list.remove();
