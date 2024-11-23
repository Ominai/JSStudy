//Forecast in Kelvin
const kelvin = 0;
//Celsius is Kelvin - 273
var celsius = kelvin - 273;
//F is C * (9/5) + 32
var fahrenheit = celsius * (9/5) + 32;
//Round down
var fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)