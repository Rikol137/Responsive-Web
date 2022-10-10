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