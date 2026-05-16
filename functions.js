"use strict";
//invoking a function
function  myName(){
     console.log('rida'); 
}
myName();

//function expressions
let colours = function(){
     console.log('red, green, blue');
    
}
colours();
let myColours = colours;
myColours();

//Parameters and arguments
function checkOutTotal(itemPrice, shippingCost) {
     console.log(`Total: £${itemPrice + shippingCost}`);
}
checkOutTotal(10, 15);
checkOutTotal(20, 5);
function sendMessage(username, message) {
     console.log(`${username} sent ${message}`);
}
sendMessage('Alex', 'Hello everyone!');

function logInUser(username = 'guest', password) {
     if (password === '12345') {
          console.log(`Welcome back, ${username}`);
     } else {
          console.log('Incorrect password');
     }
}
logInUser('james', '12345')
logInUser('alice', '3456')
logInUser(undefined, '12345'); 

//return
function calculateTotal(price, quantity) {
     return price * quantity;
}
let total = calculateTotal(10, 3);
console.log(total);
function checkPassword(password){
     if (password === '12345') {
          return 'Access granted'
     } else {
          return 'Access denied'
     }
}
let check = checkPassword('12345');
console.log(check);
function calculateDiscount(price, discount) {
     return price - discount;
}
let finalPrice = calculateDiscount(100, 20);
console.log(finalPrice);

//js scope
function showProfile() {
     let username = 'MyName';
     console.log(username);
}
showProfile();
//console.log(username); this will cause a error because the username variable is created
// inside the function, which means it cannot be accessed outside the function.

//Arrow functions
const multiply = (a, b) => a * b;
console.log(multiply(4, 4));
// Online Shop Arrow Functions Practice
const applyDiscount= price => price - 10;
console.log(applyDiscount(40));
const createMessage = product => `Your order for ${product} has been placed`;
console.log(createMessage('keyboard'));
const freeDelivery = total => {
     if (total >= 50) {
          return 'free delivery';
     } else {
          return 'delivery costs £5';
     }
}
console.log(freeDelivery(40));
console.log(freeDelivery(51));
const checkVip = points => {
     if (points > 100) {
          return 'Vip customer';
     } else {
          return 'regular customer';
     }
}
console.log(checkVip(101));
console.log(checkVip(99));

//Functions calling other Functions
function calculateDelivery(distance) {
     if(distance > 5) {
          return 7
     }
     else {
          return 3
     }
}
function calculateTotal(foodPrice, distance){
     const delivery = calculateDelivery(distance);
     const finalTotal = delivery + foodPrice;
     return finalTotal;
}
function printReceipt(customerName, foodPrice, distance) {
     const finalTotal = calculateTotal(foodPrice, distance)
     return `${customerName}'s order  total is £${finalTotal}`
}
console.log(printReceipt('Jennie', 17, 10));
function formatName(name) {
     return name.toUpperCase()
}
function greetUser(name){
     const message = formatName(name);
     console.log(`welcome ${message}`);
     
}
greetUser('Alex');
function calculateTip(amount){
     return amount * 0.10;
}
function printBill(customer, amount) {
     const finalAmount = calculateTip(amount) + amount;
     const message =  finalAmount;
     console.log(`${customer} needs to pay £${message}`);
     
}
printBill('Alexa', 200);
//movie ticket system,(practice after not understanding.)
function getTicketPrice(age) {
     if (age < 18) {
          return 8;
     } else {
          return 15;
     }
}
function printTicket(name, age) {
     const final = getTicketPrice(age);
     console.log(`${name} needs to pay £${final}`);
     
}
printTicket('Riley', 19)
//online coffee shop
function coffeeSizePrice(size){
     if (size === 'large') {
          return 10
     } else if(size === 'medium') {
          return 8;
     }
     else {
          return 6;
     }
}
function addSyrup(wantSyrup) {
     if (wantSyrup === true) {
          return 2;
     } else {
          return 0;
     }
}
function prinReceipt(name, size, wantSyrup) {
     const cofeeSize = coffeeSizePrice(size);
     const syrup = addSyrup(wantSyrup);
     const finalPrice = cofeeSize + syrup;
     console.log(`${name}'s coffee costs £${finalPrice}`);
     
}
prinReceipt('Sam', 'large', false); 
//understand functions calling other functions  now, made no mistakes

//Building a calculator (freeCodeCamp)
function calculateSum(num1, num2) {
  return num1 + num2;
}
console.log(calculateSum(2, 5));
console.log(calculateSum(10, 10));
console.log(calculateSum(5, 5));
function calculateDifference(num1, num2) {
  return num1 - num2;
}
console.log(calculateDifference(22, 5));
console.log(calculateDifference(12, 1));
console.log(calculateDifference(17, 9));
function calculateProduct(num1, num2) {
  return num1 * num2;
}
console.log(calculateProduct(13, 5));
function calculateQuotient(num1, num2) {
  return num2 === 0 ? "Error: Division by zero" : num1 / num2;
}
console.log(calculateQuotient(7, 11));
console.log(calculateQuotient(3, 0));
function calculateSquare(num) {
  return num ** 2;
}
console.log(calculateSquare(2));
console.log(calculateSquare(9));
function calculateSquareRoot(num) {
  return Math.sqrt(num);
}
console.log(calculateSquareRoot(25));
console.log(calculateSquareRoot(100));
//more function practice
function movieTicketPrice(age) {
     if (age < 13) {
          return 'child ticket';
     } else {
          return 'adult ticket';
     }
}
console.log(movieTicketPrice(11));
console.log(movieTicketPrice(19));

function gamingXP(xp){
     return xp + 50;
}
console.log(gamingXP(100));

function coffeeMachine(type) {
     if (type === 'latte'){
     return `making ${type}`
     }
     else if (type === 'cappuccino'){
     return `making ${type}`
     }
      else {
     return `unknown drink`
     }
}
console.log(coffeeMachine('tea'));
console.log(coffeeMachine('latte'));

function passwordChecker(password) {
     if (password.length >= 8) {
          return 'strong password';
     }
     else {
          return 'weak password';
     }
}
console.log(passwordChecker('fdytu'));
console.log(passwordChecker('fdfrgdvytu'));

function attackBoss(damage){
     return 10;
}
function bossFight(){
     let damageAmount = attackBoss();
     console.log(damageAmount);
}
bossFight();

function pizzaPrice(size){
     if (size === 'small') {
          return 5;
     }
     else if(size === 'medium'){
          return 10
     }
      else if(size === 'large'){
          return 15
     }
     else {
          return 'invalid size'
     }
}
console.log(pizzaPrice('medium'));

function gymPrice(age, wantsTrainer){
     let price;
     if (age < 18) {
         price = 15;
     }
     else  {
         price = 25
     }
    if (wantsTrainer === true) {
     return price = price + 10;
    }
    return price;
}
console.log(gymPrice(19, false));

