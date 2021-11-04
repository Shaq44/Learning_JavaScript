const open = document.getElementById('open');
const close = document.getElementById('close');
const box = document.querySelector('.box');

open.addEventListener('click',()=> box.classList.add('show-nav'));

close.addEventListener('click',()=> box.classList.remove('show-nav') );


