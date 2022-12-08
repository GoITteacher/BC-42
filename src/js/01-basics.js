/*
 * Функции
 * - Функциональные выражения
 * - Аргументы и параметры
 * - Возврат значения
 */



/* function hello(firstname, lastname){
    console.log(`Hello ${firstname} ${lastname}`);
}
hello('Vasya' , 'Pupkin1');
hello('Petya' , 'Pupkin2'); */

// function buyTicket(money, name){
//     const result = `Ticket - ${name}\nPrice - ${money}`;
//     return result;
// }
// const res = buyTicket(100, 'Vip')
// console.log(res);

// function sum(x,y){
//     return x+y;
// }
// const res = sum(10,15);
// console.log(sum(35,25));


// function foo(x,y){
//     console.log(`Params: ${x} ${y}`);
// }
// foo(undefined, 10);


// function foo(x,y){
//     console.log(x,y);
// }

// const res = foo(1,2);
// console.log(res);

/*
 * - Стек вызовов
 * - Stack trace и поиск ошибок
 */

// function log(elem){
//     console.log(elem);
//     console.log(efsef);
// }

// function foo(array){
//     for(let elem of array){
//         log(elem)
//     }
// }

// const array1 = [1,2,3,4,5,6,7,8];
// const array2 = [1,2,3,4,5,6,7,8];
// const array3 = [1,2,3,4,5,6,7,8];

// const result = foo(array1)

// console.log(result);


// Параметри за замовчуванням

// function sum(x = 0, y = 1){
//     console.log(`${x} + ${y} = ${x+y}`);
// }
// sum(undefined,undefined)


// function hello(name = 'Gospodar'){
//     if(name === undefined)
//         name = 'Gospodar'
//     console.log(`Hello ${name}`);
// }
// let user = null;
// hello(user);



// ARGUMENTS

// function sum(x,y){
//     console.log(x,y);
//     console.log(arguments);
// }
// const max = Math.min();
// console.log(max);