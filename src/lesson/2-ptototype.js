//Прототипне наслідування

// Object;
// isPrototypeOf()
// hasOwnProperty()

const father = {
  name: 'father',
  lastname: 'test',
};

const child = {
  name: 'child',
};

child.__proto__ = father;

// console.log(father.isPrototypeOf(child));
// console.log(child.isPrototypeOf(father));

// console.log(child.lastname);

console.log(child.hasOwnProperty('lastname'));
console.log(child.lastname);
