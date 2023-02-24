const repeatString = function(string,num) {
if (((parseInt(num,10))!== num) || (num < 0)) return "ERROR";
let outputString = '';
   let i = 0;
     while (i++ < num)
      {outputString += string;
    }
    return outputString;
};

// Do not edit below this line
module.exports = repeatString;
