import '../css/common.css';

/*
 * Метод setInterval(callback, delay, args)
 */
const id = setInterval(foo, 1000, 10, 20, 30, 40);

let counter = 0;
function foo(x, y, t, n) {
  console.log(x, y, t, n, counter++);
}

/*
 * Очистка интервала с clearInterval(intervalId)
 */

setTimeout(() => {
  clearInterval(id);
}, 5000);
