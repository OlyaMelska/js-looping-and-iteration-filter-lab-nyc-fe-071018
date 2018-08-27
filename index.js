let drivers = ['Bob', 'Daniel', 'Sammy', 'Nathan', 'David', 'Angela', 'Sarah', 'Sally', 'Billy']

function fuzzyMatch(drivers, word) {
  return drivers.filter(function(el) {
      return el.toLowerCase().indexOf(word.toLowerCase()) > -1;
  })
}

console.log(fuzzyMatch(drivers, 'b')); 

function findMatching(drivers, word){
  return drivers.filter( function (el){
    if(el === word){
      return el;
    }
    else if(el.toLowerCase() === word.toLowerCase()){
      return el;
    }
    else{
      return false;
    }
  })
}
console.log(findMatching(drivers, 'Daniel'))


function matchName(drivers, name){
  return drivers.filter(function(el){
    if(el.name === name){
      return name;
    }
    else{
      return false
    }
  })
}
