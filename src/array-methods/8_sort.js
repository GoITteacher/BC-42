/*

 - Сортує і змінює вихідний масив.
 - Повертає змінений масив, тобто посилання на відсортований вихідний.
 - За замовчуванням сортує за зростанням.
 - Сортування відбувається шляхом приведення значень до рядка і порівняння порядкових номерів у таблиці Unicode.
 
*/

let cars = [
  {
    make: 'Honda',
    model: 'CR-V',
    type: 'suv',
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: 'Honda',
    model: 'Accord',
    type: 'sedan',
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: 'Mazda',
    model: 'Mazda 6',
    type: 'sedan',
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: 'Mazda',
    model: 'CX-9',
    type: 'suv',
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: 'Toyota',
    model: '4Runner',
    type: 'suv',
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Sequoia',
    type: 'suv',
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Tacoma',
    type: 'truck',
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'F-150',
    type: 'truck',
    amount: 6,
    price: 27110,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Fusion',
    type: 'sedan',
    amount: 6,
    price: 22120,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Explorer',
    type: 'suv',
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

const str = ['Hello', 'World', 'Roman', 'Vasya'];
const nums = [11, 1, 10, 14, 20, 2, 22];

const result = cars
  .filter(car => car.onSale)
  .sort((a, b) => {
    if (a.amount !== b.amount) return a.amount - b.amount;
    return b.price - a.price;
  })
  .sort(({ make: make1 }, { make: make2 }) => {
    return make1.localeCompare(make2);
  })
  .map(({ make, price }) => {
    return {
      make,
      price,
    };
  });

console.log(result);
