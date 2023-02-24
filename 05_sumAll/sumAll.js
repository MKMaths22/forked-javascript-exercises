const sumAll = function(start,finish)
{
if ((typeof start) != "number") return "ERROR";
if ((typeof finish)!= "number") return "ERROR";
if (start - Math.floor(start) != 0) return "ERROR";
if (finish - Math.floor(finish) != 0) return "ERROR";
if ((start < 0) || (finish < 0)) return "ERROR";
      //initial lines check the inputs are numbers and that they are non-negative integers
if (start > finish)
  {
      let placeHolder = start;
          start = finish;
          finish = placeHolder;
      //swaps the values if start is the larger number. Now the code assumes that start <= finish
  }
let i = start;
let total = 0;
while (i <= finish) total += i++;
// fancy! Total is incremented by i and then i is incremented by 1

return total;
};

// Do not edit below this line
module.exports = sumAll;
