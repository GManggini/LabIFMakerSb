let text = document.getElementById('text');
let subtext = document.getElementById('subtext');
let smoke01 = document.getElementById('smoke01');
let smoke02 = document.getElementById('smoke02');
let smoke03 = document.getElementById('smoke03');
let rocket = document.getElementById('rocket');



window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.right = value * 1.5 + 'px';
    subtext.style.left = value * 1.5 + 'px';
    rocket.style.top = value * -0.68 + 'px';
    smoke01.style.top = value * -1.5 + 'px';
    smoke02.style.top = value * -1.2 + 'px';
    smoke03.style.top = value * -1 + 'px'; 
})



/*item.style.region = value * speed + 'px';

onde region pode ser qlqr um margin top, top, left, rigth*/