let temperatures = [32, 35, 28, 40, 38, 30, 42]

// Filter temperatures above 35 degrees
let result1=temperatures.filter(temp => temp > 35)
console.log(result1)

//convet all temperatures from Celsius->Fahrenheit
let result2=temperatures.map(temp => (temp * 9/5) + 32)
console.log(result2)

//calculate average temperature
let result3=temperatures.reduce((acc, temp) => acc + temp) / temperatures.length
console.log(result3)

//temperaturn above 40
let result4=temperatures.find(temp => temp > 40)
console.log(result4) 

//index of temperature 28
let result5=temperatures.findIndex(temp => temp === 28)
console.log(result5)     
