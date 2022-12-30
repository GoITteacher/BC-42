import '../css/common.css';

/*
 * Метод setTimeout(callback, delay, args)
 */

const id1 = setTimeout(foo, 5000);
const id2 = setTimeout(foo, 5000);

function foo() {
  console.log(123);
}

/*
 * Очистка таймаута с clearTimeout(timeoutId)
 */

console.log(id1, id2);

clearTimeout(id1);
clearTimeout(id2);
