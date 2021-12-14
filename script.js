let hamburger = document.querySelector('#hamburger');
let scripticon = document.querySelector('#scripticon');
hamburger.addEventListener('click',function (){
    scripticon.classList.toggle('collapse');
    hamburger.classList.add('collapse');
});