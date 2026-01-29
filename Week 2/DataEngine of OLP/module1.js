import { users } from "./data.js";

// Get only active users
export const getActiveUsers = () =>
  users.filter(u => u.active);

// Extract names of active users
export const getActiveUserNames = () =>
  users.filter(u => u.active).map(u => u.name);

// Check if any admin exists
export const hasAdmin = () =>
  users.some(u => u.role === "admin");

// Find user by id
export const findUserById = (id) =>
  users.find(u => u.id === id);

// Deactivate a user immutably
export const deactivateUser = (id) =>
  users.map(u =>
    u.id === id ? { ...u, active: false } : u
  );

//Execution
console.log(getActiveUsers());
console.log(getActiveUserNames());
console.log(hasAdmin());
console.log(findUserById(2));
console.log(deactivateUser(1));
