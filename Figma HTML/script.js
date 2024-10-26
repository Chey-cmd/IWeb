// function toggleMenu() {
//     const nav = document.querySelector('.header nav');
//     const hamburger = document.querySelector('.hamburger');
//     nav.classList.toggle('active');
//     hamburger.classList.toggle('active');
// }

const hamburger = document.querySelector('.header .hamburger');
const navMenu = document.querySelector('.header nav');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
