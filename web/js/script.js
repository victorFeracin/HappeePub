//Responsive hamburger menu
const bttnMobile = document.getElementById('bttn-mobile');

function toggleMenu(event) {
    if(event.type === 'touchstart') {
        event.preventDefault();
    }
    const nav = document.getElementById('menu-nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if(active) {
        event.currentTarget.setAttribute('aria-label', 'Close Menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Open Menu');
    }
}

bttnMobile.addEventListener('click', toggleMenu);
bttnMobile.addEventListener('touchstart', toggleMenu);

//Slider
if(window.SimpleSlide) {
    new SimpleSlide({
        slide: "intro",
        time: 5000,
        nav: true
    });
}

//Animation
if(window.SimpleAnime) {
    new SimpleAnime();
}