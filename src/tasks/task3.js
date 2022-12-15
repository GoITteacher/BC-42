let elem = {
  value: 'Привіт',
};

function func(surname, name) {
  console.log(surname, name);
  let obj1 = {
    foo: (x1, x2) => {
      console.log(this);
    },
  };

  return obj1.foo;
}

const myFunc = func.apply(elem, ['Vasya', 'Vasya1']);
myFunc();
