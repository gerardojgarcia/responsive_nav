const hamBtn = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links')
const mobileMenu = document.querySelector('.mobile-menu');

// Open Mobile Menu on Nav Click


hamBtn.addEventListener('click', () => {

    hamBtn.classList.toggle('open')
    mobileMenu.classList.toggle('display')
    mobileMenu.classList.toggle('opacity')

})




// CLose mobile Menu on Mobile Link CLick



const mobileLinks = document.querySelectorAll('.nav-mobile-item')

var mobileLength = mobileLinks.length


for(let i = 0; i < mobileLength; i++) {

    mobileLength[i].addEventListener(click, () => {
        mobileMenu.classList.toggle('open')
        mobileMenu.classList.toggle('display')
    mobileMenu.classList.toggle('opacity')

    })
}