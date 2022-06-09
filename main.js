const hamBtn = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links')
const mobileMenu = document.querySelector('.mobile-menu');


hamBtn.addEventListener('click', () => {

    hamBtn.classList.toggle('open')
    mobileMenu.classList.toggle('display')
    mobileMenu.classList.toggle('opacity')

})


const mobileLinks = document.querySelectorAll('.nav-mobile-item')

var mobileLength = mobileLinks.length


for(let i = 0; i < mobileLength; i++) {

    mobileLength[i].addEventListener(click, () => {
        mobileMenu.classList.toggle('open')
        mobileMenu.classList.toggle('display')
    mobileMenu.classList.toggle('opacity')

    })
}