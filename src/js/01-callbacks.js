/*
 * Функция обратного вызова (callback)
 * - Функция может принимать другие функции как параметры
 * - Функция которая передаётся другой функции как аргумент называетс
 *   «функцией обратного (отложенного) вызова» (callback-функция)
 * - Функция которая принимает другую функцию как параметр
 *   или возвращает функцию как результат своей работы называется «функцией высшего порядка»
 */

// function foo(x, x2, callback2) {
//   if (x > 0) x2();
//   else callback2();
// }

// function callback1() {
//   console.log('Ok');
// }

// function callback2() {
//   console.log('error');
// }

// function x1() {
//   console.log('x1');
// }

// foo(-2342, x1, x1);

/*
 * функция doMath(a, b, callback)
 */

// function doMath(x, y, callback) {
//   const result = callback(x, y);
//   console.log(result);
// }

// function sum(s1, s2) {
//   return s1 + s2;
// }

// function sub(s1, s2) {
//   return s1 - s2;
// }

// function multiply(s1, s2) {
//   return s1 * s2;
// }

// function div(s1, s2) {
//   return s1 / s2;
// }

// doMath(10, 20, sum);

/*
 * Отложенный вызов: регистрация событий
 */

// const but = document.querySelector('.js-button');
// but.addEventListener('click', ()=>{});

// let count = 0;
// function foo() {
//   count++;
//   console.log('Hello', count);
// }

/*
 * Отложенный вызов: интервалы
 */

// setTimeout(foo, 10000);
// ================================================
