const root = document.documentElement;
const photo = document.querySelector('.photo');

/* Updates photo height custom property with value of the photo elements height. */
window.addEventListener('resize', () => {
    const height = photo.getBoundingClientRect().height;
    root.style.setProperty('--photo-height', height + 'px');
})