var button= document.querySelector('.bar');
var menu=document.querySelector('.list');
var link= document.querySelector('.icon');

button.addEventListener('click',function(){
  menu.classList.toggle('active');
  link.classList.toggle('active');

});
