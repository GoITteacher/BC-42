const countMouseEventElement = document.querySelector('.js-count-mouse');
const countInputEventElement = document.querySelector('.js-count-input');
const inputElement = document.querySelector('.js-input');
const outputElem = document.querySelector('.js-output');

let countMouseEvent = 0;
let countInputEvent = 0;

// window.addEventListener(
//   'mousemove',
//   _.throttle(onMouseMove, 3000, {
//     trailing: true,
//   }),
// );

// function onMouseMove() {
//   countMouseEvent++;
//   countMouseEventElement.textContent = countMouseEvent;
// }

inputElement.addEventListener(
  'input',
  _.debounce(onInputChange, 300, {
    maxWait: 3000,
  }),
);

function onInputChange(e) {
  countInputEvent++;
  countInputEventElement.textContent = countInputEvent;
  outputElem.textContent = e.target.value;
}
