export function TestimonialSlider(sliderElement) {
    sliderElement.querySelector('.js-testimonial-slider-btn-previous').addEventListener('click', () => {
        showSlide(-1);
    });
    sliderElement.querySelector('.js-testimonial-slider-btn-next').addEventListener('click', () => {
        showSlide(1);
    });

    function showSlide(offset) {
        const slides = sliderElement.querySelector('.js-testimonial-slider-slides');
        const activeIndex = [...slides.children].indexOf(slides.querySelector('[data-active]'));
        let newIndex = activeIndex + offset;

        if (newIndex < 0) newIndex = slides.children.length - 1;
        if (newIndex >= slides.children.length) newIndex = 0;

        slides.children[newIndex].dataset.active = '';
        delete slides.children[activeIndex].dataset.active;
    }
}