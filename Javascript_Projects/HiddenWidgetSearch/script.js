/*const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

btn.addEventListener('click',()=>{
    search.classList.toggle('active')
    input.focus()
})*/

$(".btn").click(function(){
    $(".search").toggleClass("active");
    console.log("button pressed")
});