import React, { useState, useEffect } from "react";
import { getAllPhotos } from "../helper/gallery";

function Gallery() {
  const [pictures, setPictures] = useState({});
  const [filteredPhotos, setFilteredPhotos] = useState([]);
  const [paginatedPhotos, setPaginatedPhotos] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [overlayImage, setOverlayImage] = useState(null);
  const [categories, setCategories] = useState(["A1", "A2", "A3", "I2"]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Fetch images when component mounts
  useEffect(() => {
    const photos = getAllPhotos();
    setPictures(photos);

    // Flatten the images for all categories and set them as the default view
    const allPhotos = Object.values(photos).flat();
    setFilteredPhotos(allPhotos);
    setPaginatedPhotos(allPhotos.slice(0, 8));
    setTotalPages(Math.ceil(allPhotos.length / 8));
  }, []);

  const filterPhotos = (category) => {
    let filtered = category === "all" ? Object.values(pictures).flat() : pictures[category] || [];

    setSelectedCategory(category);
    setFilteredPhotos(filtered);
    setCurrentPage(0);
    setTotalPages(Math.ceil(filtered.length / 8));
    setPaginatedPhotos(filtered.slice(0, 8));
  };

  const goToNextPage = () => {
    if (currentPage < totalPages - 1) {
      const startIdx = (currentPage + 1) * 8;
      setPaginatedPhotos(filteredPhotos.slice(startIdx, startIdx + 8));
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 0) {
      const startIdx = (currentPage - 1) * 8;
      setPaginatedPhotos(filteredPhotos.slice(startIdx, startIdx + 8));
      setCurrentPage(currentPage - 1);
    }
  };

  const openOverlay = (src) => {
    setOverlayImage(src);
  };

  const closeOverlay = () => {
    setOverlayImage(null);
  };

  return (
    <div className={overlayImage ? "gallery-blurred" : ""}>
      <section className="gallery" id="gallery-en">
        <div className="container">
          <h1>Gallery</h1>
          <h2>Big Blue Hotel</h2>
          <div className="button-container">
            <button
              className={`btn ${selectedCategory === "all" ? "btn-primary" : "btn-secondary"} filter-btn`}
              onClick={() => filterPhotos("all")}
            >
              All Photos
            </button>
            {categories.map((category) => (
              <button
                key={category}
                className={`btn ${selectedCategory === category ? "btn-primary" : "btn-secondary"} filter-btn`}
                onClick={() => filterPhotos(category)}
              >
                Room {category}
              </button>
            ))}
          </div>

          <div className="photo-grid-background">
            {/* Photo Grid with 2 rows & 4 columns */}
            <div className="photo-grid">
              {paginatedPhotos.map((photo, index) => (
                <img
                  key={index}
                  src={`https://bigbluehotel.net/${photo}`}
                  alt={`Gallery photo ${index + 1}`}
                  className="photo"
                  onClick={() => openOverlay(`${photo}`)}
                  loading="lazy"
                />
              ))}
            </div>
          </div>              

          {filteredPhotos.length > 0 && (
            <div className="pagination-controls">
              {currentPage > 0 && (
                <button id="prev" className="btn btn-primary" onClick={goToPreviousPage}>
                  Back
                </button>
              )}
              <span id="page-number" className="page-number">
                Page {currentPage + 1}
              </span>
              {currentPage < totalPages - 1 && (
                <button id="next" className="btn btn-primary" onClick={goToNextPage}>
                  Next
                </button>
              )}
            </div>
          )}
        </div>

        {overlayImage && (
          <div className="modal-overlay">
            <div className="modal-content">
              <button className="close-modal" onClick={closeOverlay}>
                &times;
              </button>
              <img src={`https://bigbluehotel.net/${overlayImage}`} alt="Enlarged gallery photo" className="modal-image" />
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default Gallery;
