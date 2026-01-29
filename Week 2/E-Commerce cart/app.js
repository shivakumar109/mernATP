// app.js - Main application
// import { 
//      getAllProducts, 
//      searchProducts, 
//      getProductsByCategory 
// } from './product.js';

// import { 
//      addToCart, 
//      getCartItems, 
//      getCartTotal, 
//      updateQuantity,
//      removeFromCart 
// } from './cart.js';

// import { processPayment } from './payment.js';

// console.log('=== E-Commerce Store ===\n');

// // 1. Browse products
// console.log('All Products:');
// console.log(getAllProducts());

// // 2. Search for products
// console.log('\nSearching for "phone":');
// console.log(searchProducts('phone'));

// // 3. Add items to cart
// console.log('\n=== Adding to Cart ===');
// console.log(addToCart(1, 2));  // 2 Laptops
// console.log(addToCart(3, 3));  // 3 Headphones
// console.log(addToCart(1, 1));  // 1 more Laptop (should update quantity)

// // 4. View cart
// console.log('\n=== Current Cart ===');
// console.log(getCartItems());
// console.log('Cart Total:', getCartTotal());

// // 5. Update quantity
// console.log('\n=== Updating Quantities ===');
// console.log(updateQuantity(1, 2));  // Change laptop quantity to 2

// // 6. Remove item
// console.log('\n=== Removing Item ===');
// console.log(removeFromCart(3));  // Remove headphones

// // 7. View updated cart
// console.log('\n=== Updated Cart ===');
// console.log(getCartItems());
// console.log('Cart Total:', getCartTotal());

// // 8. Checkout with coupon
// console.log('\n=== Checkout ===');
// const order = processPayment('upi', 'WELCOME10');
// console.log(order);



import { getAllProducts,searchProducts} from './product.js';
import { 
  addToCart, 
  getCartItems, 
  getCartTotal, 
  updateQuantity,
  removeFromCart 
} from './cart.js';
import { processPayment } from './payment.js';
console.log('E-Commerce Store Simulation \n');
console.log('Step 1: Browsing Catalog ');
console.log('All Products:', getAllProducts().length, 'items available.');
const searchResult = searchProducts('phone');
console.log('Search "phone":', searchResult);
console.log('\n Step 2: Adding to Cart ');
console.log(addToCart(1, 1));  
console.log(addToCart(4, 2));  
console.log(addToCart(1, 1));  
console.log('\n--- Step 3: View Cart ---');
console.table(getCartItems()); 
console.log('Current Subtotal: ₹', getCartTotal());
console.log('\n--- Step 4: Updating Quantities ---');
console.log(updateQuantity(4, 1)); 
console.log(removeFromCart(1));    
console.log('\n--- Step 5: Final Checkout ---');
addToCart(2, 1); 
const orderSummary = processPayment('upi', 'WELCOME10');
console.log('--- ORDER SUCCESSFUL ---');
console.log(`Order ID: ${orderSummary.orderId}`);
console.log(`Final Amount Paid: ₹${orderSummary.finalTotal}`);
console.log(`Discount Applied: ₹${orderSummary.discount}`);