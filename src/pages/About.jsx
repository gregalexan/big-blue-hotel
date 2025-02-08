import React from 'react'

function About() {
  return (
    <div>
      <section className="about-us-html">
        <div className="container">
            <h1 className="text-xxl text-center">About <br /> Big Blue Hotel</h1>
            <div className="not-mobile-about-us">
                <div className="about-us-grid">
                    <div className="about-us-photos-row">
                        <div className="about-us-photos-column">
                            {/* <img data-src="https://bigbluehotel.gumlet.io/images/A1/Big_Blue_Hotel_Room_A1_3.jpg" alt="Big Blue Hotel in Amaliapolis with cozy and comfortable rooms"></img>
                            <img data-src="https://bigbluehotel.gumlet.io/images/I2/Big_Blue_Hotel_Room_I2_7.jpg" alt="Big Blue Hotel in Amaliapolis with cozy and comfortable rooms"></img> */}
                            <img src='https://bigbluehotel.net/images/A1/Big_Blue_Hotel_Room_A1_3.jpg' alt='room'></img>
                            <img src='https://bigbluehotel.net/images/I2/Big_Blue_Hotel_Room_I2_7.jpg' alt='room'></img>
                        </div>
                        <div className="about-us-photos-column">
                            {/* <img data-src="https://bigbluehotel.gumlet.io/images/A1/Big_Blue_Hotel_Room_A1_27.jpg" alt="Big Blue Hotel in Amaliapolis with cozy and comfortable rooms"></img>
                            <img data-src="https://bigbluehotel.gumlet.io/images/A3/Big_Blue_Hotel_Room_A3_17.jpg" alt="Big Blue Hotel in Amaliapolis with cozy and comfortable rooms"></img> */}
                            <img src='https://bigbluehotel.net/images/A1/Big_Blue_Hotel_Room_A1_27.jpg' alt='room'></img>
                            <img src='https://bigbluehotel.net/images/A3/Big_Blue_Hotel_Room_A3_17.jpg' alt='room'></img>
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
                            {/* <img data-src="https://bigbluehotel.gumlet.io/images/A1/Big_Blue_Hotel_Room_A1_27.jpg" alt="Big Blue Hotel in Amaliapolis with cozy and comfortable rooms"></img> */}
                            <img src='https://bigbluehotel.net/images/A1/Big_Blue_Hotel_Room_A1_27.jpg' alt='room'></img>
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
                            {/* <img data-src="https://bigbluehotel.gumlet.io/images/A1/Big_Blue_Hotel_Room_A1_3.jpg" alt="Big Blue Hotel in Amaliapolis with cozy and comfortable rooms"></img> */}
                            <img src='https://bigbluehotel.net/images/A1/Big_Blue_Hotel_Room_A1_3.jpg' alt='room'></img>
                        </div>
                    </div>
                </div>
                <div className="mobile-grid-about">
                    <div className="mobile-grid-row">
                        <div className="mobile-grid-column">
                            {/* <img data-src="https://bigbluehotel.gumlet.io/images/I2/Big_Blue_Hotel_Room_I2_7.jpg" alt="Big Blue Hotel in Amaliapolis with cozy and comfortable rooms"></img> */}
                            <img src='https://bigbluehotel.net/images/I2/Big_Blue_Hotel_Room_I2_7.jpg' alt='room'></img>
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
                            {/* <img data-src="https://bigbluehotel.gumlet.io/images/A3/Big_Blue_Hotel_Room_A3_17.jpg" alt="Big Blue Hotel in Amaliapolis with cozy and comfortable rooms"></img> */}
                            <img src='https://bigbluehotel.net/images/A3/Big_Blue_Hotel_Room_A3_17.jpg' alt='room'></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default About
