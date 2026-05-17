'use strict'
//Array Introduction
const calcAge = function(birthYear) {
     return 2037 - birthYear
}
//basic array practice
const years = [1990, 1967, 2002, 2010, 2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[4]);
console.log(age1, age2, age3);
const ages = [calcAge(years[0]), calcAge(years[1]),
calcAge(years[4])];
console.log(ages);
const inventory = ['sword', 'shield', 'potion', 'bow', 'arrow']
console.log(inventory);
console.log(inventory[0]);
console.log(inventory[4]);
inventory[1] = 'armor';
console.log(inventory);
inventory.push('bandage');
console.log(inventory);
inventory.pop();
console.log(inventory);
console.log(inventory.length);
console.log(`My inventory has ${inventory.length} items`);






