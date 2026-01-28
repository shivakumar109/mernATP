import { cart, courses } from "./data.js";

// Merge cart with courses to get full course info
export const getDetailedCart = () =>
  cart.map(item => {
    const course = courses.find(c => c.id === item.courseId);
    return { ...course, qty: item.qty };
  });

// Calculate total cart amount
export const getCartTotal = () =>
  cart.reduce((total, item) => {
    const course = courses.find(c => c.id === item.courseId);
    return total + course.price * item.qty;
  }, 0);

// Increase quantity of a course (immutably)
export const increaseQuantity = (courseId, incBy = 1) =>
  cart.map(item =>
    item.courseId === courseId
      ? { ...item, qty: item.qty + incBy }
      : item
  );

// Remove a course from cart
export const removeFromCart = (courseId) =>
  cart.filter(item => item.courseId !== courseId);

// Check if all cart items are paid courses
export const areAllPaidCourses = () =>
  cart.every(item => {
    const course = courses.find(c => c.id === item.courseId);
    return course.price > 0;
  });

//Execution
console.log(getDetailedCart());
console.log(getCartTotal());
console.log(increaseQuantity(101, 1));
console.log(removeFromCart(103));
console.log(areAllPaidCourses());
