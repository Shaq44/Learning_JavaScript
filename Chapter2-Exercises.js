/*These Exercises are from chapter 2 of Eloquent Javascript. 
This chapter shows us how to write functions.*/


/*This Exercises asks us to create a fucntion called min 
that takes two arguments and returns the minimum*/

function min(x,y){
if(x<y){
return x;
}else if(y<x){
return y;
}
}

console.log(min(24,-200));
console.log(min(0,10));
console.log(min(0,-10));
console.log("*************************************");

/*This exercise asks us to create a function
 to find out if a number is even*/

function isEven(n){
if(n < 0){
return n;
}else if(n == 0){
return true;
} else if(n == 1){
return false;
}else return isEven(n-2);
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));


console.log("**************************************");
/*this function asks us to return the number of capital B's 
and then return the number of capital characters*/ 
function countBs(word){
var length = word.length-1;
var num = 0;
for(var i=0;i<length;i++){
if(word.charAt(i) == 'B'){
num++; 
}
}
return num;
}
console.log("*************************************");
/*This function passes two arguments. One is a String and the 
other is a character. The second argument counts the number of characters 
passed in the first argument*/

function countChar(str,char){
var numString = str.length-1;
var number = 0;
for(var i=0;i<=numString;i++){
if(str.charAt(i) == char){
number ++;
}
}
return number;
}


console.log(countBs("BBH"));
console.log(countChar("Pizza","a"));

