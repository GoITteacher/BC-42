// function f() {
//   function foo() {
//     console.log(this);
//   }
//   return foo;
// }

// const obj = {
//   name: 'obj',
// };
// let obj1 = {
//   name: 123,
//   foo1: f.call(obj), // foo1 === foo
// };

// obj1.foo1();
