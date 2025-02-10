import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import LocationPageHelp from '@/components/LocationPageHelp'


export async function getServerSideProps() {
    const data = {
      title: "Big Blue Hotel | Αμαλιάπολη",
      description: "Το Big Blue Hotel βρίσκεται στην Αμαλιάπολη, Ελλάδα. Πληροφορίες για την Αμαλιάπολη, ένα όμορφο χωριό κοντά στην Αλμυρό και τον Βόλο. Επίσης, το Big Blue Hotel προτείνει εκδρομές, όπως το Βόλο, η Αλμυρός και το Πήλιο, Παναγίας Ξενία και Σποράδες.",
    };
  
    return {
      props: data,
    };
}

function Location({ title, description }) {
  return (
    <>
        <Head>
            <title>{title}</title>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            
            {/* Confirmation of Ownership */}
            <meta name="google-site-verification" content="CctGWGYNVEGFlEqhIop1nIuWzauQEqLElNPIy1MH1rI" />
            
            {/* SEO start */}
            <meta name="description" content={description} />
            <meta name="keywords" content="Τοποθεσία, Big Blue Hotel Τοποθεσία, Αμαλιάπολη, Σχετικά με την Αμαλιάπολη, Πληροφορίες για την Αμαλιάπολη, Ξεναγήσεις στην Μαγνησία" />
            
            {/* Open Graph meta tags */}
            <meta property="og:title" content="Big Blue Hotel στην Αμαλιάπολη" />
            <meta property="og:description" content="Big Blue Hotel βρίσκεται στην Αμαλιάπολη Μαγνησίας στην Ελλάδα, ένα πανέμορφο παραθαλάσσιο χωριό κοντά στον Αλμυρό και τον Βόλο." />
            <meta property="og:image" content="https://bigbluehotel.net/assets/images/A1/Big_Blue_Hotel_Room_A1_1.jpg" />
            <meta property="og:url" content="https://bigbluehotel.net/greek/location" />
            <meta property="og:type" content="website" />
            
            {/* Facebook Card meta tags */}
            <meta property="og:image" content="https://bigbluehotel.net/assets/images/A1/Big_Blue_Hotel_Room_A1_1.jpg" />
            <meta property="og:url" content="https://bigbluehotel.net/greek/location" />
            
            {/* Apple Touch Icon (for iOS devices) */}
            <link rel="apple-touch-icon" sizes="180x180" href="https://bigbluehotel.net/assets/images/images2/logo.JPG" />
            
            {/* Android Chrome Icon */}
            <link rel="icon" sizes="192x192" href="https://bigbluehotel.net/assets/images/images2/logo.JPG" />
            
            {/* SEO end */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <link rel="stylesheet" href="css/style.css" />
            
            <link rel="shortcut icon" href="https://bigbluehotel.net/assets/images/images2/logo.JPG" type="image/x-icon" />
        </Head>

        <div>
        <section class="header-html">
            <div class="container">
                <h1 class="location-heading text-center text-xxl">
                    <u>Αμαλιάπολη, Μαγνησία</u>
                </h1>
            </div>
        </section>
        <section class="location-html">
            <div class="container">
                <div class="desktop-tours">
                    <div class="location-grid">
                        <div class="location-photos-row">
                            <div class="location-photos-column">
                            <Image 
                                src="/assets/images/Amaliapolis.jpg"
                                alt='Το Big Blue Hotel βρίσκεται στην Αμαλιάπολη Μαγνησία Ελλάδα κοντά στον Άλμυρο και τον Βόλο'
                                width={100}
                                height={100}
                                layout='responsive'
                            />
                            </div>
                        </div>
                        <div class="location-text">
                            <p class="text-md text-center">
                            Ένα από τα πιο όμορφα μέρη της Μαγνησίας, μόλις λίγα χιλιόμετρα μακριά
                            από τον Άλμυρο και τον Βόλο, στην ιστορική Αμαλιάπολη,
                            αγκαλιασμένη από τη μία πλευρά από τα γαλάζια νερά του δυτικού Παγασητικού Κόλπου και από την
                            άλλη από το χρυσό-πράσινο των ατελείωτων ελαιώνων,
                            βρίσκεται το νεοσύστατο BIG BLUE HOTEL, το οποίο ξεκινά τη λειτουργία, τη ζωή,
                            και τις δραστηριότητές του στην καρδιά της άνοιξης, το Μάιο του 2022.
                            </p>
                        </div>
                    </div>

                    <div class="location-grid-2">
                        <div class="location-text-2">
                            <p class="text-md text-center">
                                Στην Αμαλιάπολη έχετε πολλές δυνατότητες για χαλάρωση και να εκμεταλλευτείτε στο έπακρο την ημέρα σας.
                                Μπορείτε να απολαύσετε παιχνίδια στην παραλία ή τη θάλασσα, να πιείτε καφέ, ποτά, αναψυκτικά, σνακ και
                                παγωτό στα κοντινά μπαρ της παραλίας, στις ξαπλώστρες (παρέχονται δωρεάν,
                                καθώς και ντους) κάτω από τις ομπρέλες και τα ψηλά πλατάνια
                                ή στα γύρω καφέ.
                            </p>
                            <p class="text-md text-center">
                                Μπορείτε επίσης να δειπνήσετε σε παραδοσιακές όμορφες ταβέρνες με εκλεκτούς τοπικούς
                                μεζέδες, κρέατα, μαγειρευτά πιάτα και θαλασσινά. Μην ξεχάσετε να δοκιμάσετε τοπικά
                                τυριά, κρασιά και τσίπουρο.
                            </p>
                            <p class="text-md text-center">
                                Η λειτουργία μίνι μάρκετ και φούρνου με όλα τα είδη
                                λιχουδιών μπορεί να διευκολύνει τη διαμονή σας.
                            </p>
                        </div>
                        <div class="location-photos-row-2">
                            <div class="location-photos-column-2">
                            <Image 
                                src="/assets/images/AmaliapolisBeach.jpg"
                                alt='Η Αμαλιάπολη είναι ένα παραλιακό χωριό κοντά στον Άλμυρο και τον Βόλο στην Ελλάδα'
                                width={100}
                                height={100}
                                layout='responsive'
                            />
                            </div>
                        </div>
                    </div>

                </div>
                <div class="mobile-tours">
                    <div class="location-grid">
                        <div class="location-photos-row">
                            <div class="location-photos-column">
                                <Image 
                                    src="/assets/images/Amaliapolis.jpg"
                                    alt='Το Big Blue Hotel βρίσκεται στην Αμαλιάπολη Μαγνησία Ελλάδα κοντά στον Άλμυρο και τον Βόλο'
                                    width={100}
                                    height={100}
                                    layout='responsive'
                                />
                            </div>
                        </div>
                        <div class="location-text">
                            <p class="text-md text-center">
                                Ένα από τα πιο όμορφα μέρη της Μαγνησίας, μόλις λίγα χιλιόμετρα μακριά
                                από τον Άλμυρο και τον Βόλο, στην ιστορική Αμαλιάπολη,
                                αγκαλιασμένη από τη μία πλευρά από τα γαλάζια νερά του δυτικού Παγασητικού Κόλπου και από την
                                άλλη από το χρυσό-πράσινο των ατελείωτων ελαιώνων,
                                βρίσκεται το νεοσύστατο BIG BLUE HOTEL, το οποίο ξεκινά τη λειτουργία, τη ζωή,
                                και τις δραστηριότητές του στην καρδιά της άνοιξης, το Μάιο του 2022.
                            </p>
                        </div>
                    </div>
                    <div class="location-grid">
                        <div class="location-photos-row">
                            <div class="location-photos-column">
                                <Image 
                                    src="/assets/images/AmaliapolisBeach.jpg"
                                    alt='Η Αμαλιάπολη είναι ένα παραλιακό χωριό κοντά στον Άλμυρο και τον Βόλο στην Ελλάδα'
                                    width={100}
                                    height={100}
                                    layout='responsive'
                                />
                            </div>
                        </div>
                        <div class="location-text">
                        <p class="text-md text-center">
                                Στην Αμαλιάπολη έχετε πολλές δυνατότητες για χαλάρωση και να εκμεταλλευτείτε στο έπακρο την ημέρα σας.
                                Μπορείτε να απολαύσετε παιχνίδια στην παραλία ή τη θάλασσα, να πιείτε καφέ, ποτά, αναψυκτικά, σνακ και
                                παγωτό στα κοντινά μπαρ της παραλίας, στις ξαπλώστρες (παρέχονται δωρεάν,
                                καθώς και ντους) κάτω από τις ομπρέλες και τα ψηλά πλατάνια
                                ή στα γύρω καφέ.
                            </p>
                            <p class="text-md text-center">
                                Μπορείτε επίσης να δειπνήσετε σε παραδοσιακές όμορφες ταβέρνες με εκλεκτούς τοπικούς
                                μεζέδες, κρέατα, μαγειρευτά πιάτα και θαλασσινά. Μην ξεχάσετε να δοκιμάσετε τοπικά
                                τυριά, κρασιά και τσίπουρο.
                            </p>
                            <p class="text-md text-center">
                                Η λειτουργία μίνι μάρκετ και φούρνου με όλα τα είδη
                                λιχουδιών μπορεί να διευκολύνει τη διαμονή σας.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="tours" id="tours">
            <h2 class="text-center text-xl">
                Κοντινές Εκδρομές και Περιηγήσεις
            </h2>
            <div class="desktop-tours">
                <LocationPageHelp 
                    title="1) Εκδρομή στον Βόλο"
                    imagePath1="/assets/images/images2/volosByDay.jpg"
                    altTag1="Το Big Blue Hotel βρίσκεται στην Αμαλιάπολη και σε πολύ κοντινή απόσταση από τον Βόλο, Ελλάδα."
                    p1="Σε πολύ κοντινή απόσταση από την Αμαλιάπολη, μόλις 66 χιλιόμετρα μακριά, βρίσκεται η όμορφη πόλη του Βόλου. Στον Βόλο, έχετε πολλές επιλογές για να περάσετε την ημέρα σας. Μπορείτε να χαλαρώσετε στα εστιατόρια, τα καφέ ή τα μπαρ δίπλα στην παραλία."
                    p2="Μπορείτε επίσης να κάνετε βόλτα στο λιμάνι του Βόλου απολαμβάνοντας την όμορφη θέα της θάλασσας. Επίσης, μπορείτε να εξερευνήσετε τα καταστήματα στην Ερμού και να αγοράσετε κάτι για να θυμάστε τη διαμονή σας!"
                    imagePath2="/assets/images/images2/VolosByNight.jpg"
                    altTag2="Ο Βόλος είναι κοντά στην Αμαλιάπολη και ένα από τα καλύτερα ξενοδοχεία εκεί είναι το Big Blue Hotel"
                    desktop={true}
                />
                <LocationPageHelp 
                    title="2) Εκδρομή στον Άλμυρο"
                    imagePath1="/assets/images/images2/kouriForest.jpg"
                    altTag1="Το Big Blue Hotel βρίσκεται κοντά στον Άλμυρο, Ελλάδα και το Δάσος Κουρή"
                    p1="Η μοναδική πόλη του Άλμυρου απέχει μόλις 21 χιλιόμετρα από την Αμαλιάπολη! Μπορείτε να επισκεφτείτε το Αρχαιολογικό Μουσείο του Άλμυρου με πολύ μικρή τιμή εισόδου. Μπορείτε να κάνετε βόλτα στο Δάσος Κουρή ή ακόμα και να δειπνήσετε εκεί σε εστιατόρια και να απολαύσετε το καταπράσινο τοπίο."
                    p2="Επιπλέον, μπορείτε να δείτε τις λίμνες Ζερέλια, οι οποίες δημιουργήθηκαν από την πτώση κομητών. Επίσης, στην κεντρική πλατεία του Άλμυρου υπάρχουν πολλά μέρη για φαγητό, δείπνο, όπως εστιατόρια και ταβέρνες, να πιείτε ή να διασκεδάσετε τη νύχτα εκεί, όπως μπαρ και κλαμπ."
                    imagePath2="/assets/images/images2/zerelia.jpg"
                    altTag2="Το Big Blue Hotel βρίσκεται κοντά στον Άλμυρο και τις λίμνες Ζερέλια"
                    desktop={true}
                />
                <LocationPageHelp 
                    title="3) Εκδρομή στον Πήλιο"
                    imagePath1="/assets/images/images2/pelionMount.jpg"
                    altTag1="Το Big Blue Hotel βρίσκεται στην Αμαλιάπολη κοντά στο βουνό Πήλιο"
                    p1="Το βουνό του Πηλίου, το διάσημο βουνό του Κενταύρου, βρίσκεται κοντά στον Βόλο. Υπάρχουν πολλές επιλογές εκεί για να περάσετε την ημέρα σας. Μπορείτε να φάτε σε εξαιρετικά εστιατόρια ή ταβέρνες απολαμβάνοντας τη θέα από το βουνό. Μπορείτε να εξερευνήσετε το δάσος εκεί που φαίνεται μαγευτικό! Βρίσκεται μόλις 98 χιλιόμετρα μακριά από την Αμαλιάπολη και το Big Blue Hotel και αξίζει να το επισκεφτείτε!"
                    desktop={true}
                />
                <LocationPageHelp 
                    title="4) Επίσκεψη στις Μονές Παναγίας Χρυσοβαλάντου"
                    imagePath1="/assets/images/images2/panagiaXenia1.jpg"
                    altTag1="Το Big Blue Hotel βρίσκεται στην Αμαλιάπολη και σε πολύ κοντινή απόσταση υπάρχουν δύο μονές Παναγίας Χρυσοβαλάντου"
                    p1="Πιο κοντά στην Αμαλιάπολη και το Big Blue Hotel από ότι ο Άλμυρος, υπάρχουν δύο Μονές Παναγίας Χρυσοβαλάντου. Μπορείτε να επισκεφτείτε την πρώτη που λέγεται Νέα Ιερά Μονή Χρυσοβαλάντου, κοντά στον Άλμυρο και τη δεύτερη που λέγεται Παλαιά Ιερά Μονή Άνω Χρυσοβαλάντου, κοντά στο βουνό Όθρυς."
                    p2="Μπορείτε να θαυμάσετε την μοναδική αρχιτεκτονική των μοναστηριών, τα γλυπτά αγάλματα, μεταξύ των οποίων και το θαυματουργό γλυπτό της Παναγίας Χρυσοβαλάντου, και να προσευχηθείτε. Είτε χριστιανοί είτε όχι, αυτή η πολιτιστική επίσκεψη αξίζει να την κάνετε!"
                    imagePath2="/assets/images/images2/panagiaXenia2.jpg"
                    altTag2="Το Big Blue Hotel βρίσκεται στην Αμαλιάπολη και σε πολύ κοντινή απόσταση υπάρχουν δύο μονές Παναγίας Χρυσοβαλάντου"
                    desktop={true}
                />
                <LocationPageHelp 
                    title="5) Ημερήσιες Κρουαζιέρες στα Νησιά Σποράδες"
                    imagePath1="/assets/images/images2/sporades.jpg"
                    altTag1="Το Big Blue Hotel βρίσκεται στην Αμαλιάπολη και υπάρχουν κρουαζιέρες εκεί προς τα νησιά Σποράδες: Σκιάθος, Σκύρος, Σκόπελος, Αλόννησος"
                    p1="Τέλος, μπορείτε να πάρετε το πλοίο που αναχωρεί από το λιμάνι της Αμαλιάπολης και να ζήσετε μια εμπειρία ζωής σε μια κρουαζιέρα στα νησιά Σποράδες. Τα νησιά Σποράδες περιλαμβάνουν τη Σκιάθο, τη Σκόπελο, την Αλόννησο και τη Σκύρο."
                    p2="Η Σκιάθος είναι το πιο κοντινό νησί, επομένως υπάρχουν περισσότερα δρομολόγια εκεί. Ωστόσο, μπορείτε να επισκεφτείτε όποιο νησί επιθυμείτε και να χαλαρώσετε στην παραλία, να κολυμπήσετε και να φάτε σε τοπικά εστιατόρια και ταβέρνες."
                    imagePath2="/assets/images/images2/skiathos2.jpg"
                    altTag2="Το Big Blue Hotel βρίσκεται στην Αμαλιάπολη και υπάρχουν κρουαζιέρες εκεί προς τα νησιά Σποράδες: Σκιάθος, Σκύρος, Σκόπελος, Αλόννησος"
                    desktop={true}
                />
            </div>
            <div class="mobile-tours">
                <LocationPageHelp 
                    title="1) Εκδρομή στον Βόλο"
                    imagePath1="/assets/images/images2/volosByDay.jpg"
                    altTag1="Το Big Blue Hotel βρίσκεται στην Αμαλιάπολη και σε πολύ κοντινή απόσταση από τον Βόλο, Ελλάδα."
                    p1="Σε πολύ κοντινή απόσταση από την Αμαλιάπολη, μόλις 66 χιλιόμετρα μακριά, βρίσκεται η όμορφη πόλη του Βόλου. Στον Βόλο, έχετε πολλές επιλογές για να περάσετε την ημέρα σας. Μπορείτε να χαλαρώσετε στα εστιατόρια, τα καφέ ή τα μπαρ δίπλα στην παραλία."
                    p2="Μπορείτε επίσης να κάνετε βόλτα στο λιμάνι του Βόλου απολαμβάνοντας την όμορφη θέα της θάλασσας. Επίσης, μπορείτε να εξερευνήσετε τα καταστήματα στην Ερμού και να αγοράσετε κάτι για να θυμάστε τη διαμονή σας!"
                    imagePath2="/assets/images/images2/VolosByNight.jpg"
                    altTag2="Ο Βόλος είναι κοντά στην Αμαλιάπολη και ένα από τα καλύτερα ξενοδοχεία εκεί είναι το Big Blue Hotel"
                    desktop={false}
                />
                <LocationPageHelp 
                    title="2) Εκδρομή στον Άλμυρο"
                    imagePath1="/assets/images/images2/kouriForest.jpg"
                    altTag1="Το Big Blue Hotel βρίσκεται κοντά στον Άλμυρο, Ελλάδα και το Δάσος Κουρή"
                    p1="Η μοναδική πόλη του Άλμυρου απέχει μόλις 21 χιλιόμετρα από την Αμαλιάπολη! Μπορείτε να επισκεφτείτε το Αρχαιολογικό Μουσείο του Άλμυρου με πολύ μικρή τιμή εισόδου. Μπορείτε να κάνετε βόλτα στο Δάσος Κουρή ή ακόμα και να δειπνήσετε εκεί σε εστιατόρια και να απολαύσετε το καταπράσινο τοπίο."
                    p2="Επιπλέον, μπορείτε να δείτε τις λίμνες Ζερέλια, οι οποίες δημιουργήθηκαν από την πτώση κομητών. Επίσης, στην κεντρική πλατεία του Άλμυρου υπάρχουν πολλά μέρη για φαγητό, δείπνο, όπως εστιατόρια και ταβέρνες, να πιείτε ή να διασκεδάσετε τη νύχτα εκεί, όπως μπαρ και κλαμπ."
                    imagePath2="/assets/images/images2/zerelia.jpg"
                    altTag2="Το Big Blue Hotel βρίσκεται κοντά στον Άλμυρο και τις λίμνες Ζερέλια"
                    desktop={false}
                />
                <LocationPageHelp 
                    title="3) Εκδρομή στον Πήλιο"
                    imagePath1="/assets/images/images2/pelionMount.jpg"
                    altTag1="Το Big Blue Hotel βρίσκεται στην Αμαλιάπολη κοντά στο βουνό Πήλιο"
                    p1="Το βουνό του Πηλίου, το διάσημο βουνό του Κενταύρου, βρίσκεται κοντά στον Βόλο. Υπάρχουν πολλές επιλογές εκεί για να περάσετε την ημέρα σας. Μπορείτε να φάτε σε εξαιρετικά εστιατόρια ή ταβέρνες απολαμβάνοντας τη θέα από το βουνό. Μπορείτε να εξερευνήσετε το δάσος εκεί που φαίνεται μαγευτικό! Βρίσκεται μόλις 98 χιλιόμετρα μακριά από την Αμαλιάπολη και το Big Blue Hotel και αξίζει να το επισκεφτείτε!"
                    desktop={false}
                />
                <LocationPageHelp 
                    title="4) Επίσκεψη στις Μονές Παναγίας Χρυσοβαλάντου"
                    imagePath1="/assets/images/images2/panagiaXenia1.jpg"
                    altTag1="Το Big Blue Hotel βρίσκεται στην Αμαλιάπολη και σε πολύ κοντινή απόσταση υπάρχουν δύο μονές Παναγίας Χρυσοβαλάντου"
                    p1="Πιο κοντά στην Αμαλιάπολη και το Big Blue Hotel από ότι ο Άλμυρος, υπάρχουν δύο Μονές Παναγίας Χρυσοβαλάντου. Μπορείτε να επισκεφτείτε την πρώτη που λέγεται Νέα Ιερά Μονή Χρυσοβαλάντου, κοντά στον Άλμυρο και τη δεύτερη που λέγεται Παλαιά Ιερά Μονή Άνω Χρυσοβαλάντου, κοντά στο βουνό Όθρυς."
                    p2="Μπορείτε να θαυμάσετε την μοναδική αρχιτεκτονική των μοναστηριών, τα γλυπτά αγάλματα, μεταξύ των οποίων και το θαυματουργό γλυπτό της Παναγίας Χρυσοβαλάντου, και να προσευχηθείτε. Είτε χριστιανοί είτε όχι, αυτή η πολιτιστική επίσκεψη αξίζει να την κάνετε!"
                    imagePath2="/assets/images/images2/panagiaXenia2.jpg"
                    altTag2="Το Big Blue Hotel βρίσκεται στην Αμαλιάπολη και σε πολύ κοντινή απόσταση υπάρχουν δύο μονές Παναγίας Χρυσοβαλάντου"
                    desktop={false}
                />
                <LocationPageHelp 
                    title="5) Ημερήσιες Κρουαζιέρες στα Νησιά Σποράδες"
                    imagePath1="/assets/images/images2/sporades.jpg"
                    altTag1="Το Big Blue Hotel βρίσκεται στην Αμαλιάπολη και υπάρχουν κρουαζιέρες εκεί προς τα νησιά Σποράδες: Σκιάθος, Σκύρος, Σκόπελος, Αλόννησος"
                    p1="Τέλος, μπορείτε να πάρετε το πλοίο που αναχωρεί από το λιμάνι της Αμαλιάπολης και να ζήσετε μια εμπειρία ζωής σε μια κρουαζιέρα στα νησιά Σποράδες. Τα νησιά Σποράδες περιλαμβάνουν τη Σκιάθο, τη Σκόπελο, την Αλόννησο και τη Σκύρο."
                    p2="Η Σκιάθος είναι το πιο κοντινό νησί, επομένως υπάρχουν περισσότερα δρομολόγια εκεί. Ωστόσο, μπορείτε να επισκεφτείτε όποιο νησί επιθυμείτε και να χαλαρώσετε στην παραλία, να κολυμπήσετε και να φάτε σε τοπικά εστιατόρια και ταβέρνες."
                    imagePath2="/assets/images/images2/skiathos2.jpg"
                    altTag2="Το Big Blue Hotel βρίσκεται στην Αμαλιάπολη και υπάρχουν κρουαζιέρες εκεί προς τα νησιά Σποράδες: Σκιάθος, Σκύρος, Σκόπελος, Αλόννησος"
                    desktop={false}
                />
            </div>
        </section>
        </div>
    </>
  )
}

export default Location