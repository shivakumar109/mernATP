const students = [
     { id: 1, name: "Ravi", marks: 78 },
     { id: 2, name: "Anjali", marks: 92 },
     { id: 3, name: "Kiran", marks: 35 },
     { id: 4, name: "Sneha", marks: 88 },
     { id: 5, name: "Arjun", marks: 40 }
   ];    
//  filter() students who passed (marks ≥ 40)
let result1 = students.filter(student => student.marks >= 40)
console.log(result1)
//  map() to add a grade field
let result2 = students.map(student => {
    let grade;
     if (student.marks >= 90) {
           grade = 'A';   
     } else if (student.marks >= 75) {
           grade = 'B';   
     } else if (student.marks >= 60) {
           grade = 'C';   
     } else {
           grade = 'D';   
     }
     return { student, grade: grade };
});
console.log(result2)    
//  reduce() to calculate average marks
let totalMarks = students.reduce((acc, student) => acc + student.marks, 0);
let averageMarks = totalMarks / students.length;
console.log(averageMarks)
// find() the student who scored 92
let result4 = students.find(student => student.marks === 92)
console.log(result4)
//  findIndex() of student "Kiran"
let result5 = students.findIndex(student => student.name === "Kiran")
console.log(result5)
