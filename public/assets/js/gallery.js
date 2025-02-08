/* Load Photos */
const categories = ['A1', 'A2', 'A3', 'I2', 'BigBlue'];
const photos = {
    A1: [],
    A2: [],
    A3: [],
    I2: [],
    BigBlue: []
};
/* Loads photos into the array */
function loadCategoryPhotos(category, count) {
    for (let i = 1; i <= count; i++) {
        photos[category].push(`images/${category}/Big_Blue_Hotel_Room_${category}_${i}.jpg`);
    }
}
// Load photos for each category (replace counts with the actual number of photos in each category)
loadCategoryPhotos('A1', 41); // replace 10 with actual number of photos in A1
loadCategoryPhotos('A2', 15); // replace 10 with actual number of photos in A2
loadCategoryPhotos('A3', 19); // replace 10 with actual number of photos in A3
loadCategoryPhotos('I2', 24); // replace 10 with actual number of photos in I2
loadCategoryPhotos('BigBlue', 20); // replace 10 with actual number of photos in BigBlue

const all_photos = [...photos.BigBlue, ...photos.A1, ...photos.A2, ...photos.A3, ...photos.I2];

function loadPhotos(photos) {
    const photoContainer = $('#photo-container-en');
    photoContainer.empty();
    photos.forEach(src => {
        const img = $('<img>')
            .attr('src', src)
            .addClass('photo')
            .hide(); // Initially hide all photos
        photoContainer.append(img);
    });
    $('.photo').show();
}

$(document).ready(function() {

    // Show all photos by default
    loadPhotos(all_photos);

    // Filter photos by category
    $('.filter-btn').click(function() {
        const filter = $(this).attr('data-filter');
        let photosToLoad;
        switch (filter) {
            case 'A1':
                photosToLoad = photos.A1;
                break;
            case 'A2':
                photosToLoad = photos.A2;
                break;
            case 'A3':
                photosToLoad = photos.A3;
                break;
            case 'I2':
                photosToLoad = photos.I2;
                break;
            case 'BigBlue':
                photosToLoad = photos.BigBlue;
                break;
            case 'all':
            default:
                photosToLoad = all_photos;
                break;
        }
        loadPhotos(photosToLoad);
    });

    // Enlarge photo in overlay
    $(document).on('click', '.photo', function() {
        const src = $(this).attr('src');
        $('#overlay-img-en').attr('src', src);
        $('#overlay-en').show();
    });

    // Close overlay
    $('.close').click(function() {
        $('#overlay-en').hide();
    });

    // Close overlay when clicking outside the image
    $('#overlay-en').click(function(event) {
        if ($(event.target).is('#overlay-en')) {
            $(this).hide();
        }
    });
});
