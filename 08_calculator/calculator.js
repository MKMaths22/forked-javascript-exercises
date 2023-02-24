const add = function(numone,numtwo) {
  return (numone + numtwo);
};

const subtract = function(thisnum,minusthisnum) {
	return(thisnum - minusthisnum);
};

//const sum = function(anarray) {
 // let total = 0;
 // for (const num of anarray) total += num;
 // return total;
//};

const sum = function(anarray) 
{
  return anarray.reduce(((total,item) => total += item),0);
};

//const multiply = function(anarray) {
//  let product = 1;
 // for (const num of anarray) product *= num;
 // return product;
//};

const multiply = function(anarray) {
  return anarray.reduce(((product,item) => product *= item),1);
}

const power = function(thisnum,tothispower) {
	return (thisnum**tothispower);
};

const factorial = function(num) {
  let answer = 1;
  for (let i = 1; i <= num; i++) answer *= i;
  return answer;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
