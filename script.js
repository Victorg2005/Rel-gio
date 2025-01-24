const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector); // Seleciona múltiplos elementos

const hour = $('.hour');
const dots = $$('.dot');
const min = $('.min');
const sec = $('.sec');
const week = $('.week');
let showDot = true;

function updateClock() {
    showDot = !showDot;
    const now = new Date();

    dots.forEach(dot => dot.classList.toggle('invisible', showDot));

    hour.textContent = String(now.getHours()).padStart(2, '0');
    min.textContent = String(now.getMinutes()).padStart(2, '0');
    sec.textContent = String(now.getSeconds()).padStart(2, '0');

    Array.from(week.children).forEach((ele) => ele.classList.remove('active'));
    week.children[now.getDay()].classList.add('active');
}

setInterval(updateClock, 500);
updateClock(); 
