let menu = document.querySelector("#menu")
let navbar = document.querySelector(".navbar")

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

window.onscroll = () => {
    menu.classList.remove('bx-x')
    navbar.classList.remove('active')
}

// typing text code 

const typed = new Typed('.multiple-text', {
      strings: ['Stay Motivated.', 'Stay Consistent.','Get Fit.', 'Live Life.'],
      typeSpeed: 60,
      backSpeed: 60,
      backDelay: 1000,
      loop: true,
    });