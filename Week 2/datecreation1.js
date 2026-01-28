// 1. Create a Date object for current date & time.
// 2. Extract and display:
//      * Year
//      * Month (human readable)
//      * Date
//      * Day of week
//      * Hours, minutes, seconds
let now=new Date();
console.log("Year:",now.getFullYear());
console.log("Month:",now.getMonth()+1);
console.log("Date:",now.getDate());
console.log("Day of week:",now.getDay());
console.log("Time:",now.getHours(),":",now.getMinutes(),":",now.getSeconds());
// 3. Display the date in this format:
//      DD-MM-YYYY HH:mm:ss
console.log(now.getDate(),"-",now.getMonth()+1,"-",now.getFullYear()," ",now.getHours(),":",now.getMinutes(),":",now.getSeconds());
