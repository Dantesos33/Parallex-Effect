const m1 = document.querySelector('.mountain-1');
const m2 = document.querySelector('.mountain-2');
const m3 = document.querySelector('.mountain-3');
const m4 = document.querySelector('.mountain-4');
const title = document.querySelector('.title');

window.addEventListener('scroll',()=>{
    m1.style.marginTop = scrollY + 'px';
    m2.style.marginTop = scrollY * 0.8 + 'px';
    m3.style.marginTop = scrollY * 0.6 + 'px';
    title.style.marginTop = scrollY * 0.5 + 'px';
})