const hamburger = document.querySelector('.mobile-nav');
const mobilemenu = document.querySelector('.mob-menu');
const closebtn = document.querySelector('.fa-times');
const links = document.querySelectorAll('.links');

hamburger.addEventListener('click', () => {
  mobilemenu.classList.remove('collapse');
});

closebtn.addEventListener('click', () => {
  mobilemenu.classList.add('collapse');
});

for (let i = 0; i < links.length; i += 1) {
  links[i].addEventListener('click', () => {
    mobilemenu.classList.add('collapse');
  });
}