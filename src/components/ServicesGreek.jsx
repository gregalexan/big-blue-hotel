import React from 'react'

function Services() {
  return (
    <div>
        {/* <!-- Services and Facilities Section --> */}
    <section className="services" id="services">
        <div className="container-lg">
            <div className="row">
                <h2 className="services-heading text-xl text-center">
                    Υπηρεσίες και Παροχές
                </h2>
            </div>
            <div className="not-mobile-services">
                <div className="services-row">
                    <div className="services-column">
                        <div className="card">
                            <div className="icon-wrapper">
                                <i className="fas fa-infinity"></i>
                            </div>
                            <h3>Παροχές</h3>
                            <ul>
                                <li>Tablet</li>
                                <li>Τηλεόραση & WiFi</li>
                                <li>Air Conditioner</li>
                                <li>Μικρή Κουζίνα</li>
                                <li>Ψυγειάκι</li>
                                <li>Βραστήρας & Τοστίερα</li>
                                <li>Φουρνος Μικροκυμάτων</li>
                                <li>Χρηματοκιβώτιο</li>
                                <li>Μηχανή Εσπρέσο</li>
                            </ul>
                        </div>
                    </div>
                    <div className="services-column">
                        <div className="card">
                            <div className="icon-wrapper">
                                <i className="fab fa-500px"></i>
                            </div>
                            <h3>Πρόσθετες Παροχές</h3>
                            <ul>
                                <li>Πρωινό χωρίς επιπλέον χρέωση</li>
                                <li>Θερμαινόμενη Ιδιωτική Πισίνα</li>
                                <li>Ξαπλώστρες δίπλα στην πισίνα</li>
                                <li>Τζακούζι</li>
                                <li>Μεγάλος κήπος</li>
                            </ul>
                        </div>
                    </div>
                    <div className="services-column">
                        <div className="card">
                            <div className="icon-wrapper">
                                <i className="fas fa-users"></i>
                            </div>
                            <h3>Κανόνες Διαμονής</h3>
                            <ul>
                                <li>Check-In: Με Συμφωνία</li>
                                <li>Check-Out: 12:00 - 14:00</li>
                                <li>Πιστωτικές / Χρεωστικές Κάρτες Επιτρέπονται</li>
                                <li>Επιτρέπονται ανήλικα παιδιά όλων των ηλικιών</li>
                                <li>Δεν επιτρέπονται κατοικίδια</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mobile-services">
                <div className="mobile-services-row">
                    <div className="mobile-services-column">
                        <div className="card">
                            <div className="icon-wrapper">
                                <i className="fas fa-infinity"></i>
                            </div>
                            <h3>Παροχές</h3>
                            <ul>
                                <li>Tablet</li>
                                <li>Τηλεόραση & WiFi</li>
                                <li>Air Conditioner</li>
                                <li>Μικρή Κουζίνα</li>
                                <li>Ψυγειάκι</li>
                                <li>Βραστήρας & Τοστίερα</li>
                                <li>Φουρνος Μικροκυμάτων</li>
                                <li>Χρηματοκιβώτιο</li>
                                <li>Μηχανή Εσπρέσο</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mobile-services-row">
                    <div className="mobile-services-column">
                        <div className="card">
                            <div className="icon-wrapper">
                                <i className="fab fa-500px"></i>
                            </div>
                            <h3>Πρόσθετες Παροχές</h3>
                            <ul>
                                <li>Πρωινό χωρίς επιπλέον χρέωση</li>
                                <li>Θερμαινόμενη Ιδιωτική Πισίνα</li>
                                <li>Ξαπλώστρες δίπλα στην πισίνα</li>
                                <li>Τζακούζι</li>
                                <li>Μεγάλος κήπος</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mobile-services-row">
                    <div className="mobile-services-column">
                        <div className="card">
                            <div className="icon-wrapper">
                                <i className="fas fa-users"></i>
                            </div>
                            <h3>Κανόνες Διαμονής</h3>
                            <ul>
                                <li>Check-In: Με Συμφωνία</li>
                                <li>Check-Out: 12:00 - 14:00</li>
                                <li>Πιστωτικές / Χρεωστικές Κάρτες Επιτρέπονται</li>
                                <li>Επιτρέπονται ανήλικα παιδιά όλων των ηλικιών</li>
                                <li>Δεν επιτρέπονται κατοικίδια</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- End Services and Facilities Section--> */}
    </div>
  )
}

export default Services