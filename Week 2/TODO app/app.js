//iii. app.js - Main application
// TODO: Import task functions
// import { ... } from './task.js';
import { addTask, getAllTasks, completeTask } from './task.js';
// 1. Add some tasks
console.log(addTask("Finish JavaScript project", "high", "2026-02-15"));
console.log(addTask("Study ES6 modules", "medium", "2026-02-10"));
console.log(addTask("Go for a walk", "low", "2026-02-05"));

// 2. Display all tasks
console.log("All Tasks:");
console.log(getAllTasks());

// 3. Complete a task
console.log(completeTask(2));

// 4. Display all tasks again
console.log("Updated Tasks:");
console.log(getAllTasks());
