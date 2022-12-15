// function func() {
//   console.log(this);
// }

// let user = {
//   firstName: 'Вася',
//   func: func,
// };

// user.func();

// =========================================

// const obj2 = {
//   name: 'awdawd',
// };

// let obj1 = {
//   name: 'obj1',
//   func() {
//     return () => {
//       console.log(this);
//     };
//   },
// };

// const foo = obj1.func;
// const newFunc = foo();

// newFunc();

// =========================================

// const obj1 = {
//   name: 'obj1',
//   func() {
//     return () => {
//       console.log(this); // obj1
//     };
//   },
// };

// let obj2 = {
//   name: 'obj2',
//   func() {
//     return () => {
//       console.log(this);
//     };
//   },
// };

// const newFunc2 = obj1.func().bind(obj2);
// newFunc2.call(obj2);
// =========================================
