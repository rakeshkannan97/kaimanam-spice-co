// script.js

// Functionality for shopping cart
let cart = [];

// Add to cart function
function addToCart(product) {
    cart.push(product);
    console.log(`${product} added to cart.`);
}

// Remove from cart function
function removeFromCart(product) {
    const index = cart.indexOf(product);
    if (index > -1) {
        cart.splice(index, 1);
        console.log(`${product} removed from cart.`);
    } else {
        console.log(`${product} is not in the cart.`);
    }
}

// Form submission handler
function handleFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    // Process form data here
    console.log('Form submitted:', Object.fromEntries(formData));
}

// Product filtering function
function filterProducts(products, criteria) {
    return products.filter(product => product.category === criteria);
}

// Smooth scrolling function
function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
}

// QR code traceability function
function traceQRCode(qrCode) {
    // Functionality to trace a QR code
    console.log(`Tracing QR code: ${qrCode}`);
}