let myBtn = document.querySelector('#testButton');
let listItem = document.querySelector('.js-list');

console.log(listItem);

const liItem = listItem.querySelectorAll('li')[2];

/* 
У властивості classList зберігається об'єкт з методами для роботи з класами елемента.

elem.classList.contains(cls) - повертає true або false, залежно від наявності класу cls в елемента.
elem.classList.add(cls) - додає клас cls до списку класів елемента.
elem.classList.remove(cls) - видаляє клас cls зі списку класів елемента.
elem.classList.toggle(cls) - якщо відсутній клас cls, то додає його, якщо - присутній, навпаки - видаляє.
elem.classList.replace(oldClass, newClass) - замінює існуючий клас oldClass на вказаний newClass.
*/

// console.log(liItem.classList.contains('sefsef'));

// liItem.classList.add('blue', 'bold');
// liItem.classList.remove('bold');
// liItem.classList.replace('blue', 'red');

// myBtn.addEventListener('click', () => {
//   liItem.classList.toggle('bold');
// });

/* 
Властивість style
*/

console.log(liItem.style);
liItem.style.border = '1px solid black';
liItem.style.backgroundColor = 'grey';

console.log(liItem.style.backgroundColor);

liItem.style.position = 'absolute';
liItem.style.left = '100px';
liItem.style.top = '300%';
