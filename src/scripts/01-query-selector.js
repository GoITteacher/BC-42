/* 
document.querySelector();
document.querySelectorAll();
document.getElementById
document.getElementsByClassName
document.getElementsByName
document.getElementsByTagName
obj.closest(cssSelector)
*/

const obj = document.querySelectorAll(`.site_nav`);
console.log(obj);

const items = obj[1].getElementById('site_item');
console.log(items);

// const byClass = document.getElementsByClassName('site_item');
// console.log(byClass);

// const byTag = document.getElementsByTagName('li');
// console.log(byTag);

// ===================================================

// const byId = document.getElementById('findItem');
// console.log(byId);

// document.getElementsByName;
