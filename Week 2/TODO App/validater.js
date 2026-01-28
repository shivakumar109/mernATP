// Assignment 1: 
// -------------
// Task Management System (ToDo App Modules):
// Building a task manager like Todoist

// Requirements:
// Create a modular todo app with 3 separate files:         
// i. validator.js - Input validation
//  TODO: Export these validation functions  


// 1. Validate task title (not empty, min 3 chars)
function validateTitle(title) {
     // Your code here
     if (title.length==0) {
          return "title is empty"
     }
     else if (title.length<3) {
          return "title should be more than 3 characters"
     }    
     return true;
}
                      
// 2. Validate priority (must be: low, medium, high)
function validatePriority(priority) {
     // Your code here
     const validPriorities = ["low", "medium", "high"];
     if (!validPriorities.includes(priority)) {
          return "Priority must be low, medium, or high";
     }
     return true;

}
                      
// 3. Validate due date (must be future date)
function validateDueDate(date) {
     // Your code here
     const dueDate = new Date(date);
     const today = new Date();

     if (isNaN(dueDate.getTime())) {
     return "Invalid date format";
     }

     if (dueDate <= today) {
     return "Due date must be a future date";
     }

     return true;
     }   
// Export functions
export { validateTitle, validatePriority, validateDueDate };
