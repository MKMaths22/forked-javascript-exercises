const fibonacci = function(num) {
    if (typeof num === "string") num = Number(num);
    //now rule out negatives, NaN or non-integer values
    if ((num < 0) || (num == NaN)) return "OOPS";
    if (((Math.floor(num)) - num) !== 0) return "OOPS";
    //we start from the base cases for the recursion formula
    if (num === 0) return 0;
    if (num === 1) return 1;
    let current = 1;
    let previous = 0;
    let next;
    for (let i = 2; i <= num; i++)
      {next = current + previous;
      //the next value is the sum of the previous two, so now we relabel the values we need, ditching the previous value of previous 
      previous = current;
      current = next;
      }
    return next; 
     


};

// Do not edit below this line
module.exports = fibonacci;
