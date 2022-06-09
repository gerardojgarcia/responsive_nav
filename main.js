const hamBtn = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links')
const mobileMenu = document.querySelector('.mobile-menu');


hamBtn.addEventListener('click', () => {

    hamBtn.classList.toggle('open')
    mobileMenu.classList.toggle('display')

})