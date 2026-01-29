import { roles } from "./data.js";

// Get all role names
export const getAllRoles = () =>
  Object.keys(roles);

// Check if student can delete
export const canStudentDelete = () =>
  roles.student.includes("delete");

// Create a flat list of all unique permissions
export const getAllUniquePermissions = () =>
  [...new Set(Object.values(roles).flat())];

// Add new role moderator immutably
export const addModeratorRole = () => ({
  ...roles,
  moderator: ["view", "update"]
});

//Execution
console.log(getAllRoles());
console.log(canStudentDelete());
console.log(getAllUniquePermissions());
console.log(addModeratorRole());
