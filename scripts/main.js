import { TestimonialSlider } from './testimonial-slider.js';

document.querySelectorAll('.js-testimonial-slider').forEach((sliderElement) => {
    new TestimonialSlider(sliderElement);
});

updatePhotoHeight();

window.addEventListener('resize', updatePhotoHeight);

/* Updates photo height custom property with value of the photo elements height. */
function updatePhotoHeight() {
    const photo = document.querySelector('.js-testimonial-slider-photo');
    const height = photo.getBoundingClientRect().height;
    document.documentElement.style.setProperty('--photo-height', `${height / 16}rem`);
}