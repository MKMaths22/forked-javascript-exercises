const convertToCelsius = function(Fah) {
 let celsius = (5/9)*(Fah - 32);
 //now to round it to 1 decimal place
 celsius = (Math.round(10*celsius))/10;
 return celsius;
};

const convertToFahrenheit = function(celsius) {
let fahrenheit = 32 + (9*celsius/5);
//now to round it to 1 decimal place
fahrenheit = (Math.round(10*fahrenheit))/10;
return fahrenheit; 
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
