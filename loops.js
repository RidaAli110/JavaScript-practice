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

