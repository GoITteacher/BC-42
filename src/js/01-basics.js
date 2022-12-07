/*
 * Знакомство  с массивами
 * - Объявление
 * - Индексация
 * - Длина
 * - Индекс последнего элемента
 * - Переопределение
 *
 * 'Mango', 'Kiwi', 'Poly', 'Ajax'
 */


// const arr = ['Mango', 'Kiwi', 'Poly', 'Ajax',1,2,4,6]

// const arrLength = arr.length;
// const lastElementIndex = arrLength-1

// arr[lastElementIndex] = 'End'
// console.log(arr);

/*
 * Передача по ссылке и по значению
 * - Примитивы и сложные типы
 * - Ссылочное равенство (referential equality)
 */

// num, string, bool, null, undefined, symbol

// let arr1 = [1,2,3];
// let arr2 = arr1;

// console.log(arr1 === arr2)


// console.log(arr2);



/*
 * Перебор (итерация) массива
 * - for - если нужен индекс или нужно изменить элемент массива
 * - for...of - если индекс не нужен и в массиве ничего менять не нужно
 */

const arr = ['Mango0','Mango1', 'Kiwi2', 'Poly3', 'Ajax4','Mango5', 'Kiwi6', 'Poly7', 'Ajax8','Mango9']
                       
                       
// for(let i=arr.length-1;i>-1;i--){
//     console.log(arr[i]);
// }

// const newArr = [];
// for(const elem of arr){
//     if(elem.includes('Mango')){
//         // const len = newArr.length; // 1
//         // newArr[len] = elem;
//         if(elem === 'Mango1')break;
//         newArr.push(elem)
//     }
// }

// console.log(newArr);




/*
 * - split
 * - join
 * - indexOf
 * - includes
 * - push
 * - pop
 * - shift
 * - unshift
 */

// 11

// const arr123 = ['START', 'Mango','Kiwi','Poly', 'Ajax','Poly', 'Ajax','Poly1', 'Ajax2'];

// arr123.includes('Mango') || arr123.includes('Poly')

// const indexes = [];

// for(let i=0;i<friends.length; i++){
//     if(friends[i] === 'Ajax'){
//         console.log(i, friends[i]);
//         indexes.push(i);
//     }
// }

// console.log(indexes);

// const myStr = '';
// const newArr = myStr.split('')
// console.log(newArr);

// const result = friends.join('');
// console.log(result);

// const index = friends.indexOf('Ajax')
// console.log(index);

// const index = friends.lastIndexOf('Ajax123')
// console.log(index);



// const newLength = friends.push('hello','world')
// console.log(newLength);

// const oldElem = friends.pop();
// console.log(oldElem);
// console.log(friends);

// console.log(friends.shift());
// friends.unshift('START')
// friends.unshift('After Start')
// console.log(friends);


/* 
    - slice
    - splice
    - concat
*/


const friends = ['START', 'Mango','Kiwi','Poly', 'Ajax','Poly', 'Ajax','Poly1', 'Ajax2'];

friends.splice(3, 3,'HELLO', 'WORLD')

console.log(friends);
// // const copyArr = friends.slice(1,2);
// console.log(friends);
// // console.log(copyArr);
// friends.splice(2,1)
// console.log(friends);
// const arr1 = friends.slice(1,3);
// const arr2 = friends.slice(-2);
// const arr3 = friends.slice(1,5);

// const res = arr1.concat(arr2,arr3)

// console.log(res);

