import Link from 'next/link'
import React from 'react'

function AboutUsGreek() {
  return (
    <div>
        {/* <!-- About Us Section --> */}
    <section className="about-us" id="aboutUs">
        <div className="container-sm">
            
            <h2 className="about-us-heading text-xl text-center">
                Καλώς ήρθατε στο <br /> <span style={{color: '#4891ff', fontStyle: 'italic'}}>Big Blue Hotel!</span>
            </h2>
            
            <p className="about-text">
                To Big Blue Hotel ιδρύθηκε τον Μάιο του 2022 και βρίσκεται στην όμορφη πόλη της Αμαλιάπολης Μαγνησίας!
            </p>
        
            <p className="about-text">
                Μόλις μερικά χιλιόμετρα μακριά από τον Αλμυρό και τον Βόλο. Η Αμαλιάπολη απέχει 280 χιλιόμετρα από την Αθήνα
                και 240 από τη Θεσσαλονίκη.
            </p>
            <p className="about-text-down">
                Πατήστε το κουμπί από κάτω για να μάθετε περισσότερα σχετικά με το Big Blue Hotel.
            </p>
            <Link
                className="btn btn-primary"
                href="/greek/about"
                aria-label="Σελιδα με πληροφοριες σχετικα με το Big Blue Hotel στην Αμαλιαπολη"
            >
                Περισσότερα
            </Link>

        </div>
    </section>
    </div>
  )
}

export default AboutUsGreek