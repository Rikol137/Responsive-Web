const projects = [
  {
    id: '0',
    title: 'Tonic',
    tags: ['Canopy', 'Back End dev', '2015'],
    imgsrc: 'images/project1.png',
    description: {
      small: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      big: 'A daily selection of privately personalized reads; no accounts or sign-ups required. A daily selection of privately personalized reads; no accounts or sign-ups required. A daily selection of privately personalized reads; no accounts or sign-ups required. A daily selection of privately personalized reads; no accounts or sign-ups required. A daily selection of privately personalized reads; no accounts or sign-ups required.',
    },
    technologies: ['HTML', 'CSS', 'Ruby on Rails'],
    links: ['https://github.com', 'https://heroku.com'],
  },
  {
    id: '1',
    title: 'Multi-Post Stories',
    tags: ['FACEBOOK', 'Full Stack Dev', '2015'],
    imgsrc: 'images/project2.png',
    description: {
      small: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
      big: 'A daily selection of privately personalized reads; no accounts or sign-ups required. A daily selection of privately personalized reads; no accounts or sign-ups required. A daily selection of privately personalized reads; no accounts or sign-ups required. A daily selection of privately personalized reads; no accounts or sign-ups required. A daily selection of privately personalized reads; no accounts or sign-ups required.',
    },
    technologies: ['HTML', 'CSS', 'JavaScript'],
    links: ['https://github.com', 'https://heroku.com'],
  },
  {
    id: '2',
    title: 'Tonic',
    tags: ['Canopy', 'Back End dev', '2015'],
    imgsrc: 'images/project3.png',
    description: {
      small: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      big: 'A daily selection of privately personalized reads; no accounts or sign-ups required. A daily selection of privately personalized reads; no accounts or sign-ups required. A daily selection of privately personalized reads; no accounts or sign-ups required. A daily selection of privately personalized reads; no accounts or sign-ups required. A daily selection of privately personalized reads; no accounts or sign-ups required.',
    },
    technologies: ['HTML', 'CSS', 'Ruby on Rails'],
    links: ['https://github.com', 'https://heroku.com'],
  },
  {
    id: '3',
    title: 'Tonic',
    tags: ['Canopy', 'Back End dev', '2015'],
    imgsrc: 'images/project4.png',
    description: {
      small: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      big: 'A daily selection of privately personalized reads; no accounts or sign-ups required. A daily selection of privately personalized reads; no accounts or sign-ups required. A daily selection of privately personalized reads; no accounts or sign-ups required. A daily selection of privately personalized reads; no accounts or sign-ups required. A daily selection of privately personalized reads; no accounts or sign-ups required.',
    },
    technologies: ['HTML', 'CSS', 'Ruby on Rails'],
    links: ['https://github.com', 'https://heroku.com'],
  },
];

const navbarHamburger = document.querySelector('#navbar-hamburger');
const mobileMenu = document.querySelector('#mobile-menu');
const cross = document.querySelector('#cross');
navbarHamburger.addEventListener('click', () => {
  mobileMenu.style.display = 'block';
});

cross.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
});

document.querySelectorAll('.nav-link').forEach(
  (link) => {
    link.addEventListener('click', () => {
      mobileMenu.style.display = 'none';
    });
  },
);

let listOfelements = '';
let listProject = '';
projects.forEach((project, i) => {
  listOfelements = '';
  project.technologies.forEach((technologie) => {
    listOfelements += `<li class="tag">${technologie}</li>`;
  });
  listProject += `<div class="card">
  <img class="snapshot" src="${project.imgsrc}" alt="" />
  <div class="left-block ${i % 2 !== 0 ? 'right' : ''}">
      <h1>${project.title}</h1>
      <ul class="info">
          <li class="title">${project.tags[0]}</li>
          <li><img src="images/dot.png"></li>
          <li class="description">${project.tags[1]}</li>
          <li><img src="images/dot.png"></li>
          <li class="description">${project.tags[2]}</li>
      </ul>
      <p>${project.description.small}</p>
      <ul class="categories">
         ${listOfelements}
      </ul>
      <div>
          <button type="button" class="btn card-btn">See Project</button>
      </div>
  </div>
  </div>`;
});
const workSection = document.querySelector('#works');
workSection.innerHTML += `${listProject}`;
const divPopup = document.createElement('div');

const cardBtns = document.querySelectorAll('.card-btn');
cardBtns.forEach((cardBtn, i) => {
  cardBtn.addEventListener('click', () => {
    divPopup.style.display = 'flex';
    divPopup.classList.add('pop-up');
    listOfelements = '';
    projects[i].technologies.forEach((technologie) => {
      listOfelements += `<li class="tag">${technologie}</li>`;
    });
    const popupText = `
    <div class="pop-up-content">
        <div class="left-block ">
            <div class="pop-up-title">
                <h2>${projects[i].title}</h2>
                <img src="images/cross-dark.png" class="close-popup pointer" alt="cross-dark">
            </div>
            <ul class="info">
                <li class="title">${projects[i].tags[0]}</li>
                <li><img src="images/dot.png"></li>
                <li class="description">${projects[i].tags[1]}</li>
                <li><img src="images/dot.png"></li>
                <li class="description">${projects[i].tags[2]}</li>
            </ul>
            <img class="snapshot" src="${projects[i].imgsrc}" alt="" />
            <div class="pop-up-description">
                <div>
                    <p>${projects[i].description.big}
                    </p>
                </div>
                <div class="pop-up-technologies">
                    <ul class="categories">
                       ${listOfelements}
                    </ul>
                    <hr>
                    <div class="pop-up-btns">
                    
                        <a target="_blank" href="${projects[i].links[0]}" class="btn">See Live <img src="images/live-icon.svg"
                                alt=""></a>
                        <a target="_blank" href="${projects[i].links[1]}" class="btn">See Source <img src="images/github-blue-icon.svg"
                                alt=""></a>
                    </div>
                </div>

            </div>
        </div>
    </div>`;

    divPopup.innerHTML += popupText;
    workSection.appendChild(divPopup);
    const closePopup = document.querySelector('.close-popup');
    closePopup.addEventListener('click', () => {
      divPopup.style.display = 'none';
      divPopup.innerHTML = '';
    });
  });
});

const form = document.querySelector('#form');
const emailInvalid = document.querySelector('.email-invalid');
const errorMessage = document.querySelector('.error-message');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (form.elements.email.value.toLowerCase() === form.elements.email.value) {
    form.submit();
  } else {
    form.elements.email.style.border = '3px solid red';
    emailInvalid.textContent = `Email must be in lower case.Suggestion:   ${form.elements.email.value.toLowerCase()}`;
    errorMessage.textContent = 'The form didn\'t get submitted, Please fix the errors above';
    emailInvalid.style.display = 'block';
    setTimeout(() => {
      emailInvalid.style.opacity = '1';
    }, 20);
    errorMessage.style.display = 'block';

    setTimeout(() => {
      errorMessage.style.opacity = '1';
    }, 20);
    errorMessage.style.marginTop = '-40px';
    form.reset();
    form.elements.email.addEventListener('input', () => {
      emailInvalid.style.display = 'none';
      emailInvalid.style.opacity = '0';
      errorMessage.style.display = 'none';
      errorMessage.style.opacity = '0';
      emailInvalid.textContent = '';
      errorMessage.textContent = '';
      form.elements.email.style.removeProperty('border');
    });
  }
});