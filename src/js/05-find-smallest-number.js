/*
 * Напиши функцию findSmallesNumber(numbers) для поиска самого маленького числа в массиве,
 * при условии что числа уникальные (не повторяются).
 */

// console.log(findSmallesNumber([3, 8, 12, -2, 15])); // -2
// console.log(findSmallesNumber([100, 54, 8, 12, 47])); // 8
// console.log(findSmallesNumber([7, 21, 84, 15, 4])); // 4

/* function findSmallesNumber(numbers){
    // let min = numbers[0]
    // let min = Infinity;
    for(let num of numbers){
        if(num < numbers[0]){
            numbers[0] = num
        }
    }
    return numbers[0];
} */

// function findNumbers(numbers, min){
//     const arr = [];

//     for(let num of numbers){
//         if(num < min){
//             arr.push(num)
//         }
//     }

//     return arr;
// }

// console.log(findNumbers([5,1,5,8,3,6,8,2,5], 10)); 


function findNumbers(numbers){
    let min1 = Infinity;
    for(let num of numbers){
        if(num<min1){
            min1 = num;
        }
    }
    console.log(min1);

    let min2 = Infinity;
    for(let num of numbers){
        if(num<min2 && num != min1){
            min2 = num;
        }
    }
    console.log(min2);
}

console.log(findNumbers([5,1,5,8,0,6,8,2,5], 10)); 