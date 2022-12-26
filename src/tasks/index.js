// function func() {
//   console.log(this);
// }

// let user = {
//   firstName: 'Вася',
//   func: func,
// };

// user.func();

// =========================================

// Визначити тип функції
// Якщо функція стрілчата - то то визначити контекст батьківської функції
// Якщо звичайна то дивимось контекст в момент виклику

// const obj2 = {
//   name: 'awdawd',
// };

// let obj1 = {
//   name: 'obj1',
//   func() {
//     return function () {
//       console.log(this);
//     };
//   },
// };

// =========================================

// Визначити тип функції
// Якщо функція стрілчата - то то визначити контекст батьківської функції
// Якщо звичайна то дивимось контекст в момент виклику

const obj1 = {
  name: 'obj1',
  func() {
    // obj1

    const fun1 = () => {
      console.log(this); // obj1
    };

    return fun1;
  },
};

let obj2 = {
  name: 'obj2',
  func() {
    //obj2
    return function () {
      console.log(this);
    };
  },
};

const newFunc2 = obj2.func().bind(obj1);
newFunc2.call(obj2);
// =========================================
