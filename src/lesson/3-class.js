/* //Класи
/* 
  -Оголошення класу
  -Конструктор класу
  -Об'єкт параметрів
  -Методи класу
  -Приватні властивості (Інкапсуляція)
  -Геттери і сеттери
  -Статичні властивості
  -Статичні методи
  -Наслідування класів
  -Конструктор дочірнього класу
  -Методи дочірнього класу

*/

/*class User {
  name;
  #age;
  #weight;

  constructor(name, age, weight) {
    this.name = name;
    this.#age = age;
    this.#weight = weight;
    this.#getName()
  }

  get age() {
    return 'Age: ' + this.#age;
  }


  #getName(){

  }

  set age(x) {
    if (x > 0 && x < 100) {
      this.#age = x;
    } else {
      console.log('Error');
    }
  }
}

const user1 = new User('Test', 10, 70);

user1.age = 20;
console.log(user1.age);

user1.age = 40;
console.log(user1.age);

user1.age = 120;
console.log(user1.age);

user1.getName()
*/

class Tesla {
  model;
  year;
  price;
  speed;
  color;
  static maxSpeed = 180;

  constructor(model, year, price, speed, color) {
    this.color = color;
    this.model = model;
    this.price = price;
    this.speed = speed;
    this.year = year;
    Tesla.counter += 1;
  }

  static getMaxSpeed() {
    return;
  }

  static getSum(x, y) {
    return x + y;
  }
}

const tesla1 = new Tesla('X', 2021, 200000, 360, 'black');
const tesla2 = new Tesla('X', 2022, 200000, 360, 'black');
const tesla3 = new Tesla('X', 2023, 200000, 360, 'black');
// console.log(Tesla.counter);
// =================

class Person {
  firstname;
  age;
  lastname;
  sex;
  #weight;

  constructor(firstname, lastname, age, sex, weight = 0) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.sex = sex;
    this.age = age;
    this.#weight = weight;
  }
}

class Student extends Person {
  group;
  speciality;

  constructor(group, speciality, firstname, lastname, age, sex) {
    super(firstname, lastname, age, sex);

    this.group = group;
    this.speciality = speciality;
  }
}

const student = new Student();
console.log(student);

/* 
Синтаксис літерала об'єкта дозволяє створити один об'єкт. Проте, часто потрібно створити багато однотипних об'єктів з однаковим набором властивостей, але різними значеннями і методами для взаємодії з ними. Все це потрібно робити динамічно, під час виконання програми. З цією метою використовують класи - спеціальний синтаксис оголошення функції для створення об'єктів.
*/

//Оголошення класу

//Результат виклику new User() - це об'єкт, який називається екземпляром класу, тому що містить дані і поведінку, що описуються класом.

//Конструктор класу

/* 
Виклик класу з оператором new призводить до створення нового об'єкта і виклику конструктора в контексті цього об'єкта. Тобто this всередині конструктора буде посилатися на новостворений об'єкт. Це дозволяє додавати кожному об'єкту властивості з однаковими іменами, але різними значеннями.
*/

//Об'єкт параметрів

// const options = {
//   speed: '80',
//   model: 'awdaw',
//   price: 10000000,
//   type: 'sport',
// };

// =======================================
