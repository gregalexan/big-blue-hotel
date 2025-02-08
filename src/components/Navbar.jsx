import React, { useRef } from 'react';


function Navbar() {
  const mobileMenuRef = useRef(null);

  // Συνάρτηση για την εναλλαγή κατάστασης του μενού
  const toggleMenu = () => {
    if (mobileMenuRef.current) {
      mobileMenuRef.current.classList.toggle('active'); // Χρησιμοποιούμε classList αντί για classNameList
    }
  };

  
  return (
    <div>
      <nav className="navbar">
        <div className="container">
          {/* <!-- Logo of the Hotel. --> */}
          <div className="logo">
            <a href="/">
              <img
                src="https://bigbluehotel.net/images/images2/logoNoBG.png"
                alt="This shows the unique logo of Big Blue Hotel in Amaliapolis."
              />
            </a>
          </div>
          {/* <!-- Main Menu of the Website. --> */}
          <div className="main-menu">
            <ul>
              <li>
                <a href="/about" aria-label="A page that provides more information about Big Blue Hotel in Magnesia Greece">
                  About Big Blue Hotel
                </a>
              </li>
              <li>
                <a href="/#services" aria-label="Big Blue Hotel services and facilities to provide guests a wonderful and relaxing stay.">
                  Services
                </a>
              </li>
              <li>
                <a href="/#rewards" aria-label="Big Blue Hotel founded in May 2022 and has received many rewards such as Top Hotel in Amaliapolis for 2023">
                  Rewards
                </a>
              </li>
              <li>
                <a href="/location" aria-label="Big Blue Hotel is Located in Amaliapolis Magnesia Greece just outside Almyros and Volos.">
                  Location
                </a>
              </li>
              <li>
                <a href="/gallery" aria-label="Big Blue Hotel Photos and Gallery with Pictures of the wonderful rooms">
                  Gallery
                </a>
              </li>
              <li>
                <a href="/location#tours" aria-label="Big Blue Hotel in Amaliapolis provides the user a list of Tours in Almyros , Volos , Pelion , Sporades and Panagia Xenia.">
                  Tours
                </a>
              </li>
              <li>
                <a href="/#help" aria-label="Big Blue Hotel Frequently asked Questions are answered for the users convenience">
                  Get Help
                </a>
              </li>
              <li>
                <a className="btn btn-primary" href="/book" aria-label="Booking Page of Big Blue Hotel in Amaliapolis Greece.">
                  <i className="fas fa-user"></i> Book Now!{' '}
                </a>
              </li>
            </ul>
          </div>
          {/* <!-- Mobile Version --> */}
          <button className="hamburger-button" onClick={toggleMenu}>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
          </button>
          {/* <!-- Mobile Menu --> */}
          <div className="mobile-menu" ref={mobileMenuRef}>
            <ul>
              <li>
                <a href="/about" aria-label="A page that provides more information about Big Blue Hotel">
                  About Big Blue Hotel
                </a>
              </li>
              <li>
                <a href="/#services" aria-label="Big Blue Hotel services and facilities to provide guests a wonderful and relaxing stay.">
                  Services
                </a>
              </li>
              <li>
                <a href="/#rewards" aria-label="Big Blue Hotel founded in May 2022 and has received many rewards such as Top Hotel in Amaliapolis for 2023">
                  Rewards
                </a>
              </li>
              <li>
                <a href="/location" aria-label="Big Blue Hotel is Located in Amaliapolis Magnesia Greece just outside Almyros and Volos.">
                  Location
                </a>
              </li>
              <li>
                <a href="/gallery" aria-label="Big Blue Hotel Photos and Gallery with Pictures of the wonderful rooms">
                  Gallery
                </a>
              </li>
              <li>
                <a href="/location#tours" aria-label="Big Blue Hotel in Amaliapolis provides the user a list of Tours in Almyros , Volos , Pelion , Sporades and Panagia Xenia.">
                  Tours
                </a>
              </li>
              <li>
                <a href="/#help" aria-label="Big Blue Hotel Frequently asked Questions are answered for the users convenience">
                  Get Help
                </a>
              </li>
              <li>
                <a className="btn btn-primary" href="/book" aria-label="Booking Page of Big Blue Hotel in Amaliapolis Greece.">
                  <i className="fas fa-user"></i> Book Now!{' '}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
