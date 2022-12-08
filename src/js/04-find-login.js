/*
 * Напиши функцию findLogin(allLogins, login) для поиска логина
 * - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
 * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'
 */

const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];

/* function findLogin(allLogins, login){
    // if(allLogins.includes(login)){
    //     console.log(`Пользователь ${login} найден.`);
    // }else{
    //     console.log(`Пользователь ${login} не найден.`);
    // }

    for(let item of allLogins){
        if(item === login){
            console.log('Ok');
            return;
        }
    }

    console.log('Not Ok');
} */

function getMessage(allLogins, login){
    for(let item of allLogins){
        if(item === login){
            return `Пользователь ${login} найден.`
        }
    }
    return `Пользователь ${login} не найден.`
}

const result = getMessage(logins, 'k1b3st')
console.log(result);