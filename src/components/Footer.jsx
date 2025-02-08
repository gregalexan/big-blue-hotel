import React from 'react'

function Footer() {
  return (
    <div>
        {/* <!-- Footer --> */}
<footer className="footer bg-footer">
    <div className="container-lg">
        <div className="footer-grid">
            <div>
                <div className='footer-card-controller'>
                    <div className='footer-card'>
                        <div className="logo">
                            <a href="/">
                                <img
                                    src="https://bigbluehotel.net/images/images2/logoNoBG.png"
                                    alt="This picture shows the unique logo of Big Blue Hotel in Amaliapolis."
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h4>Contact</h4>
                <ul>
                    <li><a href="mailto:hotel.amaliapolis@gmail.com" aria-label="email to Big Blue hotel in Amaliapolis for Booking or asking questions" target="_blank">
                        hotel.amaliapolis@gmail.com
                    </a></li>
                    <li><a href="mailto:alexangeog@gmail.com" aria-label="Big Blue Hotel's owner, George, email for booking a room or asnwering questions" target="_blank">
                        alexangeog@gmail.com
                    </a></li>
                    <li><a href="mailto:alexandrougrigorios@gmail.com" aria-label="Big Blue Hotel email to answering questions and Booking a room in Amaliapolis" target="_blank">
                        alexandrougrigorios@gmail.com
                    </a></li>
                </ul>
            </div>
            <div>
                <h4>Phones</h4>
                <ul>
                    <li><a href="tel:6972407403" aria-label="Phone call to Big Blue Hotel Amaliapolis" target="_blank">6972407403</a></li>
                    <li><a href="tel:6977623928" aria-label="Phone call to Big Blue Hotel Amaliapolis" target="_blank">6977623928</a></li>
                    <li><a href="tel:6996532442" aria-label="Phone call to Big Blue Hotel Amaliapolis" target="_blank">6996532442</a></li>
                </ul>
            </div>
            <div>
                <h4>Socials</h4>
                <ul>
                    <li><a href="https://www.facebook.com/BigBlueHotel.Amaliapoli" aria-label="Facebook page of Big BLue Hotel Amaliapolis" target="_blank">
                        <i className="fab fa-facebook"></i> FaceBook</a></li>
                    <li><a href="https://www.instagram.com/bigblue_hotel/" aria-label="Instagram Account of Big Blue Hotel in Amaliapolis" target="_blank">
                        <i className="fab fa-instagram"></i> Instagram</a></li>
                </ul>
            </div>
        </div>
        <div className="footer-sign">
            <p>All Rights Reserved © Big Blue Hotel 2025</p>
        </div>
    </div>
</footer>
    </div>
  )
}

export default Footer