import React, { useRef } from 'react';
import Link from 'next/link';

function NavbarGreek() {
  const mobileMenuRef = useRef(null);

  // Συνάρτηση για την εναλλαγή κατάστασης του μενού
  const toggleMenu = () => {
    if (mobileMenuRef.current) {
      mobileMenuRef.current.classList.toggle('active');
    }
  };

  return (
    <div>
      <nav className="navbar" lang='el'>
        <div className="container">
          {/* Logo του Ξενοδοχείου */}
          <div className="logo">
            <Link href="/greek">
              <img
                src="https://bigbluehotel.net/images/images2/logoNoBG.png"
                alt="Αυτό δείχνει το μοναδικό λογότυπο του Big Blue Hotel στην Αμαλιάπολη."
              />
            </Link>
          </div>

          {/* Κύριο Μενού Ιστοσελίδας */}
          <div className="main-menu" style={{fontSize: '13px'}}>
            <ul>
              <li>
                <h3>
                  <Link href="/greek/about" aria-label="Μια σελίδα που παρέχει περισσότερες πληροφορίες για το Big Blue Hotel στην Μαγνησία Ελλάδα">
                    Το Big Blue Hotel
                  </Link>
                </h3>
              </li>
              <li>
                <h3>
                  <Link href="/greek/#services" aria-label="Υπηρεσίες του Big Blue Hotel και ανέσεις για μια υπέροχη και χαλαρωτική διαμονή.">
                    Υπηρεσίες
                  </Link>
                </h3>
              </li>
              <li>
                <h3>
                  <Link href="/greek/#rewards" aria-label="Το Big Blue Hotel ιδρύθηκε τον Μάιο του 2022 και έχει λάβει πολλές διακρίσεις, όπως το Καλύτερο Ξενοδοχείο στην Αμαλιάπολη για το 2023">
                    Βραβεία
                  </Link>
                </h3>
              </li>
              <li>
                <h3>
                  <Link href="/greek/location" aria-label="Το Big Blue Hotel βρίσκεται στην Αμαλιάπολη Μαγνησίας, ακριβώς έξω από τον Άλμυρο και τον Βόλο.">
                    Τοποθεσία
                  </Link>
                </h3>
              </li>
              <li>
                <h3>
                  <Link href="/greek/gallery" aria-label="Φωτογραφίες του Big Blue Hotel και Γκαλερί με εικόνες των υπέροχων δωματίων">
                    Φωτογραφίες
                  </Link>
                </h3>
              </li>
              <li>
                <h3>
                  <Link href="/greek/location#tours" aria-label="Το Big Blue Hotel στην Αμαλιάπολη παρέχει στους επισκέπτες μια λίστα με εκδρομές στον Άλμυρο, Βόλο, Πήλιο, Σποράδες και Παναγία Ξενία.">
                    Εκδρομές
                  </Link>
                </h3>
              </li>
              <li>
                <h3>
                  <Link href="/greek/#help" aria-label="Οι συχνές ερωτήσεις του Big Blue Hotel για την εξυπηρέτηση των χρηστών">
                    Βοήθεια
                  </Link>
                </h3>
              </li>
              <li>
                <h2>
                  <Link href="/greek/book" className='btn btn-primary' aria-label="Σελίδα Κρατήσεων του Big Blue Hotel στην Αμαλιάπολη Ελλάδα.">
                    <i className="fas fa-user"></i> Κάντε Κράτηση!
                  </Link>
                </h2>
              </li>
            </ul>
          </div>

          {/* Έκδοση για κινητά */}
          <button className="hamburger-button" onClick={toggleMenu}>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
          </button>

          {/* Μενού για κινητά */}
          <div className="mobile-menu" ref={mobileMenuRef}>
            <ul>
              <li>
                <h3>
                  <Link href="/greek/about">
                    Το Big Blue Hotel
                  </Link>
                </h3>
              </li>
              <li>
                <h3>
                  <Link href="/greek/#services">
                    Υπηρεσίες
                  </Link>
                </h3>
              </li>
              <li>
                <h3>
                  <Link href="/greek/#rewards">
                    Βραβεία
                  </Link>
                </h3>
              </li>
              <li>
                <h3>
                  <Link href="/greek/location">
                    Τοποθεσία
                  </Link>
                </h3>
              </li>
              <li>
                <h3>
                  <Link href="/greek/gallery">
                    Φωτογραφίες
                  </Link>
                </h3>
              </li>
              <li>
                <h3>
                  <Link href="/greek/location#tours">
                    Εκδρομές
                  </Link>
                </h3>
              </li>
              <li>
                <h3>
                  <Link href="/greek/#help">
                    Βοήθεια
                  </Link>
                </h3>
              </li>
              <li>
                <h2>
                  <Link href="/greek/book" className='btn btn-primary'>
                    <i className="fas fa-user"></i> Κάντε Κράτηση!
                  </Link>
                </h2>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </div>
  );
}

export default NavbarGreek;
