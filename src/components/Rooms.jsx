import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Rooms() {
  return (
    <div>
      {/* Rooms Section */}
      <section className="rooms">
        <div className="container-lg">
          <h2>Our Rooms</h2>
          <div className="room-more">
            <Link className="btn btn-primary room-btn" href="/gallery" aria-label="Booking Page of Big Blue Hotel in Amaliapolis Greece.">
              <i className="far fa-images">  </i> Gallery
            </Link>
          </div>

          {/* Room Grid Section */}
          <div className="room-1">
            <div className="container">
              <div className="rooms-grid">
                {/* Room A1 */}
                <div className="rooms-box">
                  <h3>Room A1</h3>
                  <div className="rooms-images">
                    <Image
                      src="/assets/images/A1/Big_Blue_Hotel_Room_A1_1.webp"
                      alt="Big Blue Hotel in Amaliapolis with comfortable family rooms"
                      width={700}
                      height={500}
                      layout="responsive"
                      objectFit="cover"
                      loading='lazy'
                      placeholder='blur'
                      blurDataURL='/assets/images/A1/Big_Blue_Hotel_Room_A1_1.webp'
                    />
                  </div>
                </div>

                {/* Room A2 */}
                <div className="rooms-box">
                  <h3>Room A2</h3>
                  <div className="rooms-images">
                    <Image
                      src="/assets/images/A2/Big_Blue_Hotel_Room_A2_16.webp"
                      alt="Big Blue Hotel voted with 9.8/10 by Booking Travellers"
                      width={700}
                      height={500}
                      layout="responsive"
                      objectFit="cover"
                      loading='lazy'
                      placeholder='blur'
                      blurDataURL='/assets/images/A2/Big_Blue_Hotel_Room_A2_16.webp'
                    />
                  </div>
                </div>

                {/* Room A3 */}
                <div className="rooms-box">
                  <h3>Room A3</h3>
                  <div className="rooms-images">
                    <Image
                      src="/assets/images/A3/Big_Blue_Hotel_Room_A3_16.webp"
                      alt="Amaliapolis is a seaside village in central Greece"
                      width={700}
                      height={500}
                      layout="responsive"
                      objectFit="cover"
                      loading='lazy'
                      placeholder='blur'
                      blurDataURL='/assets/images/A3/Big_Blue_Hotel_Room_A3_16.webp'
                    />
                  </div>
                </div>

                {/* Room I2 */}
                <div className="rooms-box">
                  <h3>Room I2</h3>
                  <div className="rooms-images">
                    <Image
                      src="/assets/images/I2/Big_Blue_Hotel_Room_I2_20.webp"
                      alt="Big Blue Hotel in Amaliapolis owns a private pool and a jacuzzi for its customers"
                      width={700}
                      height={500}
                      layout="responsive"
                      objectFit="cover"
                      loading='lazy'
                      placeholder='blur'
                      blurDataURL='/assets/images/I2/Big_Blue_Hotel_Room_I2_20.webp'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          
          {/* <div className="room-2">
            <div className="container-lg">
              <div className="room-images-carousel">
          
                <Image
                  src="/assets/images/A1/Big_Blue_Hotel_Room_A1_1.webp"
                  alt="Big Blue Hotel is located in Amaliapolis and provides comfortable rooms with many services"
                  width={250}
                  height={200}
                  layout="responsive"
                  objectFit="cover"
                  loading='lazy'
                  placeholder='blur'
                  blurDataURL='/assets/images/A1/Big_Blue_Hotel_Room_A1_1.webp'
                />
                <Image
                  src="/assets/images/A2/Big_Blue_Hotel_Room_A2_14.webp"
                  alt="Big Blue Hotel in Amaliapolis is the only hotel with Swimming Pool and a Jacuzzi"
                  width={200}
                  height={200}
                  layout="responsive"
                  objectFit="cover"
                  loading='lazy'
                  placeholder='blur'
                  blurDataURL='/assets/images/A2/Big_Blue_Hotel_Room_A2_14.webp'
                />
                <Image
                  src="/assets/images/A3/Big_Blue_Hotel_Room_A3_16.webp"
                  alt="Big Blue Hotel Amaliapolis has 4 rooms available"
                  width={200}
                  height={200}
                  layout="responsive"
                  objectFit="cover"
                  loading='lazy'
                  placeholder='blur'
                  blurDataURL='/assets/images/A3/Big_Blue_Hotel_Room_A3_16.webp'
                />
                <Image
                  src="/assets/images/I2/Big_Blue_Hotel_Room_I2_20.webp"
                  alt="Big Blue Hotel is a luxury boutique hotel in Amaliapolis, Volos, Greece"
                  width={200}
                  height={200}
                  layout="responsive"
                  objectFit="cover"
                  loading='lazy'
                  placeholder='blur'
                  blurDataURL='/assets/images/I2/Big_Blue_Hotel_Room_I2_20.webp'
                />
                <Image
                  src="/assets/images/A1/Big_Blue_Hotel_Room_A1_19.webp"
                  alt="Big Blue Hotel provides comfortable rooms and wonderful experiences"
                  width={200}
                  height={200}
                  layout="responsive"
                  objectFit="cover"
                  loading='lazy'
                  placeholder='blur'
                  blurDataURL='/assets/images/A1/Big_Blue_Hotel_Room_A1_19.webp'
                />
                <Image
                  src="/assets/images/A2/Big_Blue_Hotel_Room_A2_13.webp"
                  alt="Amaliapolis is a beautiful seaside village in Central Greece"
                  width={200}
                  height={200}
                  layout="responsive"
                  objectFit="cover"
                  loading='lazy'
                  placeholder='blur'
                  blurDataURL='/assets/images/A2/Big_Blue_Hotel_Room_A2_13.webp'
                />
                <Image
                  src="/assets/images/A3/Big_Blue_Hotel_Room_A3_7.webp"
                  alt="Big Blue Hotel won Top Hotel in Amaliapolis for 2023"
                  width={200}
                  height={200}
                  layout="responsive"
                  objectFit="cover"
                  loading='lazy'
                  placeholder='blur'
                  blurDataURL='/assets/images/A3/Big_Blue_Hotel_Room_A3_7.webp'
                />
                <Image
                  src="/assets/images/I2/Big_Blue_Hotel_Room_I2_18.webp"
                  alt="Big Blue Hotel is located in Amaliapolis and provides comfortable rooms with many services and affordable prices"
                  width={200}
                  height={200}
                  layout="responsive"
                  objectFit="cover"
                  loading='lazy'
                  placeholder='blur'
                  blurDataURL='/assets/images/I2/Big_Blue_Hotel_Room_I2_18.webp'
                />
              </div>
            </div>
          </div> */}
        </div>
      </section>
      {/* End Rooms Section */}
    </div>
  )
}

export default Rooms
