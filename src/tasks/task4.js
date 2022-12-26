function f() {
  this = obj
    function foo() {
      console.log(this);
    }
    return foo;
  const foo = 100;

  return foo;
}

const obj = {
  name: 'obj',
};

let obj1 = {
  name: 123,
  foo1: f.call(obj), // => 100
};

obj1.foo1();

// =============
