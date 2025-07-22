import Head from 'next/head'
import React from 'react'
import Link from 'next/link'

export async function getStaticProps() {
    const data = {
      title: "Big Blue Hotel | Book",
      description: "This is the official Booking Page of Big Blue Hotel in Amaliapolis. The reason we want you to contact us for a booking is that many times we negotiate the price of the room, so it is a benefit we provide you! Book now to Big Blue Hotel and you are not going to regret this!",
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
            <meta name="language" content="en"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            
            {/* Confirmation of Ownership */}
            <meta name="google-site-verification" content="CctGWGYNVEGFlEqhIop1nIuWzauQEqLElNPIy1MH1rI" />
            
            {/* SEO start */}
            <meta name="description" content={description} />
            <meta name="keywords" content="Booking Page of Big Blue Hotel, bookings, Big Blue Hotel Amaliapolis, Hotel Amaliapolis, prices big blue hotel, Big Blue Hotel Book" />
            
            {/* Open Graph meta tags */}
            <meta property="og:title" content="Big Blue Hotel is located in Amaliapolis Greece and Offers Amazing Holidays!" />
            <meta property="og:description" content="Big Blue Hotel in Amaliapolis is open now, offering amazing and relaxing holidays in Amaliapolis, Central Greece. Book Now!!" />
            <meta property="og:image" content="https://bigbluehotel.net/images/privatepool.jpeg" />
            <meta property="og:url" content="https://bigbluehotel.net" />
            <meta property="og:type" content="website" />
            
            {/* Facebook Card meta tags */}
            <meta property="og:image" content="https://bigbluehotel.net/images/privatepool.jpeg" />
            <meta property="og:url" content="https://bigbluehotel.net" />
            
            {/* Apple Touch Icon (for iOS devices) */}
            <Link rel="apple-touch-icon" sizes="180x180" href="https://bigbluehotel.net/images/images2/logo.jpg" />
            
            {/* Android Chrome Icon */}
            <Link rel="icon" sizes="192x192" href="https://bigbluehotel.net/images/images2/logo.jpg" />
            
            {/* SEO end */}
            <Link rel="preconnect" href="https://fonts.googleapis.com" />
            <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <Link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
            <Link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <Link rel="stylesheet" href="css/style.css" />
            
            <Link rel="shortcut icon" href="https://bigbluehotel.net/images/images2/logo.JPG" type="image/x-icon" />
        </Head>

        <div>
        <section className="booking">
            <div className="booking-desktop">
                <div className="container-lg">
                    <h1 className="booking-heading text-xxl text-center">
                        Bookings
                    </h1>
                    <h2>
                        Big Blue Hotel
                    </h2>
                    <div className="booking-container">
                        <div className="booking-contact">
                                <div>
                                    <h4><i className="far fa-envelope"></i>Email</h4>
                                    <ul>
                                        <li><a href="mailto:hotel.amaliapolis@gmail.com" aria-label="Email of Big Blue Hotel in Amaliapolis to contact">
                                            1) hotel.amaliapolis@gmail.com</a></li>
                                        <li><a href="mailto:alexangeog@gmail.com" aria-label="Email of Big Blue Hotel in Amaliapolis to contact">
                                            2) alexangeog@gmail.com</a></li>
                                        <li><a href="mailto:alexandrougrigorios@gmail.com" aria-label="Email of Big Blue Hotel in Amaliapolis to contact">
                                            3) alexandrougrigorios@gmail.com</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4><i className="fas fa-mobile-alt"></i> Phone Call</h4>
                                    <ul>
                                        <li><a href="tel:6972407403" aria-label="Phone of Big Blue Hotel in Amaliapolis to contact">
                                            1) +30 6972407403</a></li>
                                        <li><a href="tel:6977623928" aria-label="Phone of Big Blue Hotel in Amaliapolis to contact">
                                            2) +30 6977623928</a></li>
                                        <li><a href="tel:6996532442" aria-label="Phone of Big Blue Hotel in Amaliapolis to contact">
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
                                    Online Reservations
                                </h2>
                                <div className="form-field">
                                    <p>Full Name</p>
                                    <input type="text" name="full_name" placeholder="John Doe" required />
                                </div>
                                <div className="form-field">
                                    <p>Email</p>
                                    <input type="email" name="email" placeholder="JohnDoe@gmail.com" required />
                                </div>
                                <div className="form-field">
                                    <p>Mobile</p>
                                    <input type="tel" name="phone" placeholder="6996532442" required />
                                </div>
                                <div className="form-field">
                                    <p>Check-In Date</p>
                                    <input type="date" name="check_in_date" required />
                                </div>
                                <div className="form-field">
                                    <p>Check-Out Date</p>
                                    <input type="date" name="check_out_date" required />
                                </div>
                                <div className="form-field">
                                    <p>Number of Rooms</p>
                                    <select name="rooms" required>
                                        <option value="1">1 Room</option>
                                        <option value="2">2 Rooms</option>
                                        <option value="3">3 Rooms</option>
                                        <option value="4">4 Rooms (All)</option>
                                    </select>
                                </div>
                                <div className="form-field">
                                    <p>People</p>
                                    <select name="people" required>
                                        <option value="1">1 Person</option>
                                        <option value="2">2 People</option>
                                        <option value="3">3 People</option>
                                        <option value="4">4+ People</option>
                                    </select>
                                </div>
                                <input type="hidden" name="redirect" value="/confirm" />
                                <div className="booking-button-class">
                                    <button className="booking-button" type="submit">
                                        Submit Reservation
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
                        Bookings
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
                                    Online Reservations
                                </h2>
                                <div className="form-field">
                                    <p>Full Name</p>
                                    <input type="text" name="full_name" placeholder="John Doe" required />
                                </div>
                                <div className="form-field">
                                    <p>Email</p>
                                    <input type="email" name="email" placeholder="JohnDoe@gmail.com" required />
                                </div>
                                <div className="form-field">
                                    <p>Mobile</p>
                                    <input type="tel" name="phone" placeholder="6996532442" required />
                                </div>
                                <div className="form-field">
                                    <p>Check-In Date</p>
                                    <input type="date" name="check_in_date" required />
                                </div>
                                <div className="form-field">
                                    <p>Check-Out Date</p>
                                    <input type="date" name="check_out_date" required />
                                </div>
                                <div className="form-field">
                                    <p>Rooms</p>
                                    <select name="rooms" required>
                                        <option value="1">1 Room</option>
                                        <option value="2">2 Rooms</option>
                                        <option value="3">3 Rooms</option>
                                        <option value="4">4 Rooms (All)</option>
                                    </select>
                                </div>
                                <div className="form-field">
                                    <p>People</p>
                                    <select name="people" required>
                                        <option value="1">1 Person</option>
                                        <option value="2">2 People</option>
                                        <option value="3">3 People</option>
                                        <option value="4">4+ People</option>
                                    </select>
                                </div>
                                <input type="hidden" name="redirect" value="/confirm" />
                                <div className="booking-button-class">
                                    <button className="booking-button" type="submit">
                                        Submit Reservation
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="booking-contact">
                            <div>
                                <h4><i className="far fa-envelope"></i>Email</h4>
                                <ul>
                                    <li><a href="mailto:hotel.amaliapolis@gmail.com" aria-label="Email of Big Blue Hotel in Amaliapolis to contact">
                                        1) hotel.amaliapolis@gmail.com</a></li>
                                    <li><a href="mailto:alexangeog@gmail.com" aria-label="Email of Big Blue Hotel in Amaliapolis to contact">
                                        2) alexangeog@gmail.com</a></li>
                                    <li><a href="mailto:alexandrougrigorios@gmail.com" aria-label="Email of Big Blue Hotel in Amaliapolis to contact">
                                        3) alexandrougrigorios@gmail.com</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4><i className="fas fa-mobile-alt"></i> Phone Call</h4>
                                <ul>
                                    <li><a href="tel:6972407403" aria-label="Phone of Big Blue Hotel in Amaliapolis to contact">
                                        1) +30 6972407403 </a></li>
                                    <li><a href="tel:6977623928" aria-label="Phone of Big Blue Hotel in Amaliapolis to contact">
                                        2) +30 6977623928 </a></li>
                                    <li><a href="tel:6996532442" aria-label="Phone of Big Blue Hotel in Amaliapolis to contact">
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
