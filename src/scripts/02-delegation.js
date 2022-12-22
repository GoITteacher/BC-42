let refs = {
  firstBoxElem: document.querySelector('.js-box-1'),
  secondBoxElem: document.querySelector('.js-box-2'),
};

refs.secondBoxElem.addEventListener('click', e => {
  // if(e.target.nodeName === 'BUTTON')
  // if(e.target.nodeName !== 'DIV')
  if (e.target !== e.currentTarget) console.log(e.target.textContent);
});

refs.firstBoxElem.addEventListener('click', e => {
  if (e.target === e.currentTarget) return;
  let elem = e.target;

  if (elem.nodeName !== 'SPAN') {
    elem = elem.querySelector('span');
  }

  console.log(elem);
});
