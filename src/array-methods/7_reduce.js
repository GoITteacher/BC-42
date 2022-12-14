// /*

//  - Не змінює оригінальний масив.
//  - Поелементо перебирає оригінальний масив.
//  - Повертає все, що завгодно.
//  - Робить все, що завгодно.

// */

// // const arr = [1, 2, 3, 4, 5, 6]; //, 7, 4, 3, 2, 4, 5, 62, 1

// // const result = arr.reduce((prev, value, index, array) => {
// //   if (value % 2 === 0) prev.push(value);
// //   return prev;
// // }, []);

// // console.log(result);

// // =======
// const cars = [
//   {
//     make: 'Honda',
//     model: 'CR-V',
//     type: 'suv',
//     amount: 14,
//     price: 24045,
//     onSale: true,
//     owners: [1, 2, 3],
//   },
//   {
//     make: 'Honda',
//     model: 'Accord',
//     type: 'sedan',
//     amount: 2,
//     price: 22455,
//     onSale: true,
//     owners: [1, 2, 3],
//   },
//   {
//     make: 'Mazda',
//     model: 'Mazda 6',
//     type: 'sedan',
//     amount: 8,
//     price: 24195,
//     onSale: false,
//     owners: [1, 2, 3],
//   },
//   {
//     make: 'Mazda',
//     model: 'CX-9',
//     type: 'suv',
//     amount: 7,
//     price: 31520,
//     onSale: true,
//     owners: [1, 2, 3],
//   },
//   {
//     make: 'Toyota',
//     model: '4Runner',
//     type: 'suv',
//     amount: 19,
//     price: 34210,
//     onSale: false,
//     owners: [1, 2, 3],
//   },
//   {
//     make: 'Toyota',
//     model: 'Sequoia',
//     type: 'suv',
//     amount: 16,
//     price: 45560,
//     onSale: false,
//     owners: [1, 2, 3],
//   },
//   {
//     make: 'Toyota',
//     model: 'Tacoma',
//     type: 'truck',
//     amount: 4,
//     price: 24320,
//     onSale: true,
//     owners: [1, 2, 3],
//   },
//   {
//     make: 'Ford',
//     model: 'F-150',
//     type: 'truck',
//     amount: 11,
//     price: 27110,
//     onSale: true,
//     owners: [1, 2, 3],
//   },
//   {
//     make: 'Ford',
//     model: 'Fusion',
//     type: 'sedan',
//     amount: 13,
//     price: 22120,
//     onSale: true,
//     owners: [1, 2],
//   },
//   {
//     make: 'Ford',
//     model: 'Explorer',
//     type: 'suv',
//     amount: 6,
//     price: 31660,
//     onSale: false,
//     owners: [1],
//   },
// ];

// const result = cars.reduce((prev, { owners }, index, array) => {
//   owners.forEach(owner => {
//     if (!prev.includes(owner)) {
//       prev.push(owner);
//     }
//   });

//   if (index === array.length - 1) {
//     return prev.length;
//   }

//   return prev;
// }, []);

// console.log(result);
