import '../css/common.css';
import BSN from 'bootstrap.native';

const refs = {
  modal: document.querySelector('#subscription-modal'),
  subscribeBtn: document.querySelector('button[data-subscribe]'),
  hideBtn: document.querySelector('.js-hide-modal'),
};
const PROMPT_DELAY = 3000;
const MAX_PROMPT_ATTEMPTS = 3;
let promptCounter = 0;
let hasSubscribed = false;
const modal = new BSN.Modal('#subscription-modal');

function openModal() {
  if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {
    return;
  }

  setTimeout(() => {
    modal.show();
    promptCounter++;
  }, PROMPT_DELAY);
}

openModal();

refs.hideBtn.addEventListener('click', () => {
  modal.hide();
});

refs.modal.addEventListener('hide.bs.modal', () => {
  openModal();
});

refs.subscribeBtn.addEventListener('click', () => {
  hasSubscribed = true;
  modal.hide();
  alert('Дякуємо за підписку');
});
