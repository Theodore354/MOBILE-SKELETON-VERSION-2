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

//Creating data for  portfolio card
const projectsdata = [
  {
     id = '0',
     name =  'Multi-Post Stories Gain+Glory',
     tech = ['Ruby on rails', 'Javascript', 'Css', 'Html'],
     images = '/img/popup.png',
     live: 'https://theodore354.github.io/MOBILE-SKELETON-VERSION-2/',
     source: 'https://github.com/Theodore354/MOBILE-SKELETON-VERSION-2'
 },
{
     id = '1',
     name =  'Multi-Post Stories Gain+Glory',
     tech = ['Ruby on rails', 'Javascript', 'Css', 'Html'],
     images = '/img/popup.png',
     live: 'https://theodore354.github.io/MOBILE-SKELETON-VERSION-2/',
     source: 'https://github.com/Theodore354/MOBILE-SKELETON-VERSION-2'
 },
{
     id = '2',
     name =  'Multi-Post Stories Gain+Glory',
     tech = ['Ruby on rails', 'Javascript', 'Css', 'Html'],
     images = '/img/popup.png',
     live: 'https://theodore354.github.io/MOBILE-SKELETON-VERSION-2/',
     source: 'https://github.com/Theodore354/MOBILE-SKELETON-VERSION-2'
 },
{
     id = '3',
     name =  'Multi-Post Stories Gain+Glory',
     tech = ['Ruby on rails', 'Javascript', 'Css', 'Html'],
     images = '/img/popup.png',
     live: 'https://theodore354.github.io/MOBILE-SKELETON-VERSION-2/',
     source: 'https://github.com/Theodore354/MOBILE-SKELETON-VERSION-2',
 },
 {
     id = '4',
     name =  'Multi-Post Stories Gain+Glory',
     tech = ['Ruby on rails', 'Javascript', 'Css', 'Html'],
     images = '/img/popup.png',
     live: 'https://theodore354.github.io/MOBILE-SKELETON-VERSION-2/',
     source: 'https://github.com/Theodore354/MOBILE-SKELETON-VERSION-2',
 },
 {
  id = '5',
  name =  'Multi-Post Stories Gain+Glory',
  tech = ['Ruby on rails', 'Javascript', 'Css', 'Html'],
  images = '/img/popup.png',
  live: 'https://theodore354.github.io/MOBILE-SKELETON-VERSION-2/',
  source: 'https://github.com/Theodore354/MOBILE-SKELETON-VERSION-2',
},
];