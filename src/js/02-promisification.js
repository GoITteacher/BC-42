/*
 * Промисификация:
 * - Поблема доступа к результату промиса с колбеком
 * - Функция которая возвращает промис
 */

function getData(id) {
  return new Promise((resolve, reject) => {
    resolve(id * 10);
  });
}

/*
 * Промисификация «синхронных» функций
 * - Promise.resolve()
 * - Promise.reject()
 */

/* function getImages() {
  const img = [1, 2, 3, 4, 5];

  return Promise.reject(img);
}

getImages().then(value => {
  console.log(value);
});

Promise.reject(123);

new Promise((resolve, reject) => {
  reject(123);
}); */

/*
 * Покемоны с https://pokeapi.co/
 */

// ===========================
