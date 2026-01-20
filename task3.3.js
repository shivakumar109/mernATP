let marks = [78,23, 92, 35, 88, 40, 67]
//filter marks >=40
let result1 = marks.filter(mark => mark >= 40)
console.log(result1)

//add 5 grace marks to each student
let result2 = marks.map(mark => mark + 5)
console.log(result2)

//find highest marks
let result3=marks.reduce((acc,mark)=>acc>mark ?acc: mark)
console.log(result3)

//find first mark below 40
let result4 = marks.find(mark => mark < 40)
console.log(result4)

//find index of mark 92
let result5 = marks.findIndex(mark => mark === 92)
console.log(result5)

