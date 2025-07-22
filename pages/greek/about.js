import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

export async function getStaticProps() {
    const data = {
      title: "Big Blue Hotel | Σχετικά με το Ξενοδοχείο",
      description: "Αυτή η σελίδα είναι αφιερωμένη για να σας βοηθήσει να μάθετε περισσότερες πληροφορίες σχετικά με το Ξενοδοχείο Big Blue στην Αμαλιάπολη.",
    };
  
    return {
      props: data,
    };
}

function About({title, description}) {
  return (
    <>
        <Head>
            <title>{title}</title>
            <meta name="language" content="el"></meta>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            
            {/* Επιβεβαίωση Ιδιοκτησίας */}
            <meta name="google-site-verification" content="CctGWGYNVEGFlEqhIop1nIuWzauQEqLElNPIy1MH1rI" />
            
            {/* SEO αρχή */}
            <meta name="description" content={description} />
            <meta name="keywords" content="Πληροφορίες, για το Big Blue Hotel, για, Big Blue Hotel Αμαλιάπολης, Big Blue Hotel, πληροφορίες Big Blue Hotel Αμαλιάπολης" />
            
            {/* Open Graph meta tags */}
            <meta property="og:title" content="Big Blue Hotel - Αμαλιάπολη" />
            <meta property="og:description" content="Έχετε ακούσει για το Big Blue Hotel στην Αμαλιάπολη; Είναι ένα καινούργιο ξενοδοχείο στην Αμαλιάπολη Ελλάδας και προσέχει κάθε λεπτομέρεια για να προσφέρει στους πελάτες του χαλαρωτικές διακοπές! Μάθετε περισσότερα!" />
            <meta property="og:image" content="https://bigbluehotel.net/assets/images/A3/Big_Blue_Hotel_Room_A3_5.webp" />
            <meta property="og:url" content="https://bigbluehotel.net/greek/about" />
            <meta property="og:type" content="website" />
            
            {/* Facebook Card meta tags */}
            <meta property="og:image" content="https://bigbluehotel.net/assets/images/A3/Big_Blue_Hotel_Room_A3_5.webp" />
            <meta property="og:url" content="https://bigbluehotel.net/greek/about" />
            
            {/* Apple Touch Icon (για συσκευές iOS) */}
            <Link rel="apple-touch-icon" sizes="180x180" href="https://bigbluehotel.net/assets/images/images2/logo.JPG" />
            
            {/* Android Chrome Icon */}
            <Link rel="icon" sizes="192x192" href="https://bigbluehotel.net/assets/images/images2/logo.JPG" />
            
            {/* SEO τέλος */}
            <Link rel="shortcut icon" href="https://bigbluehotel.net/assets/images/images2/logo.JPG" type="image/x-icon" />
        </Head>


        <div>
            <section className="about-us-html">
                <div className="container">
                    <h1 className="text-xxl text-center">Σχετικά με το <br /> Big Blue Hotel</h1>
                    <div className="not-mobile-about-us">
                        <div className="about-us-grid">
                            <div className="about-us-photos-row">
                                <div className="about-us-photos-column">
                                    <Image 
                                        src="/assets/images/A1/Big_Blue_Hotel_Room_A1_3.webp"
                                        alt='Δωμάτιο A1'
                                        width={100}
                                        height={100}
                                        layout='responsive'
                                        priority={true}
                                        placeholder='blur'
                                        blurDataURL='/assets/images/A1/Big_Blue_Hotel_Room_A1_3.webp'
                                    />
                                    <Image 
                                        src="/assets/images/I2/Big_Blue_Hotel_Room_I2_7.webp"
                                        alt='Δωμάτιο I2'
                                        width={100}
                                        height={100}
                                        layout='responsive'
                                        priority={true}
                                        placeholder='blur'
                                        blurDataURL='/assets/images/I2/Big_Blue_Hotel_Room_I2_7.webp'
                                    />
                                </div>
                                <div className="about-us-photos-column">
                                    <Image 
                                        src="/assets/images/A1/Big_Blue_Hotel_Room_A1_27.webp"
                                        alt='Δωμάτιο A1'
                                        width={100}
                                        height={100}
                                        layout='responsive'
                                        priority={true}
                                        placeholder='blur'
                                        blurDataURL='/assets/images/A1/Big_Blue_Hotel_Room_A1_27.webp'
                                    />
                                    <Image 
                                        src="/assets/images/A3/Big_Blue_Hotel_Room_A3_17.webp"
                                        alt='Δωμάτιο A3'
                                        width={100}
                                        height={100}
                                        layout='responsive'
                                        priority={true}
                                        placeholder='blur'
                                        blurDataURL='/assets/images/A3/Big_Blue_Hotel_Room_A3_17.webp'
                                    />
                                </div>
                            </div>
                            <div className="about-us-text-content">
                                <p className="text-md text-center">
                                    Σε μια από τις ομορφότερες περιοχές της Μαγνησίας, γεμάτη χρώματα και αρώματα, στην ιστορική Αμαλιάπολη (Μιτζέλα),
                                    που την αγκαλιάζουν από τη μια τα καταγάλανα νερά του
                                    δυτικού Παγασητικού κόλπου και απ’την άλλη το χρυσοπράσινο των απέραντων ελαιώνων, βρίσκεται το νεότευκτο,
                                    Big Blue Hotel, που ξεκινά τη λειτουργία,
                                    τη ζωή και τη δράση του στην καρδιά της άνοιξης, τον Μάιο του 2022.
                                </p>
                                <p className="text-md text-center">
                                    Σχεδιασμένο με ευαισθησία και αγάπη απ’τους δημιουργούς του, αντλώντας από την πατροπαράδοτη
                                    – ανεπιτήδευτη ελληνική φιλοξενία,
                                    φιλοδοξεί να αποτελέσει ένα ιδανικό προορισμό και καταφύγιο,
                                    για όμορφες διακοπές, με ποιότητα, πληρότητα, ηρεμία, έντονα συναισθήματα, ευεξία και χαρά.
                                </p>
                                <p className="text-md text-center">
                                    Τα πέντε δωμάτια του Ξενοδοχείου BIG BLUE HOTEL, τοποθετημένα σε δύο επίπεδα, μονόχωρα
                                    ή δίχωρα (ιδανικά για οικογένειες), παρέχουν όλες τις ανέσεις για
                                    να σας προσφέρουν κάθε δυνατότητα που θα κάνει την παραμονή σας
                                    όσο πιο όμορφη και ευχάριστη γίνεται. Σε κάθε δωμάτιο πέρα από το λουτρό και τα είδη υγιεινής,
                                    υπάρχουν τηλεόραση και κλιματιστικό, και ακόμη κουζινάκι με ψυγείο, καφετιέρα,
                                    βραστήρα και τοστιέρα, που θα καλύψουν με επάρκεια τις ανάγκες σας, για τη δημιουργία του πρωινού σας.
                                    Εξαιρουμένου του πρωινού που παρέχεται από το Big Blue Hotel χωρίς επιπλέον χρέωση.
                                </p>
                                <p className="text-md text-center">
                                    Για την ακόμη πιο όμορφη διαμονή σας στο ξενοδοχείο μας, προσθέτοντας έτσι την αναγκαία πολυτέλεια,
                                    δημιουργήσαμε μια θερμαινόμενη πισίνα στον εξωτερικό χώρο, με σύστημα αντίθετης κολύμβησης και υδρομασάζ,
                                    για relax και χαλάρωση.
                                    Επιπρόσθετη παροχή είναι το υδρομασάζ στον εξωτερικό χώρο χωρητικότητας 5 θέσεων.
                                </p>
                                <p className="text-center text-md">
                                    Προφανώς, και αντιλαμβανόμενοι τις ανάγκες των καιρών παρέχουμε δωρεάν δίκτυο Wi-Fi.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mobile-about">
                        <div className="mobile-grid-about">
                            <div className="mobile-grid-row">
                                <div className="mobile-grid-column">
                                    <Image 
                                        src="/assets/images/A1/Big_Blue_Hotel_Room_A1_27.webp"
                                        alt='Δωμάτιο A1'
                                        width={100}
                                        height={100}
                                        layout='responsive'
                                        priority={true}
                                        placeholder='blur'
                                        blurDataURL='/assets/images/A1/Big_Blue_Hotel_Room_A1_27.webp'
                                    />
                                </div>
                            </div>
                            <div className="mobile-grid-text">
                                <p className="text-md text-center">In one of the most beautiful areas of Magnesia (Greece), full of colors and scents,
                                    Σε μια από τις ομορφότερες περιοχές της Μαγνησίας, γεμάτη χρώματα και αρώματα, στην ιστορική Αμαλιάπολη (Μιτζέλα),
                                    που την αγκαλιάζουν από τη μια τα καταγάλανα νερά του
                                    δυτικού Παγασητικού κόλπου και απ’την άλλη το χρυσοπράσινο των απέραντων ελαιώνων, βρίσκεται το νεότευκτο,
                                    Big Blue Hotel, που ξεκινά τη λειτουργία,
                                    τη ζωή και τη δράση του στην καρδιά της άνοιξης, τον Μάιο του 2022.</p>
                            </div>
                        </div>
                        <div className="mobile-grid-about">
                            <div className="mobile-grid-text">
                                <p className="text-md text-center">
                                    Σχεδιασμένο με ευαισθησία και αγάπη απ’τους δημιουργούς του, αντλώντας από την πατροπαράδοτη
                                    – ανεπιτήδευτη ελληνική φιλοξενία,
                                    φιλοδοξεί να αποτελέσει ένα ιδανικό προορισμό και καταφύγιο,
                                    για όμορφες διακοπές, με ποιότητα, πληρότητα, ηρεμία, έντονα συναισθήματα, ευεξία και χαρά.
                                </p>
                            </div>
                            <div className="mobile-grid-row">
                                <div className="mobile-grid-column">
                                    <Image 
                                        src="/assets/images/A1/Big_Blue_Hotel_Room_A1_3.webp"
                                        alt='Δωμάτιο A1'
                                        width={100}
                                        height={100}
                                        layout='responsive'
                                        priority={true}
                                        placeholder='blur'
                                        blurDataURL='/assets/images/A1/Big_Blue_Hotel_Room_A1_3.webp'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mobile-grid-about">
                            <div className="mobile-grid-row">
                                <div className="mobile-grid-column">
                                    <Image 
                                        src="/assets/images/I2/Big_Blue_Hotel_Room_I2_7.webp"
                                        alt='Δωμάτιο I2'
                                        width={100}
                                        height={100}
                                        layout='responsive'
                                        priority={true}
                                        placeholder='blur'
                                        blurDataURL='/assets/images/I2/Big_Blue_Hotel_Room_I2_7.webp'
                                    />
                                </div>
                            </div>
                            <div className="mobile-grid-text">
                                <p className="text-md text-center">
                                    Τα πέντε δωμάτια του Ξενοδοχείου BIG BLUE HOTEL, τοποθετημένα σε δύο επίπεδα, μονόχωρα
                                    ή δίχωρα (ιδανικά για οικογένειες), παρέχουν όλες τις ανέσεις για
                                    να σας προσφέρουν κάθε δυνατότητα που θα κάνει την παραμονή σας
                                    όσο πιο όμορφη και ευχάριστη γίνεται. Σε κάθε δωμάτιο πέρα από το λουτρό και τα είδη υγιεινής,
                                    υπάρχουν τηλεόραση και κλιματιστικό, και ακόμη κουζινάκι με ψυγείο, καφετιέρα,
                                    βραστήρα και τοστιέρα, που θα καλύψουν με επάρκεια τις ανάγκες σας, για τη δημιουργία του πρωινού σας.
                                    Εξαιρουμένου του πρωινού που παρέχεται από το Big Blue Hotel χωρίς επιπλέον χρέωση.
                                </p>
                            </div>
                        </div>
                        <div className="mobile-grid-about">
                            <div className="mobile-grid-text">
                                <p className="text-md text-center">
                                    Για την ακόμη πιο όμορφη διαμονή σας στο ξενοδοχείο μας, προσθέτοντας έτσι την αναγκαία πολυτέλεια,
                                    δημιουργήσαμε μια θερμαινόμενη πισίνα στον εξωτερικό χώρο, με σύστημα αντίθετης κολύμβησης και υδρομασάζ,
                                    για relax και χαλάρωση.
                                    Επιπρόσθετη παροχή είναι το υδρομασάζ στον εξωτερικό χώρο χωρητικότητας 5 θέσεων.
                                    Προφανώς, και αντιλαμβανόμενοι τις ανάγκες των καιρών παρέχουμε δωρεάν δίκτυο Wi-Fi.
                                </p>
                            </div>
                            <div className="mobile-grid-row">
                                <div className="mobile-gird-column">
                                    <Image 
                                        src="/assets/images/A3/Big_Blue_Hotel_Room_A3_17.webp"
                                        alt='Δωμάτιο A3'
                                        width={100}
                                        height={100}
                                        layout='responsive'
                                        priority={true}
                                        placeholder='blur'
                                        blurDataURL='/assets/images/A3/Big_Blue_Hotel_Room_A3_17.webp'
                                    />
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

export default About



  