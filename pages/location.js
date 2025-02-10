import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import LocationPageHelp from '@/components/LocationPageHelp'


export async function getServerSideProps() {
    const data = {
      title: "Big Blue Hotel | Amaliapolis",
      description: "Big Blue Hotel is located in Amaliapolis Greece. Here are some information about Amaliapolis, a beautiful seaside village in Central Greece. Also, Big Blue Hotel suggests some tours in Magnesia such as Volos, Almyros, Pelion, the two Monasteries of Panagia Xenia, and cruises to the Sporades Islands.",
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
            <meta name="keywords" content="Location, Big Blue Hotel Location, Amaliapolis, about Amaliapolis, information about Amaliapolis, Tours Magnesia" />
            
            {/* Open Graph meta tags */}
            <meta property="og:title" content="Big Blue Hotel in Amaliapolis" />
            <meta property="og:description" content="Big Blue Hotel is located in Amaliapolis Magnesia Greece, a beautiful seaside town near Almyros and Volos." />
            <meta property="og:image" content="https://bigbluehotel.net/images/A1wholeroomfrombed.jpg" />
            <meta property="og:url" content="https://bigbluehotel.net" />
            <meta property="og:type" content="website" />
            
            {/* Facebook Card meta tags */}
            <meta property="og:image" content="https://bigbluehotel.net/images/A1wholeroomfrombed.jpg" />
            <meta property="og:url" content="https://bigbluehotel.net" />
            
            {/* Apple Touch Icon (for iOS devices) */}
            <link rel="apple-touch-icon" sizes="180x180" href="https://bigbluehotel.net/images/images2/logo.jpg" />
            
            {/* Android Chrome Icon */}
            <link rel="icon" sizes="192x192" href="https://bigbluehotel.net/images/images2/logo.jpg" />
            
            {/* SEO end */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <link rel="stylesheet" href="css/style.css" />
            
            <link rel="shortcut icon" href="https://bigbluehotel.net/images/images2/logo.JPG" type="image/x-icon" />
        </Head>

        <div>
        <section class="header-html">
            <div class="container">
                <h1 class="location-heading text-center text-xxl">
                    <u>Amaliapoli, Magnesia</u>
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
                                    alt='Big Blue Hotel is located in Amaliapoli Magnesia Greece near Almyros and Volos Greece'
                                    width={100}
                                    height={100}
                                    layout='responsive'
                                />
                            </div>
                        </div>
                        <div class="location-text">
                            <p class="text-md text-center">
                                One of the most beautiful areas of Magnesia, just a few kilometers away
                                from Almyros and Volos, in the historic Amaliapolis,
                                embraced on one side by the azure waters of the western Pagasetic Gulf and on the
                                other by the golden-green of endless olive groves,
                                is the newly built, BIG BLUE HOTEL, which begins its operation, life,
                                and activity in the heart of spring, in May 2022.
                            </p>
                        </div>
                    </div>
                    <div class="location-grid-2">
                        <div class="location-text-2">
                            <p class="text-md text-center">
                                You essentially have many possibilities, relaxing to make the most of your day in Amaliapolis.
                                You can enjoy beach or sea games, enjoy coffee, drinks, refreshments, snacks, and
                                ice cream at the nearby beach bars, on the sun loungers (provided free of charge,
                                as well as showers) under the umbrellas and tall plane trees
                                or at the surrounding cafes.
                            </p>
                            <p class="text-md text-center">
                                You can also dine in traditional beautiful taverns with exquisite local
                                appetizers, meats, cooked dishes, and seafood. Don't forget to try local
                                cheeses, wines, and tsipouro.
                            </p>
                            <p class="text-md text-center">
                                The operation of a mini market and bakery with all kinds of
                                goodies can make your stay easier.
                            </p>
                        </div>
                        <div class="location-photos-row-2">
                            <div class="location-photos-column-2">
                                    <Image 
                                        src="/assets/images/AmaliapolisBeach.jpg"
                                        alt='Amaliapolis is a sea side village near Almyros and Volos Greece'
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
                                    alt='Big Blue Hotel is located in Amaliapoli Magnesia Greece near Almyros and Volos Greece'
                                    width={100}
                                    height={100}
                                    layout='responsive'
                                />
                            </div>
                        </div>
                        <div class="location-text">
                            <p class="text-md text-center">
                                One of the most beautiful areas of Magnesia, just a few kilometers away
                                from Almyros and Volos, in the historic Amaliapolis, embraced on one side
                                by the azure waters of the western Pagasetic Gulf and on the other by
                                the golden-green of endless olive groves, is the newly built, BIG BLUE HOTEL,
                                which begins its operation, life, and activity in the heart of spring,
                                in May 2022.
                            </p>
                        </div>
                    </div>
                    <div class="location-grid">
                        <div class="location-photos-row">
                            <div class="location-photos-column">
                                <Image 
                                    src="/assets/images/AmaliapolisBeach.jpg"
                                    alt='Amaliapolis is a sea side village near Almyros and Volos Greece'
                                    width={100}
                                    height={100}
                                    layout='responsive'
                                />
                            </div>
                        </div>
                        <div class="location-text">
                            <p class="text-md text-center">
                                You essentially have many possibilities, relaxing to make the most of
                                your day in Amaliapolis. You can enjoy beach or sea games, enjoy coffee,
                                drinks, refreshments, snacks, and ice cream at the nearby beach bars, on
                                the sun loungers (provided free of charge, as well as showers) under the
                                umbrellas and tall plane trees or at the surrounding cafes.
                            </p>
                            <p class="text-md text-center">
                                You can also
                                dine in traditional beautiful taverns with exquisite local appetizers, meats,
                                cooked dishes, and seafood. Don't forget to try local cheeses, wines, and
                                tsipouro.
                            </p>
                            <p class="text-md text-center">
                                The operation of a mini market and bakery with all kinds of
                                goodies can make your stay easier.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="tours" id="tours">
            <h2 class="text-center text-xl">
                Nearby Tours & Excursions
            </h2>
            <div class="desktop-tours">
                                    <LocationPageHelp 
                                        title="1) Trip to Volos"
                                        imagePath1="/assets/images/images2/volosByDay.jpg"
                                        altTag1="Big Blue Hotel is in Amaliapolis and in very close distance from Volos Greece."
                                        p1="At a very close distance from Amaliapolis, just 66 kilometers away is
                                        the beautiful city of Volos. In Volos, you have a lot of options to make your day.
                                        You can relax in the restaurants, coffee shops or bars by the beach."
                                        p2="You can also go
                                        for a walk by the port of Volos enjoying the beautiful view of the sea. Furthermore,
                                        you can explore the shops in Ermou and buy something to make you remember your stay!"
                                        imagePath2="/assets/images/images2/VolosByNight.jpg"
                                        altTag2="Volos is near to Amaliapolis and one of the best hotels there is Big Blue Hotel"
                                        desktop={true}
                                    />
                                    <LocationPageHelp 
                                        title="2) Trip to Almyros"
                                        imagePath1="/assets/images/images2/kouriForest.jpg"
                                        altTag1="Big Blue Hotel is near Almyros Greece and the Kouri Forest"
                                        p1="The unique town of Almyros is only 21 kilometers away from Amaliapolis!
                                        You can visit the Archaeological Museum of Almyros with a very small ticket price.
                                        You can have a walk in Kouri Forest or even dine there in the restaurants
                                        and enjoy the lush landscape."
                                        p2="In addition, you can see the Zerelia lakes which were created by the fall of comets.
                                        Also, in the central square of Almyros there are a lot of places where you can eat,
                                        dine, such as restaurants and taverns, have a drink or party at night there,
                                        such as bars and clubs."
                                        imagePath2="/assets/images/images2/zerelia.jpg"
                                        altTag2="Big Blue Hotel is near Almyros and the Zerelia lakes"
                                        desktop={true}
                                    />
                                    <LocationPageHelp 
                                        title="3) Trip to Pelion"
                                        imagePath1="/assets/images/images2/pelionMount.jpg"
                                        altTag1="Big Blue Hotel is in Amaliapolis near to Mount Pelion"
                                        p1="The mountain of Pelion, the famous mountain of Centaurus, is a mountain near Volos.
                                        There are many options there to make your day. You can eat in great restaurants or taverns
                                        enjoying the view from the mountain. You can explore the forest there which seems magical!
                                        Being only 98 kilometers away from Amaliapolis and Big Blue Hotel it is worth it to pay a visit!"
                                        desktop={true}
                                    />
                                    <LocationPageHelp 
                                        title="4) A visit to the Monasteries of Panagia Xenia"
                                        imagePath1="/assets/images/images2/panagiaXenia1.jpg"
                                        altTag1="Big Blue Hotel is in Amaliapolis and in very close distance there are two monasteries of Panagia Xenia"
                                        p1="Closer to Amaliapolis and Big Blue Hotel than Almyros there are two Montasteries of
                                        Panagia Xenia. You can visit the first one called New Holy Monastery of Xenia,
                                        near Almyros and the second one is called Old Holy Monastery of Ano Xenia, near mount
                                        Othrys."
                                        p2="You can admire the unique architecture of the monasteries,
                                        the graven images among which the miraculous graven image of Panagia Xenia, and even pray.
                                        Either christian or not this cultural visit is worth a visit!"
                                        imagePath2="/assets/images/images2/panagiaXenia2.jpg"
                                        altTag2="Big Blue Hotel is in Amaliapolis and in very close distance there are two monasteries of Panagia Xenia"
                                        desktop={true}
                                    />
                                    <LocationPageHelp 
                                        title="5) Daily Cruises to Sporades Islands"
                                        imagePath1="/assets/images/images2/sporades.jpg"
                                        altTag1="Big Blue Hotel is in Amaliapolis and there are cruises there to Sporades islands: Skiathos, Skyros, Skopelos, Alonnisos"
                                        p1="Last but not least, you can take the boat that departures in the Port of
                                        Amaliapolis and have a lifetime experience in a cruise to Sporades Islands.
                                        Sporades Islands includes Skiathos, Skopelos, Alonnisos and Skyros."
                                        p2="Skiathos is the closest island thus there are more trips there.
                                        However, you can visit whichever island you desire and relax in the beach,
                                        go for a swim and eat in local restaurants and taverns."
                                        imagePath2="/assets/images/images2/skiathos2.jpg"
                                        altTag2="Big Blue Hotel is in Amaliapolis and there are cruises there to Sporades islands: Skiathos, Skyros, Skopelos, Alonnisos"
                                        desktop={true}
                                    />
            </div>
            <div class="mobile-tours">
                                    <LocationPageHelp 
                                        title="1) Trip to Volos"
                                        imagePath1="/assets/images/images2/volosByDay.jpg"
                                        altTag1="Big Blue Hotel is in Amaliapolis and in very close distance from Volos Greece."
                                        p1="At a very close distance from Amaliapolis, just 66 kilometers away is
                                        the beautiful city of Volos. In Volos, you have a lot of options to make your day.
                                        You can relax in the restaurants, coffee shops or bars by the beach."
                                        p2="You can also go
                                        for a walk by the port of Volos enjoying the beautiful view of the sea. Furthermore,
                                        you can explore the shops in Ermou and buy something to make you remember your stay!"
                                        imagePath2="/assets/images/images2/VolosByNight.jpg"
                                        altTag2="Volos is near to Amaliapolis and one of the best hotels there is Big Blue Hotel"
                                        desktop={false}
                                    />
                                    <LocationPageHelp 
                                        title="2) Trip to Almyros"
                                        imagePath1="/assets/images/images2/kouriForest.jpg"
                                        altTag1="Big Blue Hotel is near Almyros Greece and the Kouri Forest"
                                        p1="The unique town of Almyros is only 21 kilometers away from Amaliapolis!
                                        You can visit the Archaeological Museum of Almyros with a very small ticket price.
                                        You can have a walk in Kouri Forest or even dine there in the restaurants
                                        and enjoy the lush landscape."
                                        p2="In addition, you can see the Zerelia lakes which were created by the fall of comets.
                                        Also, in the central square of Almyros there are a lot of places where you can eat,
                                        dine, such as restaurants and taverns, have a drink or party at night there,
                                        such as bars and clubs."
                                        imagePath2="/assets/images/images2/zerelia.jpg"
                                        altTag2="Big Blue Hotel is near Almyros and the Zerelia lakes"
                                        desktop={false}
                                    />
                                    <LocationPageHelp 
                                        title="3) Trip to Pelion"
                                        imagePath1="/assets/images/images2/pelionMount.jpg"
                                        altTag1="Big Blue Hotel is in Amaliapolis near to Mount Pelion"
                                        p1="The mountain of Pelion, the famous mountain of Centaurus, is a mountain near Volos.
                                        There are many options there to make your day. You can eat in great restaurants or taverns
                                        enjoying the view from the mountain. You can explore the forest there which seems magical!
                                        Being only 98 kilometers away from Amaliapolis and Big Blue Hotel it is worth it to pay a visit!"
                                        desktop={false}
                                    />
                                    <LocationPageHelp 
                                        title="4) A visit to the Monasteries of Panagia Xenia"
                                        imagePath1="/assets/images/images2/panagiaXenia1.jpg"
                                        altTag1="Big Blue Hotel is in Amaliapolis and in very close distance there are two monasteries of Panagia Xenia"
                                        p1="Closer to Amaliapolis and Big Blue Hotel than Almyros there are two Montasteries of
                                        Panagia Xenia. You can visit the first one called New Holy Monastery of Xenia,
                                        near Almyros and the second one is called Old Holy Monastery of Ano Xenia, near mount
                                        Othrys."
                                        p2="You can admire the unique architecture of the monasteries,
                                        the graven images among which the miraculous graven image of Panagia Xenia, and even pray.
                                        Either christian or not this cultural visit is worth a visit!"
                                        imagePath2="/assets/images/images2/panagiaXenia2.jpg"
                                        altTag2="Big Blue Hotel is in Amaliapolis and in very close distance there are two monasteries of Panagia Xenia"
                                        desktop={false}
                                    />
                                    <LocationPageHelp 
                                        title="5) Daily Cruises to Sporades Islands"
                                        imagePath1="/assets/images/images2/sporades.jpg"
                                        altTag1="Big Blue Hotel is in Amaliapolis and there are cruises there to Sporades islands: Skiathos, Skyros, Skopelos, Alonnisos"
                                        p1="Last but not least, you can take the boat that departures in the Port of
                                        Amaliapolis and have a lifetime experience in a cruise to Sporades Islands.
                                        Sporades Islands includes Skiathos, Skopelos, Alonnisos and Skyros."
                                        p2="Skiathos is the closest island thus there are more trips there.
                                        However, you can visit whichever island you desire and relax in the beach,
                                        go for a swim and eat in local restaurants and taverns."
                                        imagePath2="/assets/images/images2/skiathos2.jpg"
                                        altTag2="Big Blue Hotel is in Amaliapolis and there are cruises there to Sporades islands: Skiathos, Skyros, Skopelos, Alonnisos"
                                        desktop={false}
                                    />
            </div>
        </section>
        </div>
    </>
  )
}

export default Location