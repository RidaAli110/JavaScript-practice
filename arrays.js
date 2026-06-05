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

//Array Methods add 
//Push method add to end
const orders = ['laptop', 'mouse', 'keyboard'] 
orders.push('monitor');
console.log(orders);
console.log(`There are now ${orders.length} orders in the system`); 
const colors = ['Red', 'Blue'];
colors.push('Green');
console.log(colors);
//Unshift method adds to start of array
const tasks = ['Fix navbar', 'Update footer', 'Deploy website'];
tasks.unshift('Fix Payment Bug')
console.log(tasks);
console.log(tasks[0]);

//Array Methods remove 
// pop method removes last
const warehouse = ['TV', 'fridge', 'microwave', 'fan']; 
warehouse.pop();
console.log(warehouse);
console.log(`there are now ${warehouse.length} items in the warehouse`);
// shift method removes first
const queue = ['Ali', 'Sarah', 'John', 'Emma'];
queue.shift();
console.log(queue);
console.log(`${queue.length} customers remain`);
// splice method removes specifically
const users = ['Alex', 'Sarah', 'Mike', 'Emma', 'John'];
users.splice(2, 1);
console.log(users);
console.log(`${users.length} users remain`);
//slice method
const visitors = ['Ali', 'Sarah', 'John', 'Emma', 'David', 'Sophie']; 
const newvisitorArray = visitors.slice(0, 3);
console.log(newvisitorArray);
console.log(visitors);

//Includes method
const permission = ['read', 'write', 'delete'];
const check = permission.includes('delete');
console.log(check);
const checkAdmin = permission.includes('admin');
console.log(checkAdmin);

//indexOf method
const bugs = ['login error', 'Navbar Broken', 'Payment Failed', 'Dark Mode Bug'];
const findPaymentFailed = bugs.indexOf(('Payment Failed'));
console.log(findPaymentFailed);
const findServerCrash = bugs.indexOf('Server Crash');
console.log(findServerCrash);

//Join method
const errors = ['API Failed', 'Timeout Error', 'Database Offline'];
const stringErrors = errors.join( ' | ' );
console.log(stringErrors);

//combined challenge for Array Methods
const admins = ['Alex', 'Sarah', 'Mike'];
admins.push('Emma');
console.log(admins);
admins.splice(1, 1)
console.log(admins);
const checkMike = admins.includes('Mike');
console.log(checkMike);
const newAdminCheck = admins.slice(0, 2)
console.log(newAdminCheck);
const createString = newAdminCheck.join(", ")
console.log(createString);

// destructuring arrays practice
const fruits = ['apple', 'banana'];
const [first, second] = fruits;
console.log(first);
console.log(second);
const animals = ['cat', 'dog', 'rabbit'];
const [first2, , third] = animals;
console.log(first2);
console.log(third);







