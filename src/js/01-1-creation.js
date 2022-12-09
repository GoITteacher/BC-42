/*
 * Объекты (делаем плейлист музыки: имя, рейтинг, треки, кол-во треков)
 * - Литерал объекта
 * - Свойства, ключи (имя) и значения
 * - Как отличить объект от области видимости
 */

// const playlist = {
//     name: 'myPlaylist',
//     trackList: [1,2,3,5,7,8],
//     date: {
//         date: '2001',
//         month: 9,
//         day: 10
//     },
//     rating: 8,
// }

// console.log(playlist);




/* 
Створення об'єкта
Вкладені властивості
Звернення до властивостей через крапку
Звернення до вкладених властивостей
Звернення до властивостей через квадратні дужки
Зміна значення властивості +
Додавання властивостей
Короткі властивості
Обчислювальні властивості
Методи об'єкта
Доступ до властивостей об'єкта в методах
*/

// const user = {
//     name:'Petya',
//     age: 25,
//     address: {
//         country: 'Ukraine',
//         city: 'Dnipro',
//         street: ''
//     }
// }

// console.log(user.address.key);
// console.log(user['address']['country'])
// console.log(user[key]['country'])
// console.log(user[key].country)


// user['address'].city = 'Kyiv'
// user.address.city = 'Kyiv'
// user['address']['city'] = 'Kyiv';

// user.height.sefsef = 170;
// user.height = {
//     awdawd:123123,
// };
// console.log(user);

// =====================================


// const userName = 'Petro';
// const userAge = 123;
// const user = {
//     userName,
//     userAge,
//     address: {
//         userName
//     }
// }
// console.log(user);


// =====================================


// const user = {
//    name: 'UserName',
//    age: 20,

//    sayHello(){
//     console.log('Hello');
//    },

//    sum(x,y){
//     return x+y
//    }
// }


// const result = user.sum(10,20)
// console.log(result);

// // user.toString() ==> '[object Object]'


// =====================================


/* const obj = {
    sef:'sefsef',
    toString(){
        return 'sefsef'
    }
};
const user = {
    [obj]: 'test'
    // 'sefsef': 'test'
}
console.log(user); */

// =====================================

// const name = 'TEST'

// const user = {
//     name: 'Petro',
//     address: {
//         country:'Ukraine',
//     },

//     sayName(){
//         console.log(`My name's ${this.name}`);
//     },

//     newName(name){
//         this.name = name;
//     }
// };

// user.newName('Vasya')
// user.sayName();

/*
 * Ссылочный тип {} === {}
 */

// console.log({} === {});
// const objA = {
//     name:'Petro'
// }
// const objB = objA;
// objB.name = 'newName'
// console.log(objA);

/*
 * Массивы и функции это объекты
 */

// const user = {
//     name: 'USER',
//     age:123,
// }

// const message =  {
//          "message_id": 1224374,
//          "from": {
//           "id": 433982686,
//           "is_bot": false,
//           "first_name": "Volodymyr",
//           "username": "Pikimell",
//           "language_code": "uk"
//          },
//          "chat": {
//           "id": 433982686,
//           "first_name": "Volodymyr",
//           "username": "Pikimell",
//           "type": "private"
//          },
//          "date": 1667227126,
//          "sticker": {
//           "width": 512,
//           "height": 512,
//           "emoji": "😀",
//           "set_name": "Mohammad_fati",
//           "is_animated": true,
//           "is_video": false,
//           "type": "regular",
//           "thumb": {
//            "file_id": "AAMCBAADGQEAARKutmNf3fbUwu4SyM3Tv4EeJ8RzLyI2AAIhAANfxgEZ2DkwUwikw60BAAdtAAMqBA",
//            "file_unique_id": "AQADIQADX8YBGXI",
//            "file_size": 3016,
//            "width": 128,
//            "height": 128
//           },
//           "file_id": "CAACAgQAAxkBAAESrrZjX9321MLuEsjN07-BHifEcy8iNgACIQADX8YBGdg5MFMIpMOtKgQ",
//           "file_unique_id": "AgADIQADX8YBGQ",
//           "file_size": 23668
//          }
// }

// message.__proto__ = user;
// console.log(message);

// for(let key in message){
//     console.log(key); 
// }

// console.log(message.hasOwnProperty('age'));

// =========================

// for(let value of message){
//     console.log(value);
// }


// for(let key of Object.keys(message)){
//     console.log(key);
// }
// for(let value of Object.values(message)){
//     console.log(value);
// }
// for(let arr of Object.entries(message)){
//     console.log(arr[1]);
// }

// const arr = Object.values(message)
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }   


// console.log(Object.entries(message));

// =======================

const name = "Генрі Сибола";
const age = 25;

const user = {
  name: name,
  age: 25,
  friends: []
};
user.friends.push('Petro')

console.log(user.name); // "Генрі Сибола"
console.log(user.age);
console.log(user);
