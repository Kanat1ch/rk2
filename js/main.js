const menuButton = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-nav');

menuButton.addEventListener('click', toggleMenu);

function toggleMenu() {
    mobileMenu.classList.toggle('toggle-menu');
}