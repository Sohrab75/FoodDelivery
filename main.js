const mobileMenu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.close-menu');
const mobileNavigation = document.querySelector('.mobile-navigation');

mobileMenu.addEventListener('click', () => {
    mobileNavigation.classList.add('active');
    closeMenu.classList.add('active');
});
closeMenu.addEventListener('click', () => {
    mobileNavigation.classList.remove('active')
    closeMenu.classList.remove('active');
});
