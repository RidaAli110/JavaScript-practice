const cart = [
  { name: 'Mouse', price: 20 },
  { name: 'Keyboard', price: 50 },
  { name: 'Monitor', price: 200 }
];
const total = cart.reduce((acc, cur) => acc + cur.price, 0);
console.log(total);

const users = [
  { name: 'Ali', age: 20 },
  { name: 'Sara', age: 25 },
  { name: 'John', age: 30 }
];
const totalAge = users.reduce((acc, cur) => acc + cur.age, 0);
console.log(totalAge);

const numbers = [5, 10, 15, 20];
const total = numbers.reduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log(total);