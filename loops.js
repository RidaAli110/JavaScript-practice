//For Loop
for (let i = 1; i <=5; i++) {
     console.log(`Number ${i}`); 
}
for (let i = 0; i <= 10; i += 2) {
     console.log(i);
     
}
for (let i = 10; i >= 1; i--) {
     console.log(i);
}
for (let i = 1; i <= 20; i +=5) {
     console.log(i);    
}
for (let i = 2; i <= 12; i+= 2) {
     console.log(`even ${i}`);  
}

//While/do while loop
let count = 5;
while (count >= 1) {
     console.log(`countdown: ${count}`);
     count --;  
}
console.log('blast off');

let attempts = 1;
do {
     console.log(`attempt ${attempts}`);
     attempts ++;
} while (attempts <= 3);
console.log('access denied');

let energy = 3;
while (energy >= 1) {
     console.log(`energy left: ${energy}`);
     energy --;
}
console.log('game over');

//For in loops
const movie = {
     title: 'batman',
     year: 2022,
     rating: 9,
}
for (let key in movie) {
     console.log(`${key}: ${movie[key]}`);
     
}
const house = {
     type: 'detached',
     build: 'brick',
     year: 2000,
     price: 250000,
     driveway: true
}
for (let key in house) {
     console.log(`${key}: ${house[key]}`);
}
const game = {
     title: 'Minecraft',
     players: 8
};
console.log(game.title);
const games = {
     title: 'Minecraft',
     players: 8
};
let key = 'title';
console.log(game[key]);

//For of loop
let colors = ['red', 'orange', 'yellow', 'green', 'blue'];
for (let x of colors) {
     console.log(x);   
}

//Looping in arrays
const color = ['red', 'blu', 'green'];
for(let i = 0; i < color.length; i++) {
     console.log(color[i]); 
}
const movies = ['bee movie', 'ice age', 'madagascar', 'rio 2'];
for(let i = 0; i < movies.length; i++){
     console.log(i);
}
const numbers = [5, 10, 15];
for(let i = 0; i < numbers.length; i++) {
     console.log(numbers[i] + 2);
}
const numbers2 = [3, 6, 9, 12, 15, 18];
for(let i = 0; i < numbers2.length; i++) {
     if(numbers2[i] > 10) {
          console.log(numbers2[i]);
     }
}
const nums = [4, 7, 10, 13];
for(let i = 0; i < nums.length; i++){
     if (nums[i] % 2 === 0) {
          console.log(`${nums[i]} is even`);  
     } else {
          console.log(`${nums[i]} is odd`);
     }
}

// for of loop practice 02.06.26
const languages = ['HTML', 'CSS', 'JavaScript', 'React'];
for (let x of languages) {
     console.log(`I am learning ${x}`);
}
const studyHours = [2, 3, 1, 4, 2];
for (let x of studyHours) {
     console.log(`total study hours: ${x}`);
}