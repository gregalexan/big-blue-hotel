import React, { useState } from 'react';

function FAQGreek() {
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
            Συχνές Ερωτήσεις
          </h2>
          <div className="faq-content">
            {/* FAQ Group 1 */}
            <div className="faq-group">
              <div
                className="faq-group-header"
                onClick={() => toggleFAQ(0)} // Καλούμε τη συνάρτηση με το index 0
              >
                <h4 className="text-md">
                    Σε τι τιμές κυμαίνονται τα δωμάτια το βράδυ;
                </h4>
                <i
                  className={`fas ${openGroup === 0 ? 'fa-minus' : 'fa-plus'}`}
                ></i>
              </div>
              <div className={`faq-group-body ${openGroup === 0 ? 'open' : ''}`}>
                <p>
                    Ανάλογα την περίοδο, το δωμάτιο (A1, A2, A3 ή I2) και τον αριθμό των ατόμων που θα μείνουν. Καλοκαιρινή περίοδος
                    οι τιμές κυμαίνονται γύρω στα 80-120€ το βράδυ.
                </p>
              </div>
            </div>

            {/* FAQ Group 2 */}
            <div className="faq-group">
              <div
                className="faq-group-header"
                onClick={() => toggleFAQ(1)} // Καλούμε τη συνάρτηση με το index 1
              >
                <h4 className="text-md">
                    Γιατί να επικοινωνήσουμε μαζί σας για κράτηση δωματίου και να μη χρησιμοποιήσουμε κάποια από τις
                    πλατφόρμες κράτησης; Υπάρχει κάποιο συγκεκριμένο όφελος;
                </h4>
                <i
                  className={`fas ${openGroup === 1 ? 'fa-minus' : 'fa-plus'}`}
                ></i>
              </div>
              <div className={`faq-group-body ${openGroup === 1 ? 'open' : ''}`}>
                <p>
                    Οι τιμές είναι διαπραγματεύσιμες αν επικοινωνήσετε κατευθείαν με εμάς, μέσω τηλεφώνου, email ή μέσω της ιστοσελίδας μας.
                </p>
              </div>
            </div>

            {/* FAQ Group 3 */}
            <div className="faq-group">
              <div
                className="faq-group-header"
                onClick={() => toggleFAQ(2)} // Καλούμε τη συνάρτηση με το index 2
              >
                <h4 className="text-md">
                    Υπάρχει κάποιο μέρος στην Αμαλιάπολη για διασκέδαση, φαγητό και πόσο μακριά είναι;
                </h4>
                <i
                  className={`fas ${openGroup === 2 ? 'fa-minus' : 'fa-plus'}`}
                ></i>
              </div>
              <div className={`faq-group-body ${openGroup === 2 ? 'open' : ''}`}>
                <p>Στην Αμαλιάπολη υπάρχουν αρκετά μαγαζιά εκ των οποίων είναι τσιπουράδικα, ταβέρνες στην πλατεία
                    ακόμη και καφετέριες και μπαράκια εκεί.</p>
                <p>Στη θάλασσα έχει beach bar που λειτουργούν όλη τη
                    διάρκεια της ημέρας.</p>
                <p>Η απόσταση του Big Blue Hotel απο την πλατεία είναι περίπου 200 μέτρα ενώ απο τη θάλασσα
                    150 μέτρα.</p>
                <p> Σε απόσταση 5 χλμ στο χωριό της Σούρπης υπάρχουν ταβέρνες με ζωντανή λαϊκή μουσική.</p>
              </div>
            </div>

            {/* FAQ Group 4 */}
            <div className="faq-group">
              <div
                className="faq-group-header"
                onClick={() => toggleFAQ(3)} // Καλούμε τη συνάρτηση με το index 3
              >
                <h4 className="text-md">
                    Υπάρχει κάποιος αρχαιολογικός, πολιτιστικός χώρος στην Αμαλιάπολη;
                </h4>
                <i
                  className={`fas ${openGroup === 3 ? 'fa-minus' : 'fa-plus'}`}
                ></i>
              </div>
              <div className={`faq-group-body ${openGroup === 3 ? 'open' : ''}`}>
                <p>Ναι, στην Αμαλιάπολη υπάρχουν 3 υποβρύχια μουσεία.
                  Περισσότερες πληροφορίες υπάρχουν {' '}
                  <a href="https://wetravel.gr/amaliapoli-to-chorio-tou-pagasitikou-me-ta-3-ypovrychia-mouseia/" aria-label="Big Blue Hotel is recommending its customers to visit 3 underwater museums in Amaliapolis" target="_blank">
                    <u>εδώ</u>
                  </a></p>
                <p>Επίσης, στην παραλία υπάρχουν διάφορα θαλάσσια σπορ.</p>
                <p>Επιπροσθέτως, το Big Blue Hotel είναι πολύ κοντά σε δύο πολύ γνωστά μοναστήρια.
                    Το πρώτο είναι η Νέα Ιερά Μονή Κάτω Ξενιάς, κοντά στον Αλμυρό.
                    Και το δεύτερο, η Παλαιά Μονή Άνω Ξενιάς, στο Όρος Όθρυς.</p>
                <p>Μπορείς να ρίξεις μία ματιά στις προτεινόμενες κοντινές εκδρομές πατώντας {' '}
                  <a href="https://bigbluehotel.net/location.html#tours" target="_blank" aria-label="Travels the user to our Suggested Tours near Amaliapolis Greece in the Location html page of big blue hotel">
                    <u>εδώ</u>
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
                    Το πρωινό του Big Blue Hotel τι περιλαμβάνει;
                </h4>
                <i
                  className={`fas ${openGroup === 4 ? 'fa-minus' : 'fa-plus'}`}
                ></i>
              </div>
              <div className={`faq-group-body ${openGroup === 4 ? 'open' : ''}`}>
                <p>Το πρωινό που παρέχεται είναι μέσα στην τιμή του δωματίου και περιλαμβάνει διάφορα φρούτα
                    καθώς και φρυγανιές με βιτάμ, μέλι, μαρμελάδα, μερέντα και μπισκότα. Επιπλέον, διάφοροι χυμοί μαζί με
                    καφέ της επιλογής σας (Εσπρέσο, Ελληνικό, Γαλλικό).</p>
              </div>
            </div>

            {/* FAQ Group 6 */}
            <div className="faq-group">
              <div
                className="faq-group-header"
                onClick={() => toggleFAQ(5)} // Καλούμε τη συνάρτηση με το index 5
              >
                <h4 className="text-md">
                    Είμαστε περιορισμένοι στην Αμαλιάπολη;
                </h4>
                <i
                  className={`fas ${openGroup === 5 ? 'fa-minus' : 'fa-plus'}`}
                ></i>
              </div>
              <div className={`faq-group-body ${openGroup === 5 ? 'open' : ''}`}>
                <p>Η Αμαλιάπολη είναι πολύ όμορφο χωριό με αρκετές επιλογές.
                            Παρόλα αυτά, είναι πολύ κοντά στον Αλμυρό και τον Βόλο. Μπορείτε να εξερευνήσετε και τις γύρω παραλίες
                            όπως τις Νηές ή ακόμα να επισκεφτείτε τα διπλανά χωριά, όπως η Νέα Αγχίαλος, η Σούρπη και ο Πτελεός.</p>
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
              Ρωτήστε Μας!
            </a>
          </div>
        </div>
      </section>
      {/* End FAQ Section */}
    </div>
  );
}

export default FAQGreek;
