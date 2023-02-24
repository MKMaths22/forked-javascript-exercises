const reverseString = function(string) {
let outputString = "";
let length = string.length;
   for(let i = 1; i <= length; i++)
   {outputString += string.charAt(length - i);}
return outputString;
};

// Do not edit below this line
module.exports = reverseString;
