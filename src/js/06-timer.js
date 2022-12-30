import '../css/common.css';
import { Stopwatch } from './timer';

const refs = {
  startBtn: document.querySelector('button[data-action-start]'),
  stopBtn: document.querySelector('button[data-action-stop]'),
  clockface: document.querySelector('.js-clockface'),
};

const stopwatch = new Stopwatch(onTick);

refs.startBtn.addEventListener('click', () => {
  stopwatch.start();
});

refs.stopBtn.addEventListener('click', () => {
  stopwatch.stop();
});

function onTick({ hours, mins, secs }) {
  refs.clockface.textContent = `${hours}:${mins}:${secs}`;
}
