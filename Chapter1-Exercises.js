/*These Exercises are from chapter 1 in the book Eloquent Javascript
Second Edition*/


/*this exercise is a loop exercise that creates a triangle using # Symbol*/

for(var i='#';i.length<8;i+='#'){

    console.log(i);
}

console.log("*************************************")
/*this exercise prints fizz if number is divisable by 3, it prints 5 if 
number is divisable by 5, and prints fizzbuzz if a number 
is divisible by 3 and 5*/  

for(var j=0;j<100;j++){
    if((j%3==0)&&(j%5==0)){
        console.log("fizzbuzz")
    }else if(j%3 == 0){
        console.log("fizz");
    }else if (j%5==0){
        console.log("buzz");
    }
}
/*this exercise is to create a Chess Board*/

console.log("************************************");
var size = 9;
var board = " ";
for(var g =1; g<size;g++){
    for(var s=1;s<size;s++){
    if((g+s) % 2 == 0){
        board += " ";
    } else board += "#";    

    }
    board += "\n";
    
} console.log(board);

