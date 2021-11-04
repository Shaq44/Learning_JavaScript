/*The Goal of the javascript file is to havae a method expands 
and shrinks the images*/
/*this variable is constant cause the panels don't change and 
querySelectorAll returns the panel elements from css*/
//const panels = document.querySelectorAll('.panel');



/*this method loops through the list of panels and 
expands the chosen panel by making it active and the others shrink
panels.forEach(panel => {
panel.addEventListener('click',()=>{
    removeActiveClasses();
    panel.classList.add('active');
    
})
})*/


/*this method shrinks the panel in the list of panels
by removing it from being active
function removeActiveClasses(){
    panels.forEach(panel =>{
        panel.classList.remove('active');
    })
}*/


/*this part of the code uses some jquery to click through the images.
you can click to expand or close image and have multiple images expanded 
at once.*/

$('.panel').click(function(){
  $(this).toggleClass("active");
    console.log("button clicked");
});




