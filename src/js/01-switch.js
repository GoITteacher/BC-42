const type = "vip";
let sale;

// if(type === "VIP" || type === 'vip'){
//     sale = 20;
// }else if(type === "Standart"){
//     sale = 10;
// } else {
//     sale = 5
// }


// debugger;
// switch(type){
//     case 'vip':
//         console.log('Type is Vip');
//         console.log('Sale = 20');
//         sale = 20;
//     break;

//     case 'standart':
//         console.log('Type is standart');
//         console.log('Sale = 10');
//         sale = 10;
//     break;

//     default:
//         console.log('Error Type');
//     break;
// }



/*
 * Напиши скрипт выбора стоимости отеля по кол-ву звёзд.
 * 1 - 20$, 2 - 30$, 3 - 50$, 4 - 70$, 5 - 120$
 *
 * Если в переменной stars что-то кроме чисел 1-5, выведи строку
 * 'Такого кол-ва звезд нет'
 */

let stars = 34;
let price;

switch(stars){
    case 1: price = 10; break;
    case 2: price = 30; break;
    case 3: price = 50; break;
    case 4: price = 70; break;
    case 5: price = 120; break;
}

/////////////////////




// 10,20,30 => true
// null, undefined => false

    
// if(price) console.log(price);
// else console.log('Такого кол-ва звезд нет');

/*
 * Напиши скрипт выбора опции доставки товара.
 * Опция хранится в переменной option: 1 - самовывоз, 2 - курьер, 3 - почта
 *
 * В переменную message записать сообщение в зависимости от опции.
 * - 'Вы сможете забрать товар завтра с 12:00 в нашем офисе'
 * - 'Курьер доставит заказ завтра с 9:00 до 18:00'
 * - 'Посылка будет отправлена сегодня'
 * - 'Вам перезвонит менеджер'
 */

const option = 345;
let message;

switch (option){
    case 1:
        message = 'Вы сможете забрать товар завтра с 12:00 в нашем офисе';
        break;

    case 2: 
        message = 'Курьер доставит заказ завтра с 9:00 до 18:00';
        break;

    case 3: 
        message = 'Посылка будет отправлена сегодня';
        break;
    
    default: message = 'Вам перезвонит менеджер';
}

console.log(message);

