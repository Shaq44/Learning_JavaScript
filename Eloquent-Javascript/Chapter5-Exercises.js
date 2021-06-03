/*This Chapter talks about high order functions such as reduce,map,forEach, and filter. 
the chapter also discusses an apply method and a bind method. */


/*this exercise asks us to use the reduce method with the
 concat method to shorten an array of arrays into a single array*/

var lists = [[1,2,3,4],[5,6],[7]];

console.log(lists.reduce((list1,list2)=>list1.concat(list2)));

console.log("******************************");


/*this exercise asks us to use the example data set from the chapter 
and compute the average age difference between mothers and children.*/



/*I tried looking for the file online from the website given in the book. 
I found it and wasn't able to download it. If there are any sugestions on how I can retieve the file
that would be greatly appreciated.*/
//require("./path/to/ancestry.js");
//if (typeof module != "undefined" && module.exports)
//  module.exports = ANCESTRY_FILE;


var ancestry = JSON.parse(ANCESTRY_FILE); 

/*This method searches for the mothers name and 
birth date*/
var byName = {};
ancestry.forEach(function(person){
byName[person.name] = person;
}
);


/* this method shows the age average between the mother and child */
//function average(array){
//function plus(a,b) return {a+b;}
//return array.reduce(plus)/array.length;
//}

/*this var finds filters out any unuseful data and finds the mothers data
and subtracts childs birth from the mothers.*/
var diffInAge = ancestry.filter(function(person){
return byName[person.mother] != null;
}).map(function(person){
return person.born - byName[person.mother].born;
});
console.log(avaerage(diffInAge));
console.log("****************************************");

