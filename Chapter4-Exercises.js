/*This chapter covered some basics of arrays and objects. 
It showed how arrays can be used to store a list of data and how to 
retrieve that data. The chapter also covers objects,properties, and correlation.*/



/*The first exercise is to create a couple functions. One function takes two 
arguments,start and end, and returns an array containing all the numbers from start up to(and including)
end.Next create another function that returns the sum of the numbers from the first function.*/

function range(start,end){
var list = [];

for(var i=start; i<=end;i++){
list.push(i);
}
return list;
}

function sum(array){
var listSum = 0;
for(var i = 0;i<array.length;i++){
listSum += array[i];
}
return listSum;
}
console.log(range(1,10));
console.log(sum(range(1,10)));

console.log("**************************************");

/*This exercise asks you to create an array and reverse the elements*/

function reverseArray(array){
var list = [];
for(var i=0;i<array.length;i++){
list.unshift();
}
return list;

}
function reverseArrayInPlace(array){
var temp;
var len = array.length;
for(var i=0;i<Math.floor(len/2);i++){
temp = array[i];
array[i] = array[len - i -1];
array[len-i-1] = temp;
}
return array;
}

var arrayValue = [1,2,3,4,5];
console.log(reverseArrayInPlace(arrayValue));
console.log("**************************************");


/*this exercise asks us to make multiple functions. The first function turns an array into a list.
The second function turns a list to an array. The prepend function takes an element and creates a new list.
 The last function takes a list and an index and returns the element at that index position.*/ 



function arrayToList(array){
var list;
for(var i=array.length-1;i>=0;i--){
 list = {value:array[i],rest:list};
}
return list;
}
function listToArray(array){
var list =[];
for(node = array;node;node = node.rest){
list.push(node.value);
}
return list;
}
function prepend(item,list){
var newList = {value:item,rest:list};
return newList;
}

function nth(index,list){
var list = listToArray(list);
return list[index];
}

console.log(arrayToList([10,20,30]));
console.log(listToArray(arrayToList([1,2,3])));
console.log(prepend(10,prepend(20,prepend(1,null))));
console.log(nth(0,arrayToList([1,2,3])));

console.log("*********************************************");


/*This exercise asks us to make a function that is called deepEqual.
the function is to compare the number of objects and see if they are equal*/

function deepEqual(x,y){
if(x === y){
return true;
} 

/*This statement  checks to see if the there is an object*/ 
if(typeof x == "object" || x != null || typeof y == "object" || y != null){
return false;
}

/*this iterates the counter for the objects*/ 
thingsInX = 0; thingsInY = 0;

/*these loops checks the number of objects in the property*/
for(var things in x){
thingsInX += 1;
}
for(var things in y){
thingsInY += 1;

/*this if statemen checks to see if there are any y objects in x*/
if(!(things in x) || !deepEqual(x[things],y[things])){
return false;
}
}
return thingsInX === thingsInY;

}

var object = {here: {is : "an"},object : 2};  
var obj = "   ";

console.log(deepEqual(object,object));//true
console.log(deepEqual(object , {here:{is:"an"},object : 3}));//false
console.log(deepEqual(obj,""));//false
console.log(deepEqual(object,obj));//false
console.log(deepEqual(object,{here:1,object:2}));//false
console.log(deepEqual(obj,"   "));//true
