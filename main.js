let boutonToggle = document.querySelector('#menu');
let links = document.querySelector('.links');
let boutonClose = document.querySelector('.fa-close');
let section = document.querySelectorAll('section');
let navAnchor = document.querySelectorAll('nav a')


navHeight = links.offsetHeight;
window.onload = () => {
    links.style.height = "0";
}

boutonToggle.addEventListener('click',function(){
    currentNavHeight = links.offsetHeight;
    if (currentNavHeight == 0) {
        links.style.height = navHeight + 'px';
        section.forEach(item => item.style.filter = 'blur(10px)')
        section.style.transition = '0.5s filter'
    } else {
        links.style.height = '0'
        section.forEach(item => item.style.filter = 'blur(0)')
    }
})

navAnchor.forEach(a => a.onclick = () => {
    links.style.height = "0";
    section.forEach(item => item.style.filter = 'blur(0)')
})





// scrollreveal

ScrollReveal().reveal('.reveal-left', {
    duration: 1000,
    origin: 'left',
    distance: '100px',
    reset: true
});

ScrollReveal().reveal('.reveal-bottom', {
    duration: 1000,
    origin: 'bottom',
    distance: '100px',
    reset: true
});

ScrollReveal().reveal('.reveal-top', {
    duration: 1000,
    origin: 'top',
    distance: '100px',
    reset: true
});


ScrollReveal().reveal('.reveal-right', {
    duration: 1000,
    origin: 'right',
    distance: '100px',
    reset: true
});

ScrollReveal().reveal('.reveal-zoom-in', {
    duration: 2000,
    scale: 0.5,
    reset: true
});


ScrollReveal().reveal('.reveal-zoom-out', {
    duration: 2000,
    scale: 1.5,
    reset: true
});

ScrollReveal().reveal('.reveal-zoom-in', {
    duration: 2000,
    scale: 0.5,
    reset: true
});

ScrollReveal().reveal('.reveal-fondu', {
    duration: 2000,
    opacity: 0.2,
    reset: true
});


