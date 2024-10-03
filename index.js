// Code your solution here
const drivers = [
    'jane mwangi',
    'Deniss oliech',
    'johnny Bravo',
    'levy wechuli',
    'peterson kamau'
  ];

  function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  
  console.log(findMatching(drivers, 'jane mwangi')); 
  console.log(findMatching(drivers, 'Deniss oliech')); 
  console.log(findMatching(drivers, 'johnny Bravo')); 
  console.log(findMatching(drivers, 'levy wechuli')); 




  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
  }
  
 
  console.log(fuzzyMatch(drivers, 'Ja')); 
  console.log(fuzzyMatch(drivers, 'De')); 
  console.log(fuzzyMatch(drivers, 'Jo')); 
  console.log(fuzzyMatch(drivers, 'Le')); 
  console.log(fuzzyMatch(drivers, 'Do'));



  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
  }
  
 
  console.log(matchName(drivers, 'John Doe')); 
  console.log(matchName(drivers, 'Jane Smith')); 
  console.log(matchName(drivers, 'alice johnson')); 
  console.log(matchName(drivers, 'Sam Smith'));