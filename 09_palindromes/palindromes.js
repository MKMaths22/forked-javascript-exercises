const palindromes = function (string) {

//need to convert to all lowercase
string = string.toLowerCase();
// must eliminate spaces and punctuation, closing the gap afterwards 
let stringTidiedUp = "";
for (i = 0; i < string.length; i++)
  {
    let char = string.charAt(i);
    if ((char !== " ") && (char !== "!") && (char !== "?") && (char !== ",") && (char !== "."))
    //as long as the character is not space or punctuation it gets added to the stringTidiedUp
    stringTidiedUp += char;
  }
//now check each character counting from the start matches the corresponding one counting from the end in stringTidiedUp

for (i = 0; i < Math.floor((stringTidiedUp.length)/2); i++)
   if (stringTidiedUp.charAt(i) !== stringTidiedUp.charAt((stringTidiedUp.length) - 1 - i)) return false;
   //the function returns false as soon as a character does not match its opposite one from the end of the string
   return true;

};

// Do not edit below this line
module.exports = palindromes;
