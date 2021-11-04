/*const open = document.getElementById('open');
const close = document.getElementById('close');
const box = document.querySelector('.box');

open.addEventListener('click',()=> box.classList.add('show-nav'));

close.addEventListener('click',()=> box.classList.remove('show-nav') );
*/


// this piece of code uses JQuery where you can rotate the page 
$('#open').click(function(){
    $(".box").toggleClass("show-nav");
      console.log("button clicked");
  });

  $('#close').click(function(){
    $(".box").toggleClass("show-nav");
      console.log("button clicked");
  });