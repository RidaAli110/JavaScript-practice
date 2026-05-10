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
