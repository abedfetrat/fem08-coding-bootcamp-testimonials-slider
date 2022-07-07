export function TestimonialSlider(sliderElement) {
    sliderElement.querySelector('.js-testimonial-slider-btn-previous').addEventListener('click', () => {
        showSlide(-1);
    });
    sliderElement.querySelector('.js-testimonial-slider-btn-next').addEventListener('click', () => {
        showSlide(1);
    });

    const slides = sliderElement.querySelector('.js-testimonial-slider-slides');
    // For accessibility purposes, adds information about the slide index to each slide
    // and slides that are visually hidden with CSS are aslo being hidden from Screen Readers
    // by setting the aria-hidden attribute
    [...slides.children].forEach((slide, index, array) => {
        slide.setAttribute('aria-label', `slide ${index + 1} of ${array.length}`);
        if (!slide.hasAttribute('data-active')) {
            slide.setAttribute('aria-hidden', 'true');
        }
    });

    function showSlide(offset) {
        const activeIndex = [...slides.children].indexOf(slides.querySelector('[data-active]'));
        let newIndex = activeIndex + offset;

        if (newIndex < 0) newIndex = slides.children.length - 1;
        if (newIndex >= slides.children.length) newIndex = 0;

        // Swap the active data attribute from the previous slide to the new one
        slides.children[newIndex].dataset.active = '';
        delete slides.children[activeIndex].dataset.active;
        // Swap the aria-hidden attribute from the previous slide to the new one
        slides.children[newIndex].removeAttribute('aria-hidden');
        slides.children[activeIndex].setAttribute('aria-hidden', 'true');
    }
}