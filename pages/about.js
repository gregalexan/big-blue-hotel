import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

export async function getServerSideProps() {
    const data = {
      title: "Big Blue Hotel | About",
      description: "This page is dedicated to help you learn more information about Big Blue Hotel in Amaliapolis.",
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
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            
            {/* Confirmation of Ownership */}
            <meta name="google-site-verification" content="CctGWGYNVEGFlEqhIop1nIuWzauQEqLElNPIy1MH1rI" />
            
            {/* SEO start */}
            <meta name="description" content={description} />
            <meta name="keywords" content="Information, about big blue hotel, about, Big Blue Hotel Amaliapolis, Big Blue Hotel, information Big Blue Hotel Amaliapolis" />
            
            {/* Open Graph meta tags */}
            <meta property="og:title" content="Big Blue Hotel - Amaliapolis" />
            <meta property="og:description" content="Have you heard about Big Blue Hotel in Amaliapolis? It's a newly built hotel in Amaliapolis Greece and pays attention to every detail just to provide its customers relaxing holidays! Learn More!" />
            <meta property="og:image" content="https://bigbluehotel.net/images/A3wholeroom.jpg" />
            <meta property="og:url" content="https://bigbluehotel.net" />
            <meta property="og:type" content="website" />
            
            {/* Facebook Card meta tags */}
            <meta property="og:image" content="https://bigbluehotel.net/images/A3wholeroom.jpg" />
            <meta property="og:url" content="https://bigbluehotel.net" />
            
            {/* Apple Touch Icon (for iOS devices) */}
            <link rel="apple-touch-icon" sizes="180x180" href="https://bigbluehotel.net/images/images2/logo.jpg" />
            
            {/* Android Chrome Icon */}
            <link rel="icon" sizes="192x192" href="https://bigbluehotel.net/images/images2/logo.jpg" />
            
            {/* SEO end */}
            <link rel="shortcut icon" href="https://bigbluehotel.net/images/images2/logo.JPG" type="image/x-icon" />
        </Head>

        <div>
        <section className="about-us-html">
            <div className="container">
                <h1 className="text-xxl text-center">About <br /> Big Blue Hotel</h1>
                <div className="not-mobile-about-us">
                    <div className="about-us-grid">
                        <div className="about-us-photos-row">
                            <div className="about-us-photos-column">
                                <Image 
                                    src="/assets/images/A1/Big_Blue_Hotel_Room_A1_3.jpg"
                                    alt='Room A1'
                                    width={100}
                                    height={100}
                                    layout='responsive'
                                    priority={true}
                                    placeholder='blur'
                                    blurDataURL='/assets/images/A1/Big_Blue_Hotel_Room_A1_3.jpg'
                                />
                                <Image 
                                    src="/assets/images/I2/Big_Blue_Hotel_Room_I2_7.jpg"
                                    alt='Room I2'
                                    width={100}
                                    height={100}
                                    layout='responsive'
                                    priority={true}
                                    placeholder='blur'
                                    blurDataURL='/assets/images/I2/Big_Blue_Hotel_Room_I2_7.jpg'
                                />
                            </div>
                            <div className="about-us-photos-column">
                                <Image 
                                    src="/assets/images/A1/Big_Blue_Hotel_Room_A1_27.jpg"
                                    alt='Room A1'
                                    width={100}
                                    height={100}
                                    layout='responsive'
                                    priority={true}
                                    placeholder='blur'
                                    blurDataURL='/assets/images/A1/Big_Blue_Hotel_Room_A1_27.jpg'
                                />
                                <Image 
                                    src="/assets/images/A3/Big_Blue_Hotel_Room_A3_17.jpg"
                                    alt='Room A3'
                                    width={100}
                                    height={100}
                                    layout='responsive'
                                    priority={true}
                                    placeholder='blur'
                                    blurDataURL='/assets/images/A3/Big_Blue_Hotel_Room_A3_17.jpg'
                                />
                            </div>
                        </div>
                        <div className="about-us-text-content">
                            <p className="text-md text-center">
                                In one of the most beautiful areas of Magnesia (Greece), full of colors and scents,
                                in the historic Amaliapolis (Mitzela),
                                embraced on one side by the azure waters of the western Pagasetic Gulf
                                and on the other by the golden-green of endless olive groves,
                                lies the newly built BIG BLUE HOTEL, which begins its operation, life, and activity
                                in the heart of spring, in May 2022.
                            </p>
                            <p className="text-md text-center">
                                Designed with sensitivity and love by its creators, drawing from the traditional -
                                genuine Greek hospitality, it aspires to be an ideal destination and sanctuary for beautiful vacations,
                                offering quality, completeness, tranquility, intense emotions, wellness, and joy!
                            </p>
                            <p className="text-md text-center">
                                The five rooms of the BIG BLUE HOTEL, situated on two levels, single or double rooms (ideal for families),
                                provide all the comforts to offer you every opportunity to make your stay as beautiful and pleasant as possible.
                                In each room, in addition to the bathroom and toiletries, there are a television and air conditioning,
                                as well as a small kitchenette with a refrigerator, coffee maker, kettle, and toaster, which will adequately meet your
                                needs for preparing your breakfast. Excluding of course the breakfast provided by Big Blue Hotel, which is FREE of charge.
                            </p>
                            <p className="text-md text-center">
                                For an even more beautiful stay at our hotel, adding the necessary luxury,
                                we have created a heated outdoor pool with a counter-current swimming system and a jacuzzi for relaxation and leisure.
                                An additional amenity is the outdoor jacuzzi with a capacity of 5 seats.
                            </p>
                            <p className="text-center text-md">
                                Obviously, understanding the needs of the times, it is provided free Wi-Fi network access.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mobile-about">
                    <div className="mobile-grid-about">
                        <div className="mobile-grid-row">
                            <div className="mobile-grid-column">
                                <Image 
                                    src="/assets/images/A1/Big_Blue_Hotel_Room_A1_27.jpg"
                                    alt='Room A1'
                                    width={100}
                                    height={100}
                                    layout='responsive'
                                    priority={true}
                                    placeholder='blur'
                                    blurDataURL='/assets/images/A1/Big_Blue_Hotel_Room_A1_27.jpg'
                                />
                            </div>
                        </div>
                        <div className="mobile-grid-text">
                            <p className="text-md text-center">In one of the most beautiful areas of Magnesia (Greece), full of colors and scents,
                                in the historic Amaliapolis (Mitzela),
                                embraced on one side by the azure waters of the western Pagasetic Gulf
                                and on the other by the golden-green of endless olive groves,
                                lies the newly built BIG BLUE HOTEL, which begins its operation, life, and activity
                                in the heart of spring, in May 2022.</p>
                        </div>
                    </div>
                    <div className="mobile-grid-about">
                        <div className="mobile-grid-text">
                            <p className="text-md text-center">
                                Designed with sensitivity and love by its creators, drawing from the traditional -
                                genuine Greek hospitality, it aspires to be an ideal destination and sanctuary for beautiful vacations,
                                offering quality, completeness, tranquility, intense emotions, wellness, and joy!
                            </p>
                        </div>
                        <div className="mobile-grid-row">
                            <div className="mobile-grid-column">
                                <Image 
                                    src="/assets/images/A1/Big_Blue_Hotel_Room_A1_3.jpg"
                                    alt='Room A1'
                                    width={100}
                                    height={100}
                                    layout='responsive'
                                    priority={true}
                                    placeholder='blur'
                                    blurDataURL='/assets/images/A1/Big_Blue_Hotel_Room_A1_3.jpg'
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mobile-grid-about">
                        <div className="mobile-grid-row">
                            <div className="mobile-grid-column">
                                <Image 
                                    src="/assets/images/I2/Big_Blue_Hotel_Room_I2_7.jpg"
                                    alt='Room I2'
                                    width={100}
                                    height={100}
                                    layout='responsive'
                                    priority={true}
                                    placeholder='blur'
                                    blurDataURL='/assets/images/I2/Big_Blue_Hotel_Room_I2_7.jpg'
                                />
                            </div>
                        </div>
                        <div className="mobile-grid-text">
                            <p className="text-md text-center">
                                The five rooms of the BIG BLUE HOTEL, situated on two levels, single or double rooms (ideal for families),
                                provide all the comforts to offer you every opportunity to make your stay as beautiful and pleasant as possible.
                                In each room, in addition to the bathroom and toiletries, there are a television and air conditioning,
                                as well as a small kitchenette with a refrigerator, coffee maker, kettle, and toaster, which will adequately meet your
                                needs for preparing your breakfast. Excluding of course the breakfast provided by Big Blue Hotel, which is FREE of charge.
                            </p>
                        </div>
                    </div>
                    <div className="mobile-grid-about">
                        <div className="mobile-grid-text">
                            <p className="text-md text-center">
                                For an even more beautiful stay at our hotel, adding the necessary luxury,
                                we have created a heated outdoor pool with a counter-current swimming system and a jacuzzi for relaxation and leisure.
                                An additional amenity is the outdoor jacuzzi with a capacity of 5 seats. Obviously, understanding the needs of the times, it is provided free Wi-Fi network access.
                            </p>
                        </div>
                        <div className="mobile-grid-row">
                            <div className="mobile-gird-column">
                                <Image 
                                    src="/assets/images/A3/Big_Blue_Hotel_Room_A3_17.jpg"
                                    alt='Room A3'
                                    width={100}
                                    height={100}
                                    layout='responsive'
                                    priority={true}
                                    placeholder='blur'
                                    blurDataURL='/assets/images/A3/Big_Blue_Hotel_Room_A3_17.jpg'
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



  