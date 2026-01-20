const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

//  filter() employees from IT department
let res1 = employees.filter(emp => emp.department === "IT");
console.log("IT Employees:", res1);

//  map() to add netSalary (salary + 10% bonus)
let res2 = employees.map(emp => ({
  ...emp,
  netSalary: emp.salary + emp.salary * 0.10
}));
console.log("Employees with Net Salary:", res2);

//  reduce() to calculate total salary payout
let res3 = employees.reduce((total, emp) => {
  return total + emp.salary;
}, 0);
console.log("Total Salary Payout:", res3);

//  find() employee with salary 30000
let res4 = employees.find(emp => emp.salary === 30000);
console.log("Employee with salary 30000:", res4);

//  findIndex() of employee "Neha"
let res5 = employees.findIndex(emp => emp.name === "Neha");
console.log("Index of Neha:", res5);