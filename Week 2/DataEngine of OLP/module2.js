import { courses } from "./data.js";

// Get published courses
export const getPublishedCourses = () =>
  courses.filter(c => c.published);

// Sort courses by price (high → low)
export const sortCoursesByPriceDesc = () =>
  [...courses].sort((a, b) => b.price - a.price);

// Extract { title, price } only
export const getCourseSummaries = () =>
  courses.map(({ title, price }) => ({ title, price }));

// Calculate total value of published courses
export const getPublishedCoursesValue = () =>
  courses
    .filter(c => c.published)
    .reduce((sum, c) => sum + c.price, 0);

// Add a new course immutably
export const addCourse = (newCourse) =>
  [...courses, newCourse];

//Execution
console.log(getPublishedCourses());
console.log(sortCoursesByPriceDesc());
console.log(getCourseSummaries());
console.log(getPublishedCoursesValue());
console.log(addCourse({ id: 104, title: "MongoDB", price: 899, published: true }));
