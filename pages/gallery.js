import React, { useState, useEffect } from "react";
import { getAllPhotos } from "@/helper/gallery";
import Image from "next/image";
import Head from "next/head";
import Link from 'next/link'


export async function getStaticProps() {
  const data = {
    title: "Big Blue Hotel | Gallery",
    description: "Big Blue Hotel in Amaliapolis has created a Gallery with photos for each room and the hotel as a whole. Visit our Gallery Page to see the amazing, cozy, and comfortable rooms Big Blue Hotel offers for a relaxing stay in Amaliapolis.",
  };

  return {
    props: data,
  };
}

function Gallery({title, description}) {
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
      window.scrollTo(0, 0);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 0) {
      const startIdx = (currentPage - 1) * 8;
      setPaginatedPhotos(filteredPhotos.slice(startIdx, startIdx + 8));
      setCurrentPage(currentPage - 1);
      window.scrollTo(0, 0);
    }

  };

  const openOverlay = (src) => {
    setOverlayImage(src);
  };

  const closeOverlay = () => {
    setOverlayImage(null);
  };

  return (
    <>
      <Head>
          <title>{title}</title>
          <meta charSet="UTF-8" />
          <meta name="language" content="en"></meta>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          
          {/* Confirmation of Ownership */}
          <meta name="google-site-verification" content="CctGWGYNVEGFlEqhIop1nIuWzauQEqLElNPIy1MH1rI" />
          
          {/* SEO start */}
          <meta name="description" content={description} />
          <meta name="keywords" content="Gallery, Photos, Big Blue Hotel photos, Amaliapolis Hotels photos, big blue hotel rooms" />
          
          {/* Open Graph meta tags */}
          <meta property="og:title" content="Gallery of Big Blue Hotel in Amaliapolis" />
          <meta property="og:description" content="Big Blue Hotel just created a Gallery with photos of Amaliapolis, the Hotel, and the rooms it provides. Take a look and Book now!" />
          <meta property="og:image" content="https://bigbluehotel.net/images/A3bedsideways.webp" />
          <meta property="og:url" content="https://bigbluehotel.net" />
          <meta property="og:type" content="website" />
          
          {/* Facebook Card meta tags */}
          <meta property="og:image" content="https://bigbluehotel.net/images/A3bedsideways.webp" />
          <meta property="og:url" content="https://bigbluehotel.net" />
          
          {/* Apple Touch Icon (for iOS devices) */}
          <Link rel="apple-touch-icon" sizes="180x180" href="https://bigbluehotel.net/images/images2/logo.JPG" />
          
          {/* Android Chrome Icon */}
          <Link rel="icon" sizes="192x192" href="https://bigbluehotel.net/images/images2/logo.JPG" />
          
          {/* SEO end */}
          <Link rel="preconnect" href="https://fonts.googleapis.com" />
          <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <Link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
          <Link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
          <Link rel="stylesheet" href="css/style.css" />
          
          <Link rel="shortcut icon" href="https://bigbluehotel.net/images/images2/logo.JPG" type="image/x-icon" />
      </Head>

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

            <div className="photo-grid-background" id="gallery">
              {/* Photo Grid with 2 rows & 4 columns */}
              <div className="photo-grid">
                {paginatedPhotos.map((photo, index) => (
                  <Image
                    width={400}
                    height={450}
                    key={index}
                    src={`/assets/${photo}`}
                    alt={`Gallery photo ${index + 1}`}
                    className="photo"
                    onClick={() => openOverlay(`${photo}`)}
                    loading="eager"
                    priority={true}
                    placeholder='blur'
                    blurDataURL={`/assets/${photo}`}
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
                <img src={`/assets/${overlayImage}`} alt="Enlarged gallery photo" className="modal-image" />
              </div>
            </div>
          )}
        </section>
      </div>
    </>
  );
}

export default Gallery;
