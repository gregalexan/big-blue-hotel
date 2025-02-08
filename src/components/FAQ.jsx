import React, { useState } from 'react';

function FAQ() {
  const [openGroup, setOpenGroup] = useState(null);

  // Συνάρτηση που χειρίζεται το click στο FAQ header
  const toggleFAQ = (index) => {
    if (openGroup === index) {
      // Αν το group είναι ήδη ανοιχτό, το κλείνουμε
      setOpenGroup(null);
    } else {
      // Αλλιώς, ανοίγουμε το συγκεκριμένο group
      setOpenGroup(index);
    }
  };

  return (
    <div>
      {/* FAQ Section */}
      <section className="help" id="help">
        <div className="container-sm">
          <h2 className="help-heading text-lg text-center">
            Frequently Asked Questions
          </h2>
          <div className="faq-content">
            {/* FAQ Group 1 */}
            <div className="faq-group">
              <div
                className="faq-group-header"
                onClick={() => toggleFAQ(0)} // Καλούμε τη συνάρτηση με το index 0
              >
                <h4 className="text-md">
                  What are the price ranges for a room per night?
                </h4>
                <i
                  className={`fas ${openGroup === 0 ? 'fa-minus' : 'fa-plus'}`}
                ></i>
              </div>
              <div className={`faq-group-body ${openGroup === 0 ? 'open' : ''}`}>
                <p>Depending on the season, the room (A1, A2, A3 or I2) and the number of people who will stay.
                  Summer season prices range are around €80-120 per night.</p>
              </div>
            </div>

            {/* FAQ Group 2 */}
            <div className="faq-group">
              <div
                className="faq-group-header"
                onClick={() => toggleFAQ(1)} // Καλούμε τη συνάρτηση με το index 1
              >
                <h4 className="text-md">
                  Why should we contact you to Book a Room and not use a booking platform? Is there any benefit?
                </h4>
                <i
                  className={`fas ${openGroup === 1 ? 'fa-minus' : 'fa-plus'}`}
                ></i>
              </div>
              <div className={`faq-group-body ${openGroup === 1 ? 'open' : ''}`}>
                <p>Prices are negotiable if you speak directly to us and request a room, via email, phone call or through our website.</p>
              </div>
            </div>

            {/* FAQ Group 3 */}
            <div className="faq-group">
              <div
                className="faq-group-header"
                onClick={() => toggleFAQ(2)} // Καλούμε τη συνάρτηση με το index 2
              >
                <h4 className="text-md">
                  Are there any places in Amaliapolis for entertainment, food and how far are they?
                </h4>
                <i
                  className={`fas ${openGroup === 2 ? 'fa-minus' : 'fa-plus'}`}
                ></i>
              </div>
              <div className={`faq-group-body ${openGroup === 2 ? 'open' : ''}`}>
                <p>In Amaliapolis there are several shops of which there are taverns
                  in the center square and even cafes and bars there.</p>
                <p>At the sea there are beach bars that operate throughout the day.</p>
                <p>The distance of our hotel from the center square is about 200 meters and from the sea 150 meters.</p>
                <p>At a distance of 5 km in the village of Sourpi there are taverns with live music.</p>
              </div>
            </div>

            {/* FAQ Group 4 */}
            <div className="faq-group">
              <div
                className="faq-group-header"
                onClick={() => toggleFAQ(3)} // Καλούμε τη συνάρτηση με το index 3
              >
                <h4 className="text-md">
                  Is there any archaeological, cultural site in Amaliapolis?
                </h4>
                <i
                  className={`fas ${openGroup === 3 ? 'fa-minus' : 'fa-plus'}`}
                ></i>
              </div>
              <div className={`faq-group-body ${openGroup === 3 ? 'open' : ''}`}>
                <p>Yes, in Amaliapolis there are 3 underwater museums.
                  More information can be found by clicking {' '}
                  <a href="https://wetravel.gr/amaliapoli-to-chorio-tou-pagasitikou-me-ta-3-ypovrychia-mouseia/" aria-label="Big Blue Hotel is recommending its customers to visit 3 underwater museums in Amaliapolis" target="_blank">
                    <u>here</u>
                  </a></p>
                <p>Also, the beach has various water sports.</p>
                <p>Furthermore, Big Blue Hotel is very close to 2 very well-known monasteries.
                  The first one is the New Holy Monastery of Xenia near Almyros.
                  As well as the Old Holy Monastery of Ano Xenia near Mount Othrys.</p>
                <p>You can take a look to our suggested Tours and Excursions by clicking {' '}
                  <a href="https://bigbluehotel.net/location.html#tours" target="_blank" aria-label="Travels the user to our Suggested Tours near Amaliapolis Greece in the Location html page of big blue hotel">
                    <u>here</u>
                  </a> </p>
              </div>
            </div>

            {/* FAQ Group 5 */}
            <div className="faq-group">
              <div
                className="faq-group-header"
                onClick={() => toggleFAQ(4)} // Καλούμε τη συνάρτηση με το index 4
              >
                <h4 className="text-md">
                  What does the breakfast of the Big Blue Hotel include?
                </h4>
                <i
                  className={`fas ${openGroup === 4 ? 'fa-minus' : 'fa-plus'}`}
                ></i>
              </div>
              <div className={`faq-group-body ${openGroup === 4 ? 'open' : ''}`}>
                <p>The breakfast provided is included in the room price and includes various
                  fruits as well as toast with butter, honey, jam, merenda and cookies.
                  In addition, we offer various juices along with coffee of your choice (Espresso, Greek, French).</p>
              </div>
            </div>

            {/* FAQ Group 6 */}
            <div className="faq-group">
              <div
                className="faq-group-header"
                onClick={() => toggleFAQ(5)} // Καλούμε τη συνάρτηση με το index 5
              >
                <h4 className="text-md">
                  Are we restricted in Amaliapolis?
                </h4>
                <i
                  className={`fas ${openGroup === 5 ? 'fa-minus' : 'fa-plus'}`}
                ></i>
              </div>
              <div className={`faq-group-body ${openGroup === 5 ? 'open' : ''}`}>
                <p>Amaliapolis is a very beautiful village with many options. However, it is very close to Almyros and Volos.
                  You can also explore the nearby beaches such as Nies or even visit the neighboring villages, such as
                  Nea Achialos, Sourpi or Pteleos.</p>
              </div>
            </div>
          </div>

          {/* Ερώτηση από χρήστη */}
          <div className="faq-ask-question">
            <a
              className="btn btn-primary"
              href="mailto:hotel.amaliapolis@gmail.com"
              aria-label="Email of Big Blue Hotel in Amaliapolis to answer guests questions"
              target="_blank"
            >
              Ask Your Question
            </a>
          </div>
        </div>
      </section>
      {/* End FAQ Section */}
    </div>
  );
}

export default FAQ;
