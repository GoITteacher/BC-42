/*
 * События
 * - Создание и удаление слушателей
 * - Именование колбеков для слушателей
 *    - handle*: handleSubjectEvent
 *    - *Handler: subjectEventHandler
 *    - on*: onSubjectEvent
 * - Ссылочная идентичность колбеков
 * - Объект события
 */

const targetBtn = document.querySelector('.js-target-btn');
const addListenerBtn = document.querySelector('.js-add-listener');
const removeListenerBtn = document.querySelector('.js-remove-listener');
const divContainer = document.querySelector('.js-div-block');

// addListenerBtn.addEventListener('click', onAddListenerBtnClick);
// removeListenerBtn.addEventListener('click', onRemoveListenerBtnClick);
// addListenerBtn.addEventListener('click', onAddListenerBtnClick);
// removeListenerBtn.addEventListener('click', onRemoveListenerBtnClick);
// addListenerBtn.addEventListener('click', onAddListenerBtnClick);
// removeListenerBtn.addEventListener('click', onRemoveListenerBtnClick);
// addListenerBtn.addEventListener('click', onAddListenerBtnClick);
// removeListenerBtn.addEventListener('click', onRemoveListenerBtnClick);
// addListenerBtn.addEventListener('click', onAddListenerBtnClick);
// removeListenerBtn.addEventListener('click', onRemoveListenerBtnClick);

// function handleTargetBtnClick()
// function targetBtnClickHandler()
// function onTargetBtnClick()

// function onAddListenerBtnClick() {
//   console.log('Add');
//   targetBtn.addEventListener('click', onTargetBtnClick);
// }

// function onRemoveListenerBtnClick() {
//   console.log('Remove');
//   targetBtn.removeEventListener('click', onTargetBtnClick);
// }

// function onTargetBtnClick() {
//   console.log('HELLO');
// }

// ====================

// const onBtnClick = () => {
//   console.log('hello');
// };

// targetBtn.addEventListener('click', () => {
//   console.log('123123');
// });

// =======================

targetBtn.addEventListener('click', onBtnClick);

function onBtnClick(e) {
  if (e.shiftKey) console.log('hello');
  else console.log('ENd');
}
