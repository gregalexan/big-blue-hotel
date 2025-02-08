const categories = ["A1", "A2", "A3", "I2", "BigBlue"]

const photos = {
    BigBlue: [],
    A1: [],
    A2: [],
    A3: [],
    I2: [],
};
/* Loads photos into the array */
function loadCategoryPhotos(category, count) {
    for (let i = 1; i <= count; i++) {
        photos[category].push(`images/${category}/Big_Blue_Hotel_Room_${category}_${i}.jpg`);
    }
}

export const getAllPhotos = () => {
    loadCategoryPhotos("A1", 41)
    loadCategoryPhotos("A2", 16)
    loadCategoryPhotos("A3", 19)
    loadCategoryPhotos("I2", 24)
    loadCategoryPhotos("BigBlue", 20)

    return photos
}
