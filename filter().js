const products = [
  { name: 'Laptop', inStock: true },
  { name: 'Mouse', inStock: false },
  { name: 'Keyboard', inStock: true },
  { name: 'Monitor', inStock: false }
];
const availableProducts = products.filter(function(item){
     return item.inStock === true;
});
console.log(availableProducts);

const users = [
  { username: 'john', isActive: true },
  { username: 'sarah', isActive: false },
  { username: 'alex', isActive: true },
  { username: 'emma', isActive: false }
];
const activeUsers = users.filter((user) => user.isActive === true);
console.log(activeUsers);

const products2 = [
  { name: 'Mouse', price: 20 },
  { name: 'Keyboard', price: 75 },
  { name: 'Monitor', price: 250 },
  { name: 'USB Cable', price: 10 }
];
const expensiveProducts = products2.filter((product) => product.price >= 50);
console.log(expensiveProducts);

const jobs = [
  { title: 'Frontend Developer', remote: true },
  { title: 'Backend Developer', remote: false },
  { title: 'UI Designer', remote: true },
  { title: 'Project Manager', remote: false }
];
const remoteJobs = jobs.filter((job) => job.remote);
console.log(remoteJobs);

const users2 = [
  { name: 'John', age: 17, isActive: true },
  { name: 'Sarah', age: 22, isActive: false },
  { name: 'Alex', age: 25, isActive: true },
  { name: 'Emma', age: 16, isActive: true },
  { name: 'Mike', age: 30, isActive: false },
  { name: 'Lisa', age: 19, isActive: true }
];
const activeAdults = users2.filter((user2) => user2.isActive && user2.age >= 18);
console.log(activeAdults);
console.log(activeAdults.length);

const movies = [
  { title: 'Inception', rating: 8.8, watched: true },
  { title: 'Avatar', rating: 7.8, watched: false },
  { title: 'The Dark Knight', rating: 9.0, watched: true },
  { title: 'Transformers', rating: 7.0, watched: true },
  { title: 'Interstellar', rating: 8.7, watched: false }
];
const topMovies = movies.filter((movie) => movie.watched && movie.rating >= 8);
console.log(topMovies);

const ages = [12, 18, 21, 15, 30, 16, 25];
const adults = ages.filter((age) => age >= 18);
console.log(adults);