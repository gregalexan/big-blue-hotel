import React from 'react'

function SomePhotos() {
  return (
    <div>
        {/* <!-- Some Photos Section --> */}
    <section className="some-photos">
        <div className="container-sm">
            <div className="four-photos-row">
                <div className="four-photos-column">
                    <img data-src="https://bigbluehotel.gumlet.io/images/A3/Big_Blue_Hotel_Room_A3_5.jpg" alt="Big Blue Hotel Amaliapolis provided with epic quality beds and created comfortable rooms"></img>
                    <img data-src="https://bigbluehotel.gumlet.io/images/BigBlue/Big_Blue_Hotel_Room_BigBlue_3.jpg" alt="Big Blue Hotel in Amaliapolis with exceptional view from the luxurious rooms"></img>
                </div>
                <div className="four-photos-column">
                    <img data-src="https://bigbluehotel.gumlet.io/images/I2/Big_Blue_Hotel_Room_I2_20.jpg" alt="Big Blue Hotel in Almyros, Amaliapoli, offers comfortable and cozy rooms in two levels "></img>
                    <img data-src="https://bigbluehotel.gumlet.io/images/A2/Big_Blue_Hotel_Room_A2_15.jpg" alt="Big Blue Hotel in Amaliapolis, Amaliapolis is very close to Almyros and Volos, is equipped with family comfortable and luxurious rooms"></img>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- End Some Photos Section --> */}
    </div>
  )
}

export default SomePhotos