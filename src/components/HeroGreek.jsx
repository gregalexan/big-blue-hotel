import React from 'react';
import Image from 'next/image';

function HeroGreek() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="column">
              <h1 className="hero-heading text-xxl">
                Big Blue Hotel <br /> <span style={{ fontSize: 'large' }}>Αμαλιάπολη</span>
              </h1>
              <p className="hero-text">
                Επισκεφτείτε τώρα την Αμαλιάπολη, αρκετά κοντά στον Αλμυρό και τον Βόλο, και βουτήξτε στον Παγασητικό κόλπο για
                να ζήσετε το απέραντο γαλάζιο του!
              </p>
              <p className="hero-text">
                Κάντε κράτηση τώρα στο Big Blue Hotel, σχεδιασμένο με αγάπη και
                δημιουργικότητα από τους δημιουργούς του.
              </p>
              <p className="hero-text">
                Το μοναδικό ξενοδοχείο στην Αμαλιάπολη με ιδιωτική πισίνα και τζακούζι!
              </p>
              <div className="hero-buttons">
                <a href="/greek/book" aria-label="Σελίδα Κρατήσεων του Big Blue Hotel στην Αμαλιάπολη. Κάντε Κράτηση τώρα!" className="btn btn-primary">
                  <i className="fas fa-user"></i> Κάντε Κράτηση!
                </a>
                <a href="#aboutUs" aria-label="Περισσότερες πληροφορίες για το Big Blue Hotel στην Αμαλιάπολη" className="btn">Μάθετε Περισσότερα</a>
              </div>
            </div>
            <div className="column">
                <Image 
                    src="/assets/images/BigBlue/Big_Blue_Hotel_Room_BigBlue_9.jpg"
                    alt="Το Big Blue Hotel στην Αμαλιάπολη Μαγνησίας Ελλάδα είναι το μόνο ξενοδοχείο στην Αμαλιάπολη και τον Άλμυρο με ιδιωτική πισίνα"
                    width={700}
                    height={800}
                    layout="responsive"
                    objectFit="cover"
                    priority={true}
                    placeholder='blur'
                    blurDataURL='/assets/images/BigBlue/Big_Blue_Hotel_Room_BigBlue_9.jpg'
                    />
                    <Image
                    src="/assets/images/A1/Big_Blue_Hotel_Room_A1_1.jpg"
                    alt="Το Big Blue Hotel στην Αμαλιάπολη, μια πόλη κοντά στον Άλμυρο, Ελλάδα, με ένα πολυτελές δωμάτιο."
                    width={700}
                    height={800}
                    layout="responsive"
                    objectFit="cover"
                    priority={true}
                    placeholder='blur'
                    blurDataURL='/assets/images/A1/Big_Blue_Hotel_Room_A1_1.jpg'
                    />
                    </div>
                    </div>
                    <div className="column">
                    <Image
                        src="/assets/images/BigBlue/Big_Blue_Hotel_Room_BigBlue_1.jpg"
                        alt="Το Big Blue Hotel στην Αμαλιάπολη, κοντά στον Άλμυρο, με ιδιωτική πισίνα και τζακούζι"
                        width={700}
                        height={800}
                        layout="responsive"
                        objectFit="cover"
                        priority={true}
                        placeholder='blur'
                        blurDataURL='/assets/images/BigBlue/Big_Blue_Hotel_Room_BigBlue_1.jpg'
                    />
                    <Image
                        src="/assets/images/BigBlue/Big_Blue_Hotel_Room_BigBlue_4.jpg"
                        alt="Το Big Blue Hotel στην Αμαλιάπολη είναι το μόνο ξενοδοχείο στην Αμαλιάπολη και τον Άλμυρο με τζακούζι"
                        width={700}
                        height={800}
                        layout="responsive"
                        objectFit="cover"
                        priority={true}
                        placeholder='blur'
                        blurDataURL='/assets/images/BigBlue/Big_Blue_Hotel_Room_BigBlue_4.jpg'
                    />
                    <Image
                        src="/assets/images/BigBlue/Big_Blue_Hotel_Room_BigBlue_12.jpg"
                        alt="Ένα πολυτελές δωμάτιο στο Big Blue Hotel στην Αμαλιάπολη με πολλές ανέσεις και υπηρεσίες που παρέχονται, περιλαμβανομένων των τιμών"
                        width={700}
                        height={800}
                        layout="responsive"
                        objectFit="cover"
                        priority={true}
                        placeholder='blur'
                        blurDataURL='/assets/images/BigBlue/Big_Blue_Hotel_Room_BigBlue_12.jpg'
                    />

          </div>
        </div>
      </section>
      {/* End Hero Section */}
    </div>
  );
}

export default HeroGreek;
