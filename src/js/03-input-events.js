/*
 * Паттерн «Объект ссылок»
 *
 * События
 * - focus и blur
 * - input и change
 * - Чекбоксы и свойство checked
 */

const refs = {
  input: document.querySelector('.js-input'),
  nameLabel: document.querySelector('.js-button > span'),
  licenseCheckbox: document.querySelector('.js-license'),
  btn: document.querySelector('.js-button'),
};

// refs.input.addEventListener('focus', onInputFocus);
// refs.input.addEventListener('blur', onInputBlur);

// function onInputFocus(e) {
//   console.log('focused');
//   e.target.classList.add('selected');
// }

// function onInputBlur(e) {
//   console.log('Blur');
//   e.target.classList.remove('selected');
// }

// ==============

refs.input.addEventListener('input', e => {
  const value = e.target.value;

  // if(value.length > 0){
  //   refs.nameLabel.textContent = value
  // }else{
  //   refs.nameLabel.textContent = "Anonym"
  // }

  refs.nameLabel.textContent = value || 'Anonym';
});

refs.input.addEventListener('change', () => {
  console.log('changed');
});

refs.licenseCheckbox.addEventListener('change', e => {
  refs.btn.disabled = !e.target.checked;
});
