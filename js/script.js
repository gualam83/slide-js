const buttonNext = document.querySelector('.next');
const buttonPrev = document.querySelector('.prev');
const slider = document.querySelectorAll('.slide');

let i = 0;

buttonNext.addEventListener('click', next);
buttonPrev.addEventListener('click', prev);

function style() {
    slider.forEach((slide) => {
        slide.style.display = 'none';
    });
    slider[i].style.display = 'flex';
}

function next() {
    i++
    if (i > slider.length - 1) {
        i = 0;
    }
    style();
}
function prev() {
    i--
    if (i < 0) {
        i = slider.length - 1;
    }
    style();
}