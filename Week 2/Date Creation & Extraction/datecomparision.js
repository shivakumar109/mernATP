//Given:
let enrollmentDeadline = new Date("2026-01-20");

//Tasks:
//   1.Check if:
//       * Today is before deadline → "Enrollment Open"
//       * Today is after deadline → "Enrollment Closed"

let today=new Date();
if(today<enrollmentDeadline){
    console.log("Enrollment Open");
}
else{
    console.log("Enrollment Closed");
}

//   2. Validate user input date:
//       * Input: "2026-02-30"
//       * Detect whether the date is valid or invalid
function isValidDate(year,month,date) {
     // let year=d.getFullYear();
     // let month=d.getMonth()+1;
     // let date=d.getDate();
     // console.log("Year:",year," Month:",month," Date:",date);
     if (month in [1,3,5,7,8,10,12] && date<=31){
          return "Valid date";
     }
     else if (month in [4,6,9,11] && date<=30){
          return "Valid date";
     }
     else if (month===2){
          //check for leap year
          if (((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) && date<=29){ 
                    return "Valid date";
          }
          else if (date<=28){
                    return "Valid date";
          }
     }
     return "Invalid date";
}
console.log(isValidDate(2026,4,31));

