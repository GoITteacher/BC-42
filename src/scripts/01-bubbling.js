/* 
- event.target
- event.currentTarget

- stopPropagation()
- stopImmediatePropagation()

*/

let refs = {
  parent: document.querySelector('.js-parent'),
  child: document.querySelector('.js-child'),
  descendant: document.querySelector('.js-descendant'),
  inputElem: document.querySelector('.js-input'),
};

refs.inputElem.addEventListener('input', e => {
  const inputElem = e.target;
  console.log(inputElem.value.length);
  console.log(+inputElem.dataset.length);
  console.log(inputElem.value.length === +inputElem.dataset.length);
});
