import React, { useRef } from 'react';

function NavbarGreek() {
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
          {/* <!-- Logo του Ξενοδοχείου. --> */}
          <div className="logo">
            <a href="/greek">
              <img
                src="https://bigbluehotel.net/images/images2/logoNoBG.png"
                alt="Αυτό δείχνει το μοναδικό λογότυπο του Big Blue Hotel στην Αμαλιάπολη."
              />
            </a>
          </div>
          {/* <!-- Κύριο Μενού Ιστοσελίδας. --> */}
          <div className="main-menu">
            <ul>
              <li>
                <a href="/greek/about" aria-label="Μια σελίδα που παρέχει περισσότερες πληροφορίες για το Big Blue Hotel στην Μαγνησία Ελλάδα">
                   Tο Big Blue Hotel
                </a>
              </li>
              <li>
                <a href="/greek/#services" aria-label="Υπηρεσίες του Big Blue Hotel και ανέσεις για μια υπέροχη και χαλαρωτική διαμονή.">
                  Υπηρεσίες
                </a>
              </li>
              <li>
                <a href="/greek/#rewards" aria-label="Το Big Blue Hotel ιδρύθηκε τον Μάιο του 2022 και έχει λάβει πολλές διακρίσεις, όπως το Καλύτερο Ξενοδοχείο στην Αμαλιάπολη για το 2023">
                  Βραβεία
                </a>
              </li>
              <li>
                <a href="/greek/location" aria-label="Το Big Blue Hotel βρίσκεται στην Αμαλιάπολη Μαγνησίας, ακριβώς έξω από τον Άλμυρο και τον Βόλο.">
                  Τοποθεσία
                </a>
              </li>
              <li>
                <a href="/greek/gallery" aria-label="Φωτογραφίες του Big Blue Hotel και Γκαλερί με εικόνες των υπέροχων δωματίων">
                  Φωτογραφίες
                </a>
              </li>
              <li>
                <a href="/greek/location#tours" aria-label="Το Big Blue Hotel στην Αμαλιάπολη παρέχει στους επισκέπτες μια λίστα με εκδρομές στον Άλμυρο, Βόλο, Πήλιο, Σποράδες και Παναγία Ξενία.">
                  Εκδρομές
                </a>
              </li>
              <li>
                <a href="/greek/#help" aria-label="Οι συχνές ερωτήσεις του Big Blue Hotel για την εξυπηρέτηση των χρηστών">
                  Βοήθεια
                </a>
              </li>
              <li>
                <a className="btn btn-primary" href="/greek/book" aria-label="Σελίδα Κρατήσεων του Big Blue Hotel στην Αμαλιάπολη Ελλάδα.">
                  <i className="fas fa-user"></i> Κάντε Κράτηση!
                </a>
              </li>
            </ul>
          </div>
          {/* <!-- Έκδοση για κινητά --> */}
          <button className="hamburger-button" onClick={toggleMenu}>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
          </button>
          {/* <!-- Μενού για κινητά --> */}
          <div className="mobile-menu" ref={mobileMenuRef}>
            <ul>
              <li>
                <a href="/greek/about" aria-label="Μια σελίδα που παρέχει περισσότερες πληροφορίες για το Big Blue Hotel">
                  Το Big Blue Hotel
                </a>
              </li>
              <li>
                <a href="/greek/#services" aria-label="Υπηρεσίες του Big Blue Hotel και ανέσεις για μια υπέροχη και χαλαρωτική διαμονή.">
                  Υπηρεσίες
                </a>
              </li>
              <li>
                <a href="/greek/#rewards" aria-label="Το Big Blue Hotel ιδρύθηκε τον Μάιο του 2022 και έχει λάβει πολλές διακρίσεις, όπως το Καλύτερο Ξενοδοχείο στην Αμαλιάπολη για το 2023">
                  Βραβεία
                </a>
              </li>
              <li>
                <a href="/greek/location" aria-label="Το Big Blue Hotel βρίσκεται στην Αμαλιάπολη Μαγνησίας, ακριβώς έξω από τον Άλμυρο και τον Βόλο.">
                  Τοποθεσία
                </a>
              </li>
              <li>
                <a href="/greek/gallery" aria-label="Φωτογραφίες του Big Blue Hotel και Γκαλερί με εικόνες των υπέροχων δωματίων">
                  Φωτογραφίες
                </a>
              </li>
              <li>
                <a href="/greek/location#tours" aria-label="Το Big Blue Hotel στην Αμαλιάπολη παρέχει στους επισκέπτες μια λίστα με εκδρομές στον Άλμυρο, Βόλο, Πήλιο, Σποράδες και Παναγία Ξενία.">
                  Εκδρομές
                </a>
              </li>
              <li>
                <a href="/greek/#help" aria-label="Οι συχνές ερωτήσεις του Big Blue Hotel για την εξυπηρέτηση των χρηστών">
                  Βοήθεια
                </a>
              </li>
              <li>
                <a className="btn btn-primary" href="/greek/book" aria-label="Σελίδα Κρατήσεων του Big Blue Hotel στην Αμαλιάπολη Ελλάδα.">
                  <i className="fas fa-user"></i> Κάντε Κράτηση!
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavbarGreek;
