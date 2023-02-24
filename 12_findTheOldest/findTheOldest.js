

const findTheOldest = function(people) 
{
  const thisYear = new Date().getFullYear();
  function getAge(obj) {
    if (!obj.yearOfDeath) return (thisYear - obj.yearOfBirth);
    return (obj.yearOfDeath - obj.yearOfBirth);
  }

let orderedPeople = people.sort((a,b) => (getAge(b) - getAge(a)));
return orderedPeople[0];


};

//Do not edit below this line
module.exports = findTheOldest;
