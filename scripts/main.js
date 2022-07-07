import { TestimonialSlider } from './testimonial-slider.js';

const root = document.documentElement;

document.querySelectorAll('.js-testimonial-slider').forEach((sliderElement) => {
    new TestimonialSlider(sliderElement);
})

/* Updates photo height custom property with value of the photo elements height. */
window.addEventListener('resize', () => {
    const photo = document.querySelector('.js-testimonial-slider-photo');
    const height = photo.getBoundingClientRect().height;
    root.style.setProperty('--photo-height', height + 'px');
})