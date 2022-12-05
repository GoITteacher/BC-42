/*
 * Длина строки, свойство length
 */
// const string = 'Hello wo';
// console.log(string.length);

/*
 * Конкатенация строк
 */

// const str1 = 'Hello ';
// const str2 = 'World';
// const result = str1 + str2; // 'Hello World'
// console.log(result);

/*
 * Напиши скрипт который выведет строку в формате:
 * «Гость x y поселяется в z номер q»,
 * подставив вместо x y z q значения переменных
 */
// const firstName = 'Volodymyr';
// const lastName = 'Pashc';
// const type = 'VIP';
// const numb = '36';

// const result =
//   'Гость ' +
//   firstName +
//   ' ' +
//   lastName +
//   ' поселяется в ' +
//   type +
//   ' номер ' +
//   numb;

// console.log(result);

/*
 * Шаблонные строки (template strings)
 * Возвращаемся к составлению строки поселения в отель
 */

// const message = `Гість ${firstName} ${lastName} поселяется в ${type} номер ${numb}`;

// console.log(message);

/*
 * Нормализация с методом toLowerCase()
 */

// let firstName = 'VoloDymYr';
// firstName = firstName.toLowerCase();
// firstName = firstName.toUpperCase();

// console.log(firstName);

/*
 * Поиск в строке с методом includes()
 */

const blacklistedWord1 = 'спам';
const blacklistedWord2 = 'распродажа';

const string1 = 'Привет, я принц Абдул, это не спам, предлагаю тебе миллион!';
const string2 = 'Самая большая РАСПРОДАЖА этой недели, не пропустите!';
const string3 = 'Рекламная кампания #fatlivesmatter';

const res1 = string2.toLowerCase().includes(blacklistedWord2);
console.log(res1);
