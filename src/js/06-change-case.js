/*
 * Напиши функцию changeCase(string) которая заменяет регистр
 * каждого символа в строке на противоположный.
 * Например, если строка «JavaScript», то на выходе должена быть строка «jAVAsCRIPT». 
 */


let str = 'JavaScript';

function changeCase(string){
    let res = '';
    for(let i=0;i<string.length;i++){
        let letter = string[i];

        // якщо true - то літера у верхньому регістрі
        if(letter === letter.toUpperCase()){ 
            res+=letter.toLowerCase();
        }else{
            res+=letter.toUpperCase();
        }
    }

    return res;
}

console.log(changeCase(str));


