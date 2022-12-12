/*
 * Операция spread (распыление)
 * - Array.prototype.concat() и аналог через spread
 */

// const arr = [1, 2, 3, 4, 5, 6];
// const arr2 = [...arr];
// console.log(arr);
// console.log(arr2);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// const arr3 = [].concat(arr1, arr2);
// const arr3 = [...arr1, ...arr2];
// console.log(arr3);

/*
 * Поиск самой маленькой или большой температуры (числа)
 */

// const temps = [21, 17, 29, 24];
// const maxItem = Math.max(...temps);
// console.log(maxItem);

/*
 * Сшиваем несколько массивов в один через concat() и spread
 */

/*
 * Распыление объектов
 * - Object.prototype.assign() и spread
 */
const user1 = {
  name: 'myName',
  age: 24,
};

const user2 = {
  login: 'login',
  password: 'password',
};

// const arr = [...user1, ...user2];

const arr = [1, 2, 3, 4, 5];
const obj = { ...arr };
console.log(obj);
