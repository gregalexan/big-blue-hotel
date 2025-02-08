import React from 'react'

function Book() {
  return (
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
                                    <i className="fas fa-paper-plane"></i> hotel.amaliapolis@gmail.com</a></li>
                                <li><a href="mailto:alexangeog@gmail.com" aria-label="Email of Big Blue Hotel in Amaliapolis to contact">
                                    <i className="fas fa-paper-plane"></i> alexangeog@gmail.com</a></li>
                                <li><a href="mailto:alexandrougrigorios@gmail.com" aria-label="Email of Big Blue Hotel in Amaliapolis to contact">
                                    <i className="fas fa-paper-plane"></i> alexandrougrigorios@gmail.com</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4><i className="fas fa-phone"></i> Phone Call</h4>
                            <ul>
                                <li><a href="tel:6972407403" aria-label="Phone of Big Blue Hotel in Amaliapolis to contact">
                                    <i className="fas fa-mobile-alt"></i> +30 6972407403</a></li>
                                <li><a href="tel:6977623928" aria-label="Phone of Big Blue Hotel in Amaliapolis to contact">
                                    <i className="fas fa-mobile-alt"></i> +30 6977623928</a></li>
                                <li><a href="tel:6996532442" aria-label="Phone of Big Blue Hotel in Amaliapolis to contact">
                                    <i className="fas fa-mobile-alt"></i> +30 6996532442</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="booking-form">
                        <form action="https://api.web3forms.com/submit" method="POST">
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
                            <input type="hidden" name="redirect" value="/book" />
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
                            <input type="hidden" name="redirect" value="/book" />
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
                                    <i className="fas fa-paper-plane"></i> hotel.amaliapolis@gmail.com</a></li>
                                <li><a href="mailto:alexangeog@gmail.com" aria-label="Email of Big Blue Hotel in Amaliapolis to contact">
                                    <i className="fas fa-paper-plane"></i> alexangeog@gmail.com</a></li>
                                <li><a href="mailto:alexandrougrigorios@gmail.com" aria-label="Email of Big Blue Hotel in Amaliapolis to contact">
                                    <i className="fas fa-paper-plane"></i> alexandrougrigorios@gmail.com</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4><i className="fas fa-phone"></i> Phone Call</h4>
                            <ul>
                                <li><a href="tel:6972407403" aria-label="Phone of Big Blue Hotel in Amaliapolis to contact">
                                    <i className="fas fa-mobile-alt"></i>+30 6972407403 </a></li>
                                <li><a href="tel:6977623928" aria-label="Phone of Big Blue Hotel in Amaliapolis to contact">
                                    <i className="fas fa-mobile-alt"></i>+30 6977623928 </a></li>
                                <li><a href="tel:6996532442" aria-label="Phone of Big Blue Hotel in Amaliapolis to contact">
                                    <i className="fas fa-mobile-alt"></i>+30 6996532442 </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Book
