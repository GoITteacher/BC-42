const name = 'TEST';

const user = {
  items: [],

  addItem(item) {
    this.items.push(item);
  },

  removeItem(index) {
    this.items.splice(index, 1);
  },
};

user.sayHello();
