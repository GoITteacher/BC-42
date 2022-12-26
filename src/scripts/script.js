const arr = [3, 4, 6, 2, 7, 9, 3, 8, 0, 3, 1, 7, 9, 0];

let counter = 0;
const newArr = arr
  .filter(item => {
    counter++;
    return item > 6;
  })
  .sort((a, b) => {
    counter++;
    return a - b;
  });
console.log(counter);
console.log(newArr);
