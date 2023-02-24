const removeFromArray = function(array,...toRemove) 
    {let outputArray = array;
     for (const junk of toRemove) 
        {for (i = 0; i < outputArray.length; i++) 
           {if (junk === outputArray[i])
              //If junk appears, count where in outputArray it appears and then use splice to remove it
              {
               outputArray.splice(i,1);
              }
            }
        }
    return outputArray;   
           
          
    }



// Do not edit below this line
module.exports = removeFromArray;
