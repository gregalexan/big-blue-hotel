import Image from 'next/image'
import React from 'react'

function SomePhotos() {
  return (
    <div>
        {/* <!-- Some Photos Section --> */}
    <section className="some-photos">
        <div className="container-sm">
            <div className="four-photos-row">
                <div className="four-photos-column">
                    <Image
                        src="/assets/images/A3/Big_Blue_Hotel_Room_A3_5.webp"
                        alt='Big Blue Hotel Amaliapolis provided with epic quality beds and created comfortable rooms'
                        width={200}
                        height={200}
                        layout="responsive"
                        loading='lazy'
                        placeholder='blur'
                        blurDataURL='/assets/images/A3/Big_Blue_Hotel_Room_A3_5.webp'
                    />
                    <Image
                        src="/assets/images/BigBlue/Big_Blue_Hotel_Room_BigBlue_3.webp"
                        alt='Big Blue Hotel in Amaliapolis with exceptional view from the luxurious rooms'
                        width={200}
                        height={200}
                        layout="responsive"
                        loading='lazy'
                        placeholder='blur'
                        blurDataURL='/assets/images/BigBlue/Big_Blue_Hotel_Room_BigBlue_3.webp'
                    />
                </div>
                <div className="four-photos-column">
                    <Image
                        src="/assets/images/I2/Big_Blue_Hotel_Room_I2_20.webp"
                        alt='Big Blue Hotel in Almyros, Amaliapoli, offers comfortable and cozy rooms in two levels'
                        width={200}
                        height={200}
                        layout="responsive"
                        loading='lazy'
                        placeholder='blur'
                        blurDataURL='/assets/images/I2/Big_Blue_Hotel_Room_I2_20.webp'
                    />
                    <Image
                        src="/assets/images/A2/Big_Blue_Hotel_Room_A2_15.webp"
                        alt='Big Blue Hotel in Amaliapolis, Amaliapolis is very close to Almyros and Volos, is equipped with family comfortable and luxurious rooms'
                        width={200}
                        height={200}
                        layout="responsive"
                        loading='lazy'
                        placeholder='blur'
                        blurDataURL='/assets/images/A2/Big_Blue_Hotel_Room_A2_15.webp'
                    />
                </div>
            </div>
        </div>
    </section>
    {/* <!-- End Some Photos Section --> */}
    </div>
  )
}

export default SomePhotos