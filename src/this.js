/* 
Контекст виконання функції

- Іван біжить швидко, тому що Іван намагається зловити поїзд.
- Іван біжить швидко, тому що він намагається зловити поїзд.
*/

// function siri() {
//   console.log(this);
// }
// siri();

// const petro = {
//   name: 'petro',
//   age: 25,
//   siri() {
//     console.log(this);
//   },
// };
// petro.siri();

/* 
Правила визначення this
    - this у глобальній області видимості
    - this в методі об'єкта
    - this в callback-функціях
    - this у стрілочних функціях
*/

// function foo() {
//   console.log(this);
// }
// foo();

// const user = {
//   name: 'Petro',
//   siri() {
//     console.log(this.name);
//   },
// };
// user.siri();

// const user = {
//   siri(callback) {
//     console.log(this);
//     callback();
//   },
// };
// function callback() {
//   console.log(this);
// }
// user.siri(callback);

// const user = {
//   name: 'hello',
//   siri() {
//     const hello = () => {
//       console.log(this);
//     };
//     hello();
//   },
// };
// user.siri();

/* 
1. Який тип функції 

- якщо стрілчата, дивимось момент створення (дивимось батьківський контектс)

- якщо звичайна, дивимось момент виклику

- якщо виключення
*/

// const foo = () => {
//   this;
//   const user1 = {
//     name: 'Petro',
//     repo: () => {
//       console.log(this);
//     },
//   };

//   user1.repo();
// };

// const user2 = {
//   name: 'user2',
//   foo: foo,
// };

// user2.foo();

// user2.test();
// const test = () => {
//   console.log(this);
// };
// test();

// const user2 = {
//   name: 'Vasya',
//   repo2: user1.repo,
// };

// user1.repo();
// user2.repo2();

//- this у callback функціях

//- this у стрілочних функціях

/* 
Методи функцій
    - Метод call()
    - Метод apply()
    - Метод bind()
*/

// const user = {
//   name: 'Petro',
//   foo(x, y) {
//     console.log(x, y, this);
//   },
// };

// const user1 = {
//   name: 'Petro',
// };

// const user2 = {
//   name: 'Vasya',
// };

// function foo(x, y) {
//   console.log(x, y, this);
// }

// user.foo.apply(user2, [10,20])
// foo.call(user1, 10, 20);

// ==========

// const user1 = {
//   name: 'Petro',
// };

// function foo() {
//   console.log(this);
// }

// const user2 = {
//   copyFoo: foo.bind(user1),
// };
// const copyFoo = foo.bind(user1);

// user2.copyFoo.call(user2);
// copyFoo();

// const arrow = (x, y, ...args) => {
//   console.log(x, y, args);
// };

// const copy = arrow.bind(user1, 10, 20);
// copy(20);
// copy(10);
// copy(50, 20);
// copy(60, 40);
// ==================

/*
1. arrow function 10
2. bind - 7
3. call apply - 5
4. object - 3
5. WINDOW-undefined  - 1
*/

// ====================

function foo() {
  console.log(this);
}

const user1 = {
  name: 'Petro',
};
const user2 = {
  name: 'Vasya',
};
const user3 = {
  name: 'Ivan',
};
