const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.cont1');
// const drop = document.querySelector('.dropdown-content a')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navbar.classList.toggle('open');
})

// drop.addEventListener('click', () => {
//     drop.classList.toggle('open')
// })