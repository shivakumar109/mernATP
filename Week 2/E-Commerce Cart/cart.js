// cart.js - Shopping cart operations
// import { getProductById, checkStock } from './product.js';

// let cartItems = [];

// // TODO: Implement these functions

// export function addToCart(productId, quantity) {
// // 1. Get product details
// // 2. Check stock availability
// // 3. Check if product already in cart
// //    - If yes, update quantity
// //    - If no, add new item
// // 4. Return success/error message
// }

// export function removeFromCart(productId) {
// // Remove product from cart
// }

// export function updateQuantity(productId, newQuantity) {
// // Update quantity of product in cart
// // Check stock before updating
// }

// export function getCartItems() {
// // Return all cart items with product details
// }

// export function getCartTotal() {
// // Calculate total price of all items in cart
// // Return total
// }

// export function clearCart() {
// // Empty the cart
// }


import { getProductById, checkStock } from './product.js';
let cartItems = [];
export function addToCart(productId, quantity) {
  const product = getProductById(productId);
  if (!product) return "Product not found.";
  if (!checkStock(productId, quantity)) return "Insufficient stock.";
  const existing = cartItems.find(item => item.id === productId);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cartItems.push({ ...product, quantity });
  }
  return "Item added to cart.";
}
export const getCartItems = () => cartItems;
export const getCartTotal = () => cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
export const removeFromCart = (id) => {
  cartItems = cartItems.filter(item => item.id !== id);
  return "Item removed.";
};
export const clearCart = () => cartItems = [];
export function updateQuantity(id, qty) {
  if (!checkStock(id, qty)) return "Stock limit exceeded.";
  const item = cartItems.find(i => i.id === id);
  if (item) item.quantity = qty;
  return "Quantity updated.";
}