const products = [
  { name: 'Laptop', price: 899, inStock: true },
  { name: 'Mouse', price: 25, inStock: false },
  { name: 'Keyboard', price: 79, inStock: true },
  { name: 'Monitor', price: 199, inStock: true },
  { name: 'Headphones', price: 49, inStock: false }
];
const availableProducts = products.filter((product) => product.inStock )
.map(product => `${product.name} - £${product.price}`)
console.log(availableProducts);

const students = [
  { name: 'Rida', grade: 85 },
  { name: 'Alex', grade: 92 },
  { name: 'John', grade: 78 }
];
const studentNames = students.map((student) => student.name);
console.log(studentNames);

const prices = [100, 50, 75, 200];
const salePrices = prices.map((price) => price - price / 10)
console.log(salePrices);

const users = [
  { email: 'rida@test.com', active: true },
  { email: 'alex@test.com', active: false },
  { email: 'john@test.com', active: true }
];
const activeUsers = users.filter((user) => user.active)
.map((user) => user.email );
console.log(activeUsers);

const movies = [
  { title: 'Inception', rating: 9.0, watched: true },
  { title: 'Avatar', rating: 7.8, watched: true },
  { title: 'Interstellar', rating: 8.6, watched: false },
  { title: 'The Dark Knight', rating: 9.1, watched: true },
  { title: 'Titanic', rating: 7.5, watched: false }
];
const watchedHighRating = movies.filter((movie) => movie.watched && movie.rating >= 9)
.map((movie) => `⭐ ${movie.title}`);
console.log(watchedHighRating);

const orders = [
  { id: 101, customer: 'Rida', total: 250, paid: true },
  { id: 102, customer: 'Alex', total: 120, paid: false },
  { id: 103, customer: 'John', total: 500, paid: true },
  { id: 104, customer: 'Sarah', total: 80, paid: true }
];
const paidOrders = orders.filter((order) => order.paid)
.map((order) => `Order #${order.id} - ${order.customer} (£${order.total})`);
console.log(paidOrders);
