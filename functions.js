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