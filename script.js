// script.js

// Selectors
const navLinks = document.querySelectorAll('.nav-link');
const cartLink = document.querySelector('.cart-link');
const cartList = document.querySelector('.cart-list');
const cartTotal = document.querySelector('.cart-total');
const checkoutBtn = document.querySelector('.checkout-btn');
const products = document.querySelectorAll('.product');
const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');

// Cart object
let cart = {};

// Event listeners
navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(`Nav link clicked: ${link.textContent}`);
  });
});

cartLink.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('Cart link clicked');
  // Toggle cart visibility
  cartList.classList.toggle('visible');
});

addToCartBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const productId = btn.parentNode.dataset.productId;
    const product = products[productId - 1];
    const productName = product.querySelector('h2').textContent;
    const productPrice = product.querySelector('.price').textContent;
    console.log(`Add to cart: ${productName} (${productPrice})`);

    // Add product to cart
    if (!cart[productId]) {
      cart[productId] = { name: productName, price: productPrice, quantity: 1 };
    } else {
      cart[productId].quantity++;
    }

    // Update cart total
    updateCartTotal();

    // Update cart link text
    cartLink.textContent = `Cart (${Object.keys(cart).length})`;
  });
});

checkoutBtn.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('Checkout button clicked');
  // Implement checkout logic here
});

// Functions
function updateCartTotal() {
  let total = 0;
  Object.values(cart).forEach((product) => {
    total += product.price * product.quantity;
  });
  cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}

// Initialize cart total
updateCartTotal();
