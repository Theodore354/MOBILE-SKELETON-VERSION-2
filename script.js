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
     desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
     tech:  ['Ruby on rails', 'Javascript', 'Css', 'Html'],
     images: '/img/popup.png',
     live: 'https://theodore354.github.io/MOBILE-SKELETON-VERSION-2/',
     source: 'https://github.com/Theodore354/MOBILE-SKELETON-VERSION-2'
 },
{
     id: '1',
     name:  'Multi-Post Stories Gain+Glory',
     desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
     tech:  ['Ruby on rails', 'Javascript', 'Css', 'Html'],
     images:  '/img/popup.png',
     live: 'https://theodore354.github.io/MOBILE-SKELETON-VERSION-2/',
     source: 'https://github.com/Theodore354/MOBILE-SKELETON-VERSION-2'
 },
{
     id: '2',
     name:  'Multi-Post Stories Gain+Glory',
     desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
     tech: ['Ruby on rails', 'Javascript', 'Css', 'Html'],
     images: '/img/popup.png',
     live: 'https://theodore354.github.io/MOBILE-SKELETON-VERSION-2/',
     source: 'https://github.com/Theodore354/MOBILE-SKELETON-VERSION-2'
 },
{
     id: '3',
     name:  'Multi-Post Stories Gain+Glory',
     desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
     tech: ['Ruby on rails', 'Javascript', 'Css', 'Html'],
     images: '/img/popup.png',
     live: 'https://theodore354.github.io/MOBILE-SKELETON-VERSION-2/',
     source: 'https://github.com/Theodore354/MOBILE-SKELETON-VERSION-2',
 },
 {
     id: '4',
     name:  'Multi-Post Stories Gain+Glory',
     desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
     tech: ['Ruby on rails', 'Javascript', 'Css', 'Html'],
     images: '/img/popup.png',
     live: 'https://theodore354.github.io/MOBILE-SKELETON-VERSION-2/',
     source: 'https://github.com/Theodore354/MOBILE-SKELETON-VERSION-2',
 },
 {
  id: '5',
  name: 'Multi-Post Stories Gain+Glory',
  desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  tech: ['Ruby on rails', 'Javascript', 'Css', 'Html'],
  images: '/img/popup.png',
  live: 'https://theodore354.github.io/MOBILE-SKELETON-VERSION-2/',
  source: 'https://github.com/Theodore354/MOBILE-SKELETON-VERSION-2',
}
];

// CREATING THE ARRAY OF CARDS

const container = document.querySelector('.project-container');
for (let i = 0; i < projectsdata.length; i += 1 ) {
  const card = document.createElement('div');
  card.className = 'project-card';
  const info = `
  <div class="poject_card_info">
  <div class="card-title">
      <h4>${projectsdata[i].name}</h4>
  </div>
  <ul class="project-technologies">
      <li>${projectsdata[i].tech[0]}</li>
      <li>${projectsdata[i].tech[1]}</li>
      <li>${projectsdata[i].tech[2]}</li>
      <li>${projectsdata[i].tech[3]}</li>
  </ul>
  <div class="project-btn">
      <button type="button" class="btn" id="${projectsdata[i].id}">See Project</button>
  </div>
  </div>
  `;
  card.innerHTML = info;
  container.appendChild(card);
}

// Creating the modal popup 

document.querySelectorAll('.btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const project = projectsdata.find((p) => p.id === Number(btn.id));
    document.querySelector('#projectImage').setAttribute('src', project.images);
    document.querySelector('.md-wrapper').innerHTML = `
    <li>${project.tech[0]}</li>
    <li>${project.tech[1]}</li>
    <li>${project.tech[2]}</li>
    `;
    document.querySelector('#projectname').innerText = project.name;
    document.querySelector('#liveLink').setAttribute('href', project.live);
    document.querySelector('#sourceCode').setAttribute('href', project.source);
    document.querySelector('#projectDesc').innerHTML = project.desc;
    
    document.querySelector('.modal-container').style.display = 'block';
  });
});

const form = document.getElementsByClassName('message-form');
const email = document.getElementById('email');
const formcontrolinput4  = document.querySelector('.form-control input4');

form.addEventListener('submit', (e) => {
  if (email.value === email.value.toLowerCase()) {
    formcontrolinput4.textContent = '';
  } else { e.preventDefault(); }
  formcontrolinput4.textContent = '*Email must be in lowercase letters';
});

