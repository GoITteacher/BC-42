/*
 - Метод flatMap(callback) - аналогічний методу map(),
 - але застосовується у випадках, коли результат - це багатовимірний масив,
 - який необхідно «розгладити».
*/

let users = [
  {
    name: '123',
    friend: ['Jonh1', 'Marta1'],
  },

  {
    name: '123',
    friend: ['Jonh2', 'Marta3'],
  },

  {
    name: '123',
    friend: ['Jonh4', 'Marta5'],
  },

  {
    name: '123',
    friend: ['Jonh6', 'Marta7'],
  },
];

const res = users.flatMap(user => {
  return user.friend;
});

console.log(res);
