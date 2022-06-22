const root = document.documentElement;

const testimonialSliders = document.querySelectorAll('.testimonials-slider');
testimonialSliders.forEach((slider) => {
    slider.querySelector('.previous').addEventListener('click', () => {
        showSlide(-1);
    });
    slider.querySelector('.next').addEventListener('click', () => {
        showSlide(1);
    });

    function showSlide(offset) {
        const slides = slider.querySelector('.slides');
        const activeIndex = [...slides.children].indexOf(slides.querySelector('.active'));
        let newIndex = activeIndex + offset;

        if (newIndex < 0) newIndex = slides.children.length - 1;
        if (newIndex >= slides.children.length) newIndex = 0;

        slides.children[newIndex].classList.add('active');
        slides.children[activeIndex].classList.remove('active');
    }
});

/* Updates photo height custom property with value of the photo elements height. */
window.addEventListener('resize', () => {
    const photo = document.querySelector('.photo');
    const height = photo.getBoundingClientRect().height;
    root.style.setProperty('--photo-height', height + 'px');
})