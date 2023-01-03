/*
 * Создание промиса
 *  - Класс Promise
 *  - resolve
 *  - reject
 *  - Promise.prototype.then(onResolve, onReject)
 */

/* const promise = new Promise((resolve, reject) => {
  const rand = Math.random();
  console.log(rand);

  setTimeout(() => {
    if (rand > 0.5) {
      resolve();
    } else {
      reject();
    }
  }, 300);
});

console.log(promise);

promise.then(onFulfilled, onRejected);

promise.then(onFulfilled).catch(onRejected);

promise
  .then(value => {
    console.log(value);
  })
  .catch(value => {
    console.log(value);
  });

function onFulfilled(result) {
  console.log('onFulfilled -> onFulfilled');
  console.log(`✅ ${result}`);
}

function onRejected(error) {
  console.log('onRejected -> onRejected');
  console.log(`❌ ${error}`);
} */

/*
 * Цепочки промисов (chaining)
 * Promise.prototype.catch(error)
 * Promise.prototype.finally()
 */

const promise = new Promise((resolve, reject) => {
  reject('Error');
});

promise
  .then(value => {
    console.log(value);
  })
  .then(value => {
    console.log(value);
    return 'Hello';
  })
  .then(value => {
    console.log(value);
  })
  .catch(err => {
    console.log(err);
    return 'Error1';
  })
  .then(value => {
    console.log(value);
  })
  .finally(() => {
    console.log('End');
  });
