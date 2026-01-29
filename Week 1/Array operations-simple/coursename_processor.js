let courses = ["javascript", "react", "node", "mongodb", "express"];
//filter course length >5
let result1 = courses.filter(course => course.length > 5)
console.log(result1)

//convert course name to uppercase
let result2 = courses.map(course => course.toUpperCase())
console.log(result2)

//generate a single string
let result3 = courses.reduce((acc, course) => acc + " | " + course)
console.log(result3)

//find 'react'
let result4 = courses.find(course => course === "react")
console.log(result4)

//find index of 'node'
let result5 = courses.findIndex(course => course === "node")
console.log(result5)     