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
function changeHeaderWhenScroll() {
    if (window.scrollY >= navHeight) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
}

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        767: {
            slidesPerView: 2,
            setWrapperSize: true
        }
    }
})

// Scroll Reveal
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(
    `
    #home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #contacts .text, #contacts .links,
    footer .brand, footer .social
    `,
    { interval: 100 }
)

// Back to Top button
function backToTop() {
    const backToTopButton = document.querySelector('.back-to-top')
    if (window.scrollY >= 560) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

const sections = document.querySelectorAll('main section[id]')

// Active Menu
function activateMenuAtCurentSection() {
    const checkPoint = window.pageYOffset + (window.innerHeight / 8) * 4
    for (const section of sections) {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const checkPointStart = checkPoint >= sectionTop
        const checkPointEnd = checkPoint <= sectionTop + sectionHeight

        if (checkPointStart && checkPointEnd) {
            document
                .querySelector('nav ul li a[href*=' + sectionId + ']')
                .classList.add('active')
        } else {
            document
                .querySelector('nav ul li a[href*=' + sectionId + ']')
                .classList.remove('active')
        }
    }
}

// Events when scroll
window.addEventListener('scroll', function () {
    changeHeaderWhenScroll()
    backToTop()
    activateMenuAtCurentSection()
})
