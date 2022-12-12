/*
 * Деструктуризация объекта
 * - Значения по умолчанию
 * - Имя переменной отличное от имени свойства
 */

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   isPublic: true,
//   rating: 8.38,
// };

// const title = ()book.title;
// const author = book.author;

// const {title = 'awd', author = 'se' , genres } = book;

// const title = '';
// const { genres, title = 'Default', site = 'test' } = book;
// console.log(title);

// const title = '123';
// const { title: newTitle, author: myAuthor = 'Non' } = book;
// const newTitle = book.title;
// console.log(newTitle);
// console.log(myAuthor);

/*
 * Глубокая деструктуризация
 */

// const user = {
//   name: 'Petro',
//   address: {
//     country: 'Ukraine',
//     city: {},
//     street: 'Street',
//   },
// };

// { country, city, street } = user.address;
// const {
//   address: { country: myCountry = 123 },
// } = user;

// console.log(country, city, street);

// const user1 = {
//   name: 'Petro1',
// };
// const user2 = {
//   name: 'Petro2',
// };

// const { name } = user1;
// const { name: newName } = user2;

/*
 * Деструктуризация массивов
 */

// const arr = [5, 2, 7, 3, 9];

// const [sefsef] = arr;

// const x1 = arr[0];5
// const x2 = arr[1];2
// const x3 = arr[2];7

// console.log(sefsef, dgtgdrg, awdawd);

// let x1 = 'red';
// let x2 = 'blue';

// [x1, x2] = [x2, x1];

// console.log(x1, x2);

/*
 * Операция rest (сбор)
 */

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const [, ...arr1] = arr;
// console.log(arr1);

const book = {
  title: 'The Last Kingdom',
  author: 'Bernard Cornwell',
  genres: ['historical prose', 'adventure'],
  isPublic: true,
  rating: 8.38,
};

const { title, author, ...args } = book;

// console.log(book);
// console.log(args);
// console.log(title, author);

/*
 * Паттерн «Обьект настроек»
 * - деструктуризация параметра-обьекта в подписи функции
 * - rest при деструктуризации в подписи
 */

// function foo({ name, age, ...objArgs }) {
//   console.log(name, age, objArgs);
// }

// const name = 'Petro';
// const age = 12;
// const login = '123';
// const password = '12312';

// const obj = {
//   login,
//   name,
//   age,
//   password,
// };

// foo(obj);

// ======================
