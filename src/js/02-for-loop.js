// console.log(1);

/*
 * Цикл while
 */

// debugger;
// let counter = 10;
// const max = 15;

// while(counter < max){
//     console.log(counter);
// }


/*
 * Цикл do while
 */

// let select;
// do{
//     select = prompt('Select');
// }while(select != 0)


/*
 * Цикл for
 */

debugger;
const length = 6;
for( let i = 0; i < length; i++){
    if(i === 3) break;
    console.log(`Збираю жуків на ${i+1} рядку`);
    console.log(`Прориваю ${i+1} рядок`);
    console.log(`Поливаю ${i+1} рядок`);
    console.log('---------------------');
}



/*
 * Напиши скрипт который подсчитывает общую сумму зарплат работников.
 * Кол-во работников хранится в перемнной employees.
 * Зарплата каждого работника это случайное число от 500 до 5000
 * Записать сумму в переменную totalSalary и вывести в консоль
 */

const minSalary = 500;
const maxSalary = 5000;
const employees = 12;
let totalSalary = 0;

/*
 * Напиши скрипт который подсчитывает сумму всех чётных чисел,
 * которые входят диапазон чисел в переменных от min до max.
 * Например, если min=0 и max=5, то диапазон 0-5, и в нём два чётных числа - 2 и 4, их сумма 6.
 */

// let min = 0;
// let max = 10;
// ==========================

// counter += 5
// counter = counter + 5

// counter -= 5
// counter = counter - 5

// counter *= 5
// counter = counter * 5

// counter /= 5
// counter = counter / 5

////////////////////////
// console.log(); // 11
// console.log(counter); // 11

// counter++;