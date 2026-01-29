const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};

let total = 0;
let hi = 0;
let highestMarks;


for(let i in marks){
    total+=marks[i];
    if(marks[i]>hi){
        hi = marks[i];
        highestMarks = i;
    }
}
//Calculate total marks
console.log("Total Marks:",total);
//Calculate average marks
console.log("Average Marks:",total/4);
//Find the highest scoring subject
console.log("hiGhest scorinG subject:",highestMarks);
//Add a new subject computer: 90 */
marks.computer = 90;