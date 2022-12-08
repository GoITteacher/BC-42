/*
 * Напиши функцию logItems(items) для перебора и логирования массива
 */
const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
function logItems(items){
    for(let item of items){
        console.log(item);
    }

    // for(let i=0;i<items.length;i++){
    //     console.log(i, items[i]);
    // }
}

logItems(cart)