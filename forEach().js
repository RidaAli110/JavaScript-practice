const foods = ['pizza', 'burger', 'pasta', 'rice', 'salad'];
foods.forEach(function(item){
     console.log(`I like ${item}`);
});

const colors = ['red', 'green', 'blue'];
colors.forEach((item, index) => console.log(`${index + 1}. ${item}`));

const prices = [10, 25, 50, 100];
prices.forEach((item) => console.log(`£${item}`));

const names = ['Ali', 'Sara', 'John', 'Mary'];
names.forEach((item) => console.log(`${item} has ${item.length} letters`));

const scores = [85, 92, 78, 100];
scores.forEach((item, index) => console.log(`Student ${index + 1} scored ${item} points`));

const numbers = [2, 4, 6, 8];
numbers.forEach((item) => console.log(`${item} doubled is ${item * 2}`));

const todos = ['Study JavaScript', 'Build a project', 'Push to GitHub'];
todos.forEach(function(item){
     console.log(`[ ] ${item}`);
});

const fruits = ['Apple', 'Banana', 'Orange', 'Mango'];
fruits.forEach((fruit, index) => {
  console.log(`${index + 1}. ${fruit}`);
});

const animals = ['Cat', 'Dog', 'Rabbit', 'Bird'];
animals.forEach((animal, index) => {
  console.log(`Animal ${index + 1}: ${animal}`);
});
