/*
 * Приведение к булю на примере Boolean(value)
 */

// console.log(Boolean(''));
// console.log(Boolean(0));
// console.log(Boolean(null));
// console.log(Boolean(undefined));

/*
 * Логическое И (оператор &&)
 * - Запинается на лжи
 * - Возвращает то, на чём запнулось или последний операнд
 */

// // 1 * 1 = 1
// console.log(true && false && true && true); // ture
// console.log(false && true); // false
// console.log('end'); // true

/*
 * Логическое ИЛИ (оператор ||)
 * - Запинается на правде
 * - Возвращает то, на чём запнулось или последний операнд
 */

/*
 * Логическое НЕ (оператор !)
 * Делает инверсию правда > ложь и ложь > правда
 */

console.log(!(10 > 20));
