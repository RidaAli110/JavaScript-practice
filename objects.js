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





