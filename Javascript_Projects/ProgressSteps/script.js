/*const prog = document.getElementById('progress');
const prv = document.getElementById('prv');
const nxt = document.getElementById('nxt');
const circle = document.querySelectorAll('.circle'); 

let currentActive = 1;
nxt.addEventListener('click',() =>{
    currentActive++;
    if(currentActive > circle.length){
     currentActive = circle.length; 
    }
    update();
    
}); 


prv.addEventListener('click',() =>{
    currentActive--;
    if(currentActive > circle.length){
     currentActive = 1; 
    }
    update();
}); 


function update(){

    circle.forEach((circle,idx) =>{
        if(idx < currentActive){
circle.classList.add('active');
    }else{
        circle.classList.remove('active');
    }
    
});
const actives = document.querySelectorAll('.active');
prog.style.width =  (actives.length-1)/(circle.length - 1 )*100;
if(currentActive === 1){
    prv.disabled = true;
}else if(currentActive === circles.length){
    nxt.disabled = true;
}else{
    prv.disabled = false;
    nxt.disabled = false; 
}

}*/

$("#nxt").click(function(){
    $(".circle").each(function (index, element) {
        console.log(element);
        // element == this
        
    });
    console.log("Button Clicked");
    
});