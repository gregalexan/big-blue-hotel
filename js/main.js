/* This is the Main JavaScript file of the Website */
/* It is about the FAQ part, the Gallery, and the Mobile Version of the Website. */

/* FAQ and Mobile Version Code */

/* Initializes the Frequently Asked Questions Body */
function initializeFAQ() {
    /* Targets the FAQ container */
    const faqContainer = document.querySelector('.faq-content');
    /* Waits for the user to click the Icon, then changes the icon and shows (or not) the body. */
    faqContainer.addEventListener('click', (e) => {
        /* Gets the Header. */
        const groupHeader = e.target.closest('.faq-group-header');

        if (!groupHeader) return;

        const group = groupHeader.parentElement;
        const groupBody = group.querySelector('.faq-group-body');
        const icon = groupHeader.querySelector('i');

        /* Toggles the Icon. */
        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus');

        /* Toggles Visibility of the body. */
        groupBody.classList.toggle('open');

        /* Closes other open FAQ bodies. */
        const otherGroups = faqContainer.querySelectorAll('.faq-group');
        otherGroups.forEach((otherGroup) => {
            if (otherGroup !== group) {
                const otherGroupBody = otherGroup.querySelector('.faq-group-body');
                const otherIcon = otherGroup.querySelector('.faq-group-header i');
                otherGroupBody.classList.remove('open');
                otherIcon.classList.remove('fa-minus');
                otherIcon.classList.add('fa-plus');
            }
        })
    });
}

/* Toggles the Menu (Mobile Menu - Main Menu). */
function toggleMenu() {
    /* Targets the hamburger-button */
    const hamburgerButton = document.querySelector('.hamburger-button');
    /* Targets the mobile-menu */
    const mobileMenu = document.querySelector('.mobile-menu');
    hamburgerButton.addEventListener('click', () => mobileMenu.classList.toggle('active'))
}

document.addEventListener('DOMContentLoaded', () => {
    console.log("Loaded!")
    /* Initializes the Page by Default. */
    toggleMenu();
    initializeFAQ();
});

/* Gallery Code */

const imageData = {
    all: ['images/A1bathroom.jpg', 'images/A1bathroom2.jpg',
        'images/A1bathroom3.jpg','images/A1bed.jpg','images/A1bed2.jpg',
        'images/A1bedcloseup.jpg','images/A1kitchen.jpg', 'images/A1Kitchen2.jpg',
        'images/A1kitchen3.jpg', 'images/A1roomfromdoor.jpg', 'images/A1roomfromdoor2.jpg'
        ,'images/A1wholeroom.jpg', 'images/A1wholeroomfrombed.jpg', 'images/A1wholeroomfrombed2.jpg',
        'images/A1wholeroomfrombed3.jpg', 'images/A2picfromdoor.jpg', 'images/A2room1bed.jpg',
        'images/A2room1picfrombed.jpg', 'images/A2room1picfromdoor.jpg', 'images/A2room2.jpg',
        'images/A3bathroom.jpg', 'images/A3bed.jpg', 'images/A3bed2.jpg', 'images/A3bedsideways.jpg',
        'images/A3picfrombed.jpg', 'images/A3room.jpg', 'images/A3wholeroom.jpg', 'images/Amaliapolis.jpg',
        'images/AmaliapolisBeach.jpg', 'images/bigbluepicfrompool.jpg', 'images/clock.jpg', 'images/I2.jpg',
        'images/I2balcony.jpg', 'images/I2bathroom.jpg', 'images/I2bathroom2.jpg', 'images/I2Kitchen.jpg',
        'images/I2room.jpg', 'images/I2roombalcony.jpg', 'images/I2roombalcony2.jpg', 'images/I2roomfrombalcony.jpg',
        'images/jacuzzi.jpeg', 'images/privatepool.jpeg', 'images/wines(A2room1).jpg', 'images/wines(A2room1)2.jpg',
        'images/wines (A1).jpg', 'images/wines2(A1).jpg', 'images/wines3(A1).jpg'],
    A1: ['images/A1bathroom.jpg', 'images/A1bathroom2.jpg',
        'images/A1bathroom3.jpg','images/A1bed.jpg','images/A1bed2.jpg',
        'images/A1bedcloseup.jpg','images/A1kitchen.jpg', 'images/A1kitchen2.jpg',
        'images/A1kitchen3.jpg', 'images/A1roomfromdoor.jpg', 'images/A1roomfromdoor2.jpg'
        ,'images/A1wholeroom.jpg', 'images/A1wholeroomfrombed.jpg', 'images/A1wholeroomfrombed2.jpg',
        'images/A1wholeroomfrombed3.jpg','images/wines (A1).jpg', 'images/wines2(A1).jpg', 'images/wines3(A1).jpg'],
    A2: ['images/A2picfromdoor.jpg', 'images/A2room1bed.jpg',
        'images/A2room1picfrombed.jpg', 'images/A2room1picfromdoor.jpg', 'images/A2room2.jpg',
        'images/wines(A2room1).jpg', 'images/wines(A2room1)2.jpg'],
    A3: ['images/A3bathroom.jpg', 'images/A3bed.jpg', 'images/A3bed2.jpg', 'images/A3bedsideways.jpg',
        'images/A3picfrombed.jpg', 'images/A3room.jpg', 'images/A3wholeroom.jpg'],
    I2: ['images/I2.jpg',
        'images/I2balcony.jpg', 'images/I2bathroom.jpg', 'images/I2bathroom2.jpg', 'images/I2Kitchen.jpg',
        'images/I2room.jpg', 'images/I2roombalcony.jpg', 'images/I2roombalcony2.jpg', 'images/I2roomfrombalcony.jpg'],
};

/* Displays images based on selected category for English Language. */
function showCategory(category) {
    /* Gets the element. */
    const imagesContainer = document.getElementById('imageContainer');
    /* Clears previous images. */
    imagesContainer.innerHTML = '';

    /* Shows the images. */
    const images = imageData[category];
    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image;
        imgElement.classList.add('image');
        imgElement.addEventListener('click', () => openModal(image));
        imagesContainer.appendChild(imgElement);
    });
}
/* Displays modal with clicked image English Language. */
function openModal(image) {
    const modal = document.getElementById('myModal');
    const modalImg = document.getElementById('modalImage');
    modal.style.display = 'block';
    modalImg.src = image;

    /* Closes the modal when clicking the close button */
    document.querySelector("#myModal .close").addEventListener("click", function() {
        modal.style.display = "none";
    });
}
/* Displays images based on selected category for Greek Language. */
function showCategoryGR(category) {
    /* Gets the element. */
    const imagesContainer = document.getElementById('imageContainerGR');
    /* Clears previous images. */
    imagesContainer.innerHTML = '';

    /* Shows the images. */
    const images = imageData[category];
    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = '../' + image;
        imgElement.classList.add('image');
        imgElement.addEventListener('click', () => openModalGR('../' + image));
        imagesContainer.appendChild(imgElement);
    });
}
/* Displays modal with clicked image Greek Language. */
function openModalGR(image) {
    const modal = document.getElementById('myModalGR');
    const modalImg = document.getElementById('modalImageGR');
    modal.style.display = 'block';
    modalImg.src = image;

    /* Closes the modal when clicking the close button */
    document.querySelector("#myModalGR .closeGR").addEventListener("click", function() {
        modal.style.display = "none";
    });
}
