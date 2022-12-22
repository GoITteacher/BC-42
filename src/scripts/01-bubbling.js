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
};

refs.parent.addEventListener('click', e => {
  e.stopPropagation();
  console.log('parent');
});

refs.child.addEventListener('click', e => {
  e.stopPropagation();
  console.log('child');
});

refs.descendant.addEventListener('click', e => {
  e.stopPropagation();
  e.stopImmediatePropagation();
  console.log('descendant1');
});

refs.descendant.addEventListener('click', e => {
  e.stopPropagation();
  e.stopImmediatePropagation();
  console.log('descendant2');
});

refs.descendant.addEventListener('click', e => {
  e.stopPropagation();
  console.log('descendant3');
});
