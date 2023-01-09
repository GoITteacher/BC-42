import '../css/common.css';
import { refs } from './modules/refs.js';
import { getHeroByName, heroMarkup } from './modules/heroes';
import { getWeather } from './modules/weather';

refs.form.addEventListener('submit', e => {
  e.preventDefault();
  const name = e.target.elements.query.value;
  const result = getHeroByName(name);

  result.then(hero => {
    refs.cardContainer.innerHTML = heroMarkup(hero);
  });
});

refs.form1.addEventListener('submit', e => {
  e.preventDefault();

  getWeather(Math.random() * 30, 30, 'uk');
});

// =======================================================
// =======================================================
// =======================================================
// =======================================================
// =======================================================
// =======================================================
// =======================================================
// =======================================================
// =======================================================
// =======================================================
// =======================================================
// =======================================================
