const age = 18;
const status = age >= 18 ? 'adult' : 'minor';
console.log(status);

const isLoggedIn = false;
const access = isLoggedIn ? 'Access Granted' : 'Access Denied';
console.log(access);

const age2 = 15;
const hasParent = true;
const message =
  age2 >= 18
    ? "Enjoy the movie!"
    : hasParent
    ? "You can enter with a parent."
    : "Entry denied.";
console.log(message);

const cartItems = 3;
const message2 = cartItems > 0
  ? "Proceed to Checkout"
  : "Your cart is empty";
console.log(message2);