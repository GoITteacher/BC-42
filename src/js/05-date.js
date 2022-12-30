import '../css/common.css';

/*
 - Создание
 - Unix-время
 - Методы
 - Разница времени
 - Date.now()
*/

// console.log(myDate);
// console.log(myDate.getDate());
// console.log(myDate.getDay());
// console.log(myDate.getHours());
// console.log(myDate.getTime());
// console.log(Date.now());

/* 
new Date("2030-03-16");
new Date("2030-03");
new Date("2018");
new Date("03/16/2030");
new Date("2030/03/16");
new Date("2030/3/16");
new Date("March 16, 2030");
new Date("March 16, 2030 14:25:00");
new Date("2030-03-16 14:25:00");
new Date("2030-03-16T14:25:00");
new Date("16 March 2030");
*/

const start = Date.now();

setInterval(() => {
  console.log(Date.now() - start);
}, 1000);
