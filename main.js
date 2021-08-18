/* Hamburger menu (Open/Close menu) */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
    element.addEventListener('click', () => {
        nav.classList.toggle('show')
    })
}

/* Menu items (Close menu) */
const links = document.querySelectorAll('nav ul li a')

for (const element of links) {
    element.addEventListener('click', () => {
        nav.classList.remove('show')
    })
}

/* Change Header shadow on scroll down */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
    if (window.scrollY >= navHeight) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
})
