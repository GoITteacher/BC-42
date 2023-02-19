/*
 * Функция обратного вызова (callback)
 * - Функция может принимать другие функции как параметры
 * - Функция которая передаётся другой функции как аргумент называетс
 *   «функцией обратного (отложенного) вызова» (callback-функция)
 * - Функция которая принимает другую функцию как параметр
 *   или возвращает функцию как результат своей работы называется «функцией высшего порядка»
 */

// function foo(test) {

// }

// function callback() {
//   console.log('test');
// }

// // debugger;
// foo(callback);

/*
 * функция doMath(a, b, callback)
 */

function doMath(a, b, test) {
  console.log(a, b);

  const result = test(a, b);
  console.log(result);
}

function sum(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

// doMath(10, 20, sum);
// doMath(10, 20, subtraction);

/*
 * Отложенный вызов: регистрация событий
 */

const buttonElem = document.querySelector('.js-button');
buttonElem.addEventListener('click', foo);

function foo() {
  console.log('click');
}

/*
 * Отложенный вызов: интервалы
 */

// setTimeout(foo, 1000); // 1
// setInterval(foo, 1000); //

// ================================================

function robot(x, call1, call2) {
  if (x > 10) {
    return call1(x);
  } else {
    return call2(x);
  }
}

function test1(x) {
  return x / 10;
}

function test2(x) {
  return x / 2;
}

debugger;
const result = robot(15, test1, test2);
console.log(result);
