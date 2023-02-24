//const getTheTitles = function(anArray) {
 //let outputArray = [];
  //for (const item of anArray) 
  //{
    //it appears that the Book title goes from char numbered 9 up to the char just before the next newline \n
    //outputArray.push(item.title);
 // }
//return outputArray;
//};

const getTheTitles = function(anArray) 
{
return anArray.map(item => item.title);
}


// Do not edit below this line
module.exports = getTheTitles;
