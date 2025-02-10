/* JS file for the Room Slideshow */
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.room-images-carousel');
    const images = carousel.querySelectorAll('img');
    /* Clone Images and Append them to the Carousel */
    images.forEach(image => {
        const clone = image.cloneNode(true);
        carousel.appendChild(clone);
    });
});
