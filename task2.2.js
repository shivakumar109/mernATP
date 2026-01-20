let price = 1299;
let courseTag;
// If price < 500 → "Budget Course"
if (price < 500)
{
    courseTag = "budGet course"
}
// If price between 500–1000 → "Standard Course"
else if (price >= 500 && price < 1000){
    courseTag = "standard course"
}
// If price > 1000 → "Premium Course"
else{
    courseTag = "premium course"
}
// Print the label
console.log(courseTag);