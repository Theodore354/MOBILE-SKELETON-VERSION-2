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
     id: '0',
     name:  'Multi-Post Stories Gain+Glory',
     tech:  ['Ruby on rails', 'Javascript', 'Css', 'Html'],
     images: '/img/popup.png',
     live: 'https://theodore354.github.io/MOBILE-SKELETON-VERSION-2/',
     source: 'https://github.com/Theodore354/MOBILE-SKELETON-VERSION-2'
 },
{
     id: '1',
     name:  'Multi-Post Stories Gain+Glory',
     tech:  ['Ruby on rails', 'Javascript', 'Css', 'Html'],
     images:  '/img/popup.png',
     live: 'https://theodore354.github.io/MOBILE-SKELETON-VERSION-2/',
     source: 'https://github.com/Theodore354/MOBILE-SKELETON-VERSION-2'
 },
{
     id: '2',
     nam:  'Multi-Post Stories Gain+Glory',
     tech: ['Ruby on rails', 'Javascript', 'Css', 'Html'],
     images: '/img/popup.png',
     live: 'https://theodore354.github.io/MOBILE-SKELETON-VERSION-2/',
     source: 'https://github.com/Theodore354/MOBILE-SKELETON-VERSION-2'
 },
{
     id: '3',
     name:  'Multi-Post Stories Gain+Glory',
     tech: ['Ruby on rails', 'Javascript', 'Css', 'Html'],
     images: '/img/popup.png',
     live: 'https://theodore354.github.io/MOBILE-SKELETON-VERSION-2/',
     source: 'https://github.com/Theodore354/MOBILE-SKELETON-VERSION-2',
 },
 {
     id: '4',
     name:  'Multi-Post Stories Gain+Glory',
     tech: ['Ruby on rails', 'Javascript', 'Css', 'Html'],
     images: '/img/popup.png',
     live: 'https://theodore354.github.io/MOBILE-SKELETON-VERSION-2/',
     source: 'https://github.com/Theodore354/MOBILE-SKELETON-VERSION-2',
 },
 {
  id: '5',
  name: 'Multi-Post Stories Gain+Glory',
  tech: ['Ruby on rails', 'Javascript', 'Css', 'Html'],
  images: '/img/popup.png',
  live: 'https://theodore354.github.io/MOBILE-SKELETON-VERSION-2/',
  source: 'https://github.com/Theodore354/MOBILE-SKELETON-VERSION-2',
}
];

// const container = document.querySelector('.project-container');
// for (let i = 0; i < projectsdata.length; i += 1 ) {
//   const pcard = document.createElement('div');
//   pcard.className = '.project-card';
//   const info = `
//   <div class="poject_card_info">
//   <div class="card-title">
//       <h4>Multi-Post Stories Gain+Glory</h4>
//   </div>
//   <ul class="project-technologies">
//       <li>Ruby on rails</li>
//       <li>JavaScript</li>
//       <li>css</li>
//       <li>html</li>
//   </ul>
//   <div class="project-btn">
//       <button type="button" class="btn">See Project</button>
//   </div>
//   `;
//   pcard.innerHTML = info;
//   container.appendChild(pcard);
// }