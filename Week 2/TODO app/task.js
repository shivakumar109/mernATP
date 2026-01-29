//   ii. task.js - Task operations
// TODO: Import validator functions
// import { ... } from './validator.js';
import { validateTitle, validatePriority, validateDueDate }  from './validater.js';
const tasks = [];
let taskIdCounter = 1; 
// 1. Add new task
function addTask(title, priority, dueDate) {
// Validate using imported functions
// If valid, add to tasks array
// Return success/error message
     const titleCheck = validateTitle(title);
     const priorityCheck = validatePriority(priority);
     const dateCheck = validateDueDate(dueDate);

     if (titleCheck !== true) return titleCheck;
     if (priorityCheck !== true) return priorityCheck;
     if (dateCheck !== true) return dateCheck;

     const newTask = {
     id: taskIdCounter++,
     title,
     priority,
     dueDate,
     completed: false
     };

     tasks.push(newTask);
     return "Task added successfully";
}   
// 2. Get all tasks
function getAllTasks() {
// Return all tasks 
     return tasks;
}

// 3. Mark task as complete
function completeTask(taskId) {
// Find task and mark as complete
     const task = tasks.find(t => t.id === taskId);

     if (!task) {
     return "Task not found";
     }

     task.completed = true;
     return "Task marked as completed";
}

// Export functions
export { addTask, getAllTasks, completeTask };
