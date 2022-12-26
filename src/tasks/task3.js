let elem = {
  value: 'Elem',
};

function func(surname, name) {
  //elem
  console.log(surname, name);
  let obj1 = {
    foo: (x1, x2) => {
      console.log(this); // elem
    },
  };

  return obj1.foo;
}

const myFunc = func.apply(elem, ['Vasya', 'Vasya1']);
myFunc();
