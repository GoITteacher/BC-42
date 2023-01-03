const createPromise = (temp, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (temp) {
        resolve(`Ok - ${delay}`);
      } else {
        reject(`Error - ${delay}`);
      }
    }, delay);
  });
};

const p1 = createPromise(true, 3000);
const p2 = createPromise(false, 2000);
const p3 = createPromise(true, 6000);
const p4 = createPromise(true, 5000);

const promises = [p1, p2, p3, p4];

/* Promise.allSettled(promises)
  .then(arr => {
    console.log('The End!', arr);
  })
  .catch(err => {
    console.log(err);
  }); */

Promise.race(promises)
  .then(arr => {
    console.log('The End!', arr);
  })
  .catch(err => {
    console.log(err);
  });
