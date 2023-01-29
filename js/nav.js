const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

function toggleMenu() {
    nav.classList.toggle('active');
}

menuToggle.addEventListener('click', toggleMenu);
