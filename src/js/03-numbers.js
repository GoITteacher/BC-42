// const age = prompt('Enter your age:');

/*
 * Парс числа с Number.parseInt() и Number.parseFloat()
 */

// let myNumb = Number.parseFloat('123.34456');
// console.log(myNumb); // 123.34

/*
 * - Метод число.toFixed(digits)
 */

// myNumb = Number.parseFloat(myNumb.toFixed(3));

/*
 * - Приведение (преобразование) к числу с Number(value)
 * - Значение NaN (Not a Number) и метод Number.isNaN(value)
 */

// const stringNumb = '2346.345';
// const numb = '123.345';

// console.log(numb);

/*
 * Обьект Math
 * - Возведение в степень
 * - Exponent operator
 */

// Math.pow(4, 2); // 16
// console.log(4 ** 2); // 16

/*
 * Напиши скрипт который просит пользователя ввести число и степень,
 * возводит число в эту степень и выводит результат в консоль
 */

//  1. попросить ввести число и сохранить в переменную
//  2. попросить ввести степень и сохранить в переменную
//  3. Возвести введенные данные в степень и вывести

// const numb = Number.parseInt(prompt('Pls enter your number'));
// const power = Number.parseInt(prompt('Pls enter your power'));

// console.log(numb ** power);

/*
 * Генерим псевдослучайные числа
 * - Math.random()
 * - Math.round()
 */

const min = 500;
const max = 1500;

// const rand = Math.random() * (max - min) + min;
// const rand = Math.random() * max;

// console.log(Math.round(rand));
