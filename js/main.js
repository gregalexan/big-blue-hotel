/* FAQ Code */
document.addEventListener('DOMContentLoaded', () => {
    const faqContainer = document.querySelector('.faq-content');
    faqContainer.addEventListener('click', (e) => {
        const groupHeader = e.target.closest('.faq-group-header');

        if (!groupHeader) return;

        const group = groupHeader.parentElement;
        const groupBody = group.querySelector('.faq-group-body');
        const icon = groupHeader.querySelector('i');

        /* Toggle Icon */
        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus');

        /* Toggle Visibility of the body */
        groupBody.classList.toggle('open');

        /* Close other open FAQ bodies */
        const otherGroups =faqContainer.querySelectorAll('.faq-group');
        otherGroups.forEach((otherGroup) => {
            if (otherGroup !== group) {
                const otherGroupBody = otherGroup.querySelector('.faq-group-body');
                const otherIcon = otherGroup.querySelector('.faq-group-header i');
                otherGroupBody.classList.remove('open');
                otherIcon.classList.remove('fa-minus');
                otherIcon.classList.add('fa-plus');
            }
        })

    })
})

/* Gallery */

const imageData = {
    all: ['images/A1bathroom.jpg', 'images/A1bathroom2.jpg',
        'images/A1bathroom3.jpg','images/A1bed.jpg','images/A1bed2.jpg',
        'images/A1bedcloseup.jpg','images/A1kitchen.jpg', 'images/A1kitchen2.jpg',
        'images/A1kitchen3.jpg', 'images/A1roomfromdoor.jpg', 'images/A1roomfromdoor2.jpg'
        ,'images/A1wholeroom.jpg', 'images/A1wholeroomfrombed.jpg', 'images/A1wholeroomfrombed2.jpg',
        'images/A1wholeroomfrombed3.jpg', 'images/A2picfromdoor.jpg', 'images/A2room1bed.jpg',
        'images/A2room1picfrombed.jpg', 'images/A2room1picfromdoor.jpg', 'images/A2room2.jpg',
        'images/A3bathroom.jpg', 'images/A3bed.jpg', 'images/A3bed2.jpg', 'images/A3bedsideways.jpg',
        'images/A3picfrombed.jpg', 'images/A3room.jpg', 'images/A3wholeroom.jpg', 'images/Amaliapolis.jpg',
        'images/AmaliapolisBeach.jpg', 'images/bigbluepicfrompool.jpg', 'images/clock.jpg', 'images/I2.jpg',
        'images/I2balcony.jpg', 'images/I2bathroom.jpg', 'images/I2bathroom2.jpg', 'images/I2kitchen.jpg',
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
        'images/I2balcony.jpg', 'images/I2bathroom.jpg', 'images/I2bathroom2.jpg', 'images/I2kitchen.jpg',
        'images/I2room.jpg', 'images/I2roombalcony.jpg', 'images/I2roombalcony2.jpg', 'images/I2roomfrombalcony.jpg'],
};

/* Function to display images based on selected category */
function showCategory(category) {
    const imagesContainer = document.getElementById('imageContainer');
    imagesContainer.innerHTML = ''; // Clear previous images

    const images = imageData[category];
    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image;
        imgElement.classList.add('image');
        imgElement.addEventListener('click', () => openModal(image));
        imagesContainer.appendChild(imgElement);
    });
}

/* Function to display modal with clicked image */
function openModal(image) {
    const modal = document.getElementById('myModal');
    const modalImg = document.getElementById('modalImage');
    modal.style.display = 'block';
    modalImg.src = image;
}

/* Initially show all photos */
showCategory('all');

// Get the <span> element that closes the modal
const span = document.getElementsByClassName('close')[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
};