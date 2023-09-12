import "./js/mobile-menu.js"

const header = document.querySelector('.js-header');
let prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', () => {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
        header.classList.remove('hidden');
    } else {
        header.classList.add('hidden');
    }
    prevScrollPos = currentScrollPos;
});
