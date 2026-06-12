'use strict';
// dot vs bracket notation
//Gaming Profile System
const player =  {
     username: 'alex127',
     level: 4,
     favouriteGame: 'Mario',
     coins: 200
}
console.log(player.level);
const key = 'coins';
console.log(player[key]);
console.log(player.key); //undefined
console.log(player);
// Online Store Customer System
const store = {
     username: 'mr customer',
     item: 'laptop',
     price: '£100',
     delievrySpeed: '2 days'
}
console.log(store.item);
const keyPrice = 'price';
console.log(store[keyPrice]);
console.log(store['delievrySpeed']);
console.log(store.keyPrice); //undefined 
store ['discount Code'] = 'DISCODE';
console.log(store['discount Code']);

//object methods
//object.keys method
const laptop = {
     brand: 'lenovo',
     ram: '16GB',
     price: 900
};
const keys = Object.keys(laptop);
console.log(keys);
console.log(keys[1]);

//object values
const movie = {
  title: 'Interstellar',
  year: 2014,
  rating: 9
};
const values = Object.values(movie);
console.log(values);
console.log(values[1]);

//object entries
const phone = {
  brand: 'Apple',
  battery: 80,
  charging: true
};
const entries = Object.entries(phone);
console.log(entries);
console.log(entries[1][0]);
console.log(entries[1][1]);

//this keyword
const pet = {
  name: 'Milo',
  age: 3,

  introduce() {
    console.log(`${this.name} is ${this.age} years old`);
  }
};
pet.introduce();

// practice 07.06.26
const book = {
  title: 'JavaScript basics',
  author: 'John Doe',
  tags: ['javascript', 'programming']
};
console.log(book.tags[1]);

// practice 11.06.36
const book = {
  title: 'JavaScript Basics',
  author: 'John',
  pages: 250,
};
console.log(book);
console.log(book.title);
book.pages = 300;
book.isPublished = true;
console.log(book); 

const person = {
  name: 'Alex',
  age: 25,
  city: 'London',
};
console.log(person.name);
person.age = 26;
person.job = 'Developer';
delete person.city;
console.log(person);










