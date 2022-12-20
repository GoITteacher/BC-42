let myBtn = document.querySelector('#testButton');
let imgElem = document.querySelectorAll('img');

myBtn.addEventListener('click', onBtnClick);
function onBtnClick() {
  const firstElem = imgElem[0];
  console.log(firstElem);
  console.dir(firstElem.attributes[1].value);
}

/* 
elem.hasAttribute(name) - перевіряє наявність атрибута, повертає true або false.
elem.getAttribute(name) - отримує значення атрибута і повертає його.
elem.setAttribute(name, value) - встановлює атрибут.
elem.removeAttribute(name) - видаляє атрибут.
elem.attributes - властивість, що повертає об'єкт усіх атрибутів елемента.
*/

const myImg = imgElem[0];
console.log(myImg);
// console.log(myImg.hasAttribute('alt'));
// console.log(myImg.getAttribute('src'));
myImg.setAttribute('data-text', 'Hello World');
myImg.removeAttribute('data-text');

// console.log(myImg.attributes);
