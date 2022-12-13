/*
 * Стрелочные функции
 * - Объявление
 * - Явный и неявный возврат
 * - Аргументы
 */

// const foo = function (x, y) {
//   console.log(arguments);
// };

// const foo1 = (x, y) => {
//   console.log(arguments);
// };

// foo(10, 20);

// foo1(30, 40);

// ========

// const sum = (x,y) => {
//     return x + y;
// }
// const sum = (x, y) => x + y;

// console.log(sum(40, 50));

// const myFun = ()=>{}

// ========

// ()=>{}
// (a) => {return a*2}
// a => {}
// (a,b,c)=>{}

// =================

function sum(x, y) {
  console.log(x + y);
  return x + y;
}

const min = 10;
const max = 20;

sum(min, max);
sum(50, 70);

// =========

function foo(callback1) {}

const call1 = () => {};

// foo(call1)
// foo(()=>{})
// foo(function(){})
