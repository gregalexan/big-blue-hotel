import Head from 'next/head'
import React from 'react'

export async function getServerSideProps() {
    const data = {
      title: "Big Blue Hotel | Κρατήσεις",
      description: "Αυτή είναι η επίσημη Σελίδα Κράτησης του Big Blue Hotel στην Αμαλιάπολη. Ο λόγος που θέλουμε να επικοινωνήσετε μαζί μας για μια κράτηση είναι ότι πολλές φορές διαπραγματευόμαστε την τιμή του δωματίου, είναι μια υπηρεσία που σας προσφέρουμε! Κάντε κράτηση τώρα στο Big Blue Hotel και δεν θα το μετανιώσετε!",
    };
  
    return {
      props: data,
    };
}

function Book({title, description}) {
  return (
    <>
        <Head>
            <title>{title}</title>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            
            {/* Επιβεβαίωση Ιδιοκτησίας */}
            <meta name="google-site-verification" content="CctGWGYNVEGFlEqhIop1nIuWzauQEqLElNPIy1MH1rI" />
            
            {/* SEO αρχή */}
            <meta name="description" content={description} />
            <meta name="keywords" content="Σελίδα Κρατήσεων Big Blue Hotel, κρατήσεις, Big Blue Hotel Αμαλιάπολης, Ξενοδοχείο Αμαλιάπολης, τιμές Big Blue Hotel, Κρατήσεις Big Blue Hotel" />
            
            {/* Open Graph meta tags */}
            <meta property="og:title" content="Το Big Blue Hotel βρίσκεται στην Αμαλιάπολη Ελλάδα και Προσφέρει Φανταστικές Διακοπές!" />
            <meta property="og:description" content="Το Big Blue Hotel στην Αμαλιάπολη είναι ανοιχτό τώρα, προσφέροντας υπέροχες και χαλαρωτικές διακοπές στην Αμαλιάπολη, Κεντρική Ελλάδα. Κάντε κράτηση τώρα!!" />
            <meta property="og:image" content="https://bigbluehotel.net/assets/images/BigBlue/Big_Blue_Hotel_Room_BigBlue_9.jpg" />
            <meta property="og:url" content="https://bigbluehotel.net/greek/book" />
            <meta property="og:type" content="website" />
            
            {/* Facebook Card meta tags */}
            <meta property="og:image" content="https://bigbluehotel.net/assets/images/BigBlue/Big_Blue_Hotel_Room_BigBlue_9.jpg" />
            <meta property="og:url" content="https://bigbluehotel.net/greek/book" />
            
            {/* Apple Touch Icon (για συσκευές iOS) */}
            <link rel="apple-touch-icon" sizes="180x180" href="https://bigbluehotel.net/assets/images/images2/logo.JPG" />
            
            {/* Android Chrome Icon */}
            <link rel="icon" sizes="192x192" href="https://bigbluehotel.net/assets/images/images2/logo.JPG" />
            
            {/* SEO τέλος */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <link rel="stylesheet" href="css/style.css" />
            
            <link rel="shortcut icon" href="https://bigbluehotel.net/assets/images/images2/logo.JPG" type="image/x-icon" />
        </Head>


        <div>
        <section className="booking">
            <div className="booking-desktop">
                <div className="container-lg">
                    <h1 className="booking-heading text-xxl text-center">
                        Κρατήσεις
                    </h1>
                    <h2>
                        Big Blue Hotel
                    </h2>
                    <div className="booking-container">
                        <div className="booking-contact">
                            <div>
                                <h4><i className="far fa-envelope"></i>Email</h4>
                                <ul>
                                    <li><a href="mailto:hotel.amaliapolis@gmail.com" aria-label="Email του Big Blue Hotel στην Αμαλιάπολη για επικοινωνία">
                                        1) hotel.amaliapolis@gmail.com</a></li>
                                    <li><a href="mailto:alexangeog@gmail.com" aria-label="Email του Big Blue Hotel στην Αμαλιάπολη για επικοινωνία">
                                        2) alexangeog@gmail.com</a></li>
                                    <li><a href="mailto:alexandrougrigorios@gmail.com" aria-label="Email του Big Blue Hotel στην Αμαλιάπολη για επικοινωνία">
                                        3) alexandrougrigorios@gmail.com</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4><i className="fas fa-mobile-alt"></i> Τηλέφωνο</h4>
                                <ul>
                                    <li><a href="tel:6972407403" aria-label="Τηλέφωνο του Big Blue Hotel στην Αμαλιάπολη για επικοινωνία">
                                        1) +30 6972407403</a></li>
                                    <li><a href="tel:6977623928" aria-label="Τηλέφωνο του Big Blue Hotel στην Αμαλιάπολη για επικοινωνία">
                                        2) +30 6977623928</a></li>
                                    <li><a href="tel:6996532442" aria-label="Τηλέφωνο του Big Blue Hotel στην Αμαλιάπολη για επικοινωνία">
                                        3) +30 6996532442</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="booking-form">
                            <form action="https://api.web3forms.com/submit" method="POST">
                                <input type="text" name="honeypot" style={{display: 'none'}} />
                                <input type="hidden" name="access_key" value="9267e190-661d-46e5-b9c2-370a796beb07" />
                                <input type="hidden" name="subject" value="New Reservation!" />
                                <h2>
                                    Online Κρατήσεις
                                </h2>
                                <div className="form-field">
                                    <p>Ονοματεπώνυμο</p>
                                    <input type="text" name="full_name" placeholder="Γιώργος Παπαδόπουλος" required />
                                </div>
                                <div className="form-field">
                                    <p>Email</p>
                                    <input type="email" name="email" placeholder="gpapad@gmail.com" required />
                                </div>
                                <div className="form-field">
                                    <p>Κινητό</p>
                                    <input type="tel" name="phone" placeholder="6996532442" required />
                                </div>
                                <div className="form-field">
                                    <p>Check-In</p>
                                    <input type="date" name="check_in_date" required />
                                </div>
                                <div className="form-field">
                                    <p>Check-Out</p>
                                    <input type="date" name="check_out_date" required />
                                </div>
                                <div className="form-field">
                                    <p>Αριθμός Δωματίων</p>
                                    <select name="rooms" required>
                                        <option value="1">1 Δωμάτιο</option>
                                        <option value="2">2 Δωμάτια</option>
                                        <option value="3">3 Δωμάτια</option>
                                        <option value="4">4 Δωμάτια (Όλα)</option>
                                    </select>
                                </div>
                                <div className="form-field">
                                    <p>Άτομα</p>
                                    <select name="people" required>
                                        <option value="1">1 Άτομο</option>
                                        <option value="2">2 Άτομα</option>
                                        <option value="3">3 Άτομα</option>
                                        <option value="4">4+ Άτομα</option>
                                    </select>
                                </div>
                                <input type="hidden" name="redirect" value="/" />
                                <div className="booking-button-class">
                                    <button className="booking-button" type="submit">
                                        Υποβολή Κράτησης
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="booking-mobile">
                <div className="container-lg">
                    <h1 className="booking-heading text-xxl text-center">
                        Κρατήσεις
                    </h1>
                    <h2>
                        Big Blue Hotel
                    </h2>
                    <div className="booking-container">
                        <div className="booking-form">
                            <form action="https://api.web3forms.com/submit" method="POST">
                                <input type="text" name="honeypot" style={{display: 'none'}} />
                                <input type="hidden" name="access_key" value="9267e190-661d-46e5-b9c2-370a796beb07" />
                                <input type="hidden" name="subject" value="New Reservation!" />
                                <h2>
                                    Online Κρατήσεις
                                </h2>
                                <div className="form-field">
                                    <p>Ονοματεπώνυμο</p>
                                    <input type="text" name="full_name" placeholder="Γιώργος Παπαδόπουλος" required />
                                </div>
                                <div className="form-field">
                                    <p>Email</p>
                                    <input type="email" name="email" placeholder="gpapad@gmail.com" required />
                                </div>
                                <div className="form-field">
                                    <p>Κινητό</p>
                                    <input type="tel" name="phone" placeholder="6996532442" required />
                                </div>
                                <div className="form-field">
                                    <p>Check-In</p>
                                    <input type="date" name="check_in_date" required />
                                </div>
                                <div className="form-field">
                                    <p>Check-Out</p>
                                    <input type="date" name="check_out_date" required />
                                </div>
                                <div className="form-field">
                                    <p>Δωμάτια</p>
                                    <select name="rooms" required>
                                        <option value="1">1 Δωμάτιο</option>
                                        <option value="2">2 Δωμάτια</option>
                                        <option value="3">3 Δωμάτια</option>
                                        <option value="4">4 Δωμάτια (Όλα)</option>
                                    </select>
                                </div>
                                <div className="form-field">
                                    <p>Άτομα</p>
                                    <select name="people" required>
                                        <option value="1">1 Άτομο</option>
                                        <option value="2">2 Άτομα</option>
                                        <option value="3">3 Άτομα</option>
                                        <option value="4">4+ Άτομα</option>
                                    </select>
                                </div>
                                <input type="hidden" name="redirect" value="/book" />
                                <div className="booking-button-class">
                                    <button className="booking-button" type="submit">
                                        Υποβολή Κράτησης
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="booking-contact">
                            <div>
                                <h4><i className="far fa-envelope"></i>Email</h4>
                                <ul>
                                    <li><a href="mailto:hotel.amaliapolis@gmail.com" aria-label="Email του Big Blue Hotel στην Αμαλιάπολη για επικοινωνία">
                                        1) hotel.amaliapolis@gmail.com</a></li>
                                    <li><a href="mailto:alexangeog@gmail.com" aria-label="Email του Big Blue Hotel στην Αμαλιάπολη για επικοινωνία">
                                        2) alexangeog@gmail.com</a></li>
                                    <li><a href="mailto:alexandrougrigorios@gmail.com" aria-label="Email του Big Blue Hotel στην Αμαλιάπολη για επικοινωνία">
                                        3) alexandrougrigorios@gmail.com</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4><i className="fas fa-mobile-alt"></i> Τηλέφωνο</h4>
                                <ul>
                                    <li><a href="tel:6972407403" aria-label="Τηλέφωνο του Big Blue Hotel στην Αμαλιάπολη για επικοινωνία">
                                        1) +30 6972407403 </a></li>
                                    <li><a href="tel:6977623928" aria-label="Τηλέφωνο του Big Blue Hotel στην Αμαλιάπολη για επικοινωνία">
                                        2) +30 6977623928 </a></li>
                                    <li><a href="tel:6996532442" aria-label="Τηλέφωνο του Big Blue Hotel στην Αμαλιάπολη για επικοινωνία">
                                        3) +30 6996532442 </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    </>
  )
}

export default Book
