let hamburger = document.querySelector('#hamburger');
let scripticon = document.querySelector('#scripticon');
let logo2 = document.querySelector('#logo2');
let display = document.querySelector('#display');
hamburger.addEventListener('click',function (){
    scripticon.classList.toggle('collapse');
    hamburger.classList.add('collapse');
    logo2.classList.add('collapse');
    header.classList.remove('heading-element');  
});
let header = document.querySelector('header');
display.addEventListener('click', function () {
    scripticon.classList.toggle('collapse');
    hamburger.classList.remove('collapse');
    logo2.classList.remove('collapse');
    header.classList.add('heading-element');
    
});