import Image from 'next/image'
import React from 'react'

function Rooms() {
  return (
    <div>
      {/* Rooms Section */}
      <section className="rooms">
        <div className="container-lg">
          <h2>Our Rooms</h2>
          <div className="room-more">
            <a className="btn btn-primary room-btn" href="/gallery" aria-label="Booking Page of Big Blue Hotel in Amaliapolis Greece.">
              <i className="far fa-images">  </i> Gallery
            </a>
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
                      src="/assets/images/A1/Big_Blue_Hotel_Room_A1_1.jpg"
                      alt="Big Blue Hotel in Amaliapolis with comfortable family rooms"
                      width={700}
                      height={500}
                      layout="responsive"
                      objectFit="cover"
                      priority={true}
                      placeholder='blur'
                      blurDataURL='/assets/images/A1/Big_Blue_Hotel_Room_A1_1.jpg'
                    />
                  </div>
                </div>

                {/* Room A2 */}
                <div className="rooms-box">
                  <h3>Room A2</h3>
                  <div className="rooms-images">
                    <Image
                      src="/assets/images/A2/Big_Blue_Hotel_Room_A2_16.jpg"
                      alt="Big Blue Hotel voted with 9.8/10 by Booking Travellers"
                      width={700}
                      height={500}
                      layout="responsive"
                      objectFit="cover"
                      priority={true}
                      placeholder='blur'
                      blurDataURL='/assets/images/A2/Big_Blue_Hotel_Room_A2_16.jpg'
                    />
                  </div>
                </div>

                {/* Room A3 */}
                <div className="rooms-box">
                  <h3>Room A3</h3>
                  <div className="rooms-images">
                    <Image
                      src="/assets/images/A3/Big_Blue_Hotel_Room_A3_16.jpg"
                      alt="Amaliapolis is a seaside village in central Greece"
                      width={700}
                      height={500}
                      layout="responsive"
                      objectFit="cover"
                      priority={true}
                      placeholder='blur'
                      blurDataURL='/assets/images/A3/Big_Blue_Hotel_Room_A3_16.jpg'
                    />
                  </div>
                </div>

                {/* Room I2 */}
                <div className="rooms-box">
                  <h3>Room I2</h3>
                  <div className="rooms-images">
                    <Image
                      src="/assets/images/I2/Big_Blue_Hotel_Room_I2_20.jpg"
                      alt="Big Blue Hotel in Amaliapolis owns a private pool and a jacuzzi for its customers"
                      width={700}
                      height={500}
                      layout="responsive"
                      objectFit="cover"
                      priority={true}
                      placeholder='blur'
                      blurDataURL='/assets/images/I2/Big_Blue_Hotel_Room_I2_20.jpg'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Section */}
          <div className="room-2">
            <div className="container-lg">
              <div className="room-images-carousel">
                {/* Image Carousel */}
                <Image
                  src="/assets/images/A1/Big_Blue_Hotel_Room_A1_1.jpg"
                  alt="Big Blue Hotel is located in Amaliapolis and provides comfortable rooms with many services"
                  width={250}
                  height={200}
                  layout="responsive"
                  objectFit="cover"
                  priority={true}
                  placeholder='blur'
                  blurDataURL='/assets/images/A1/Big_Blue_Hotel_Room_A1_1.jpg'
                />
                <Image
                  src="/assets/images/A2/Big_Blue_Hotel_Room_A2_14.jpg"
                  alt="Big Blue Hotel in Amaliapolis is the only hotel with Swimming Pool and a Jacuzzi"
                  width={200}
                  height={200}
                  layout="responsive"
                  objectFit="cover"
                  priority={true}
                  placeholder='blur'
                  blurDataURL='/assets/images/A2/Big_Blue_Hotel_Room_A2_14.jpg'
                />
                <Image
                  src="/assets/images/A3/Big_Blue_Hotel_Room_A3_16.jpg"
                  alt="Big Blue Hotel Amaliapolis has 4 rooms available"
                  width={200}
                  height={200}
                  layout="responsive"
                  objectFit="cover"
                  priority={true}
                  placeholder='blur'
                  blurDataURL='/assets/images/A3/Big_Blue_Hotel_Room_A3_16.jpg'
                />
                <Image
                  src="/assets/images/I2/Big_Blue_Hotel_Room_I2_20.jpg"
                  alt="Big Blue Hotel is a luxury boutique hotel in Amaliapolis, Volos, Greece"
                  width={200}
                  height={200}
                  layout="responsive"
                  objectFit="cover"
                  priority={true}
                  placeholder='blur'
                  blurDataURL='/assets/images/I2/Big_Blue_Hotel_Room_I2_20.jpg'
                />
                <Image
                  src="/assets/images/A1/Big_Blue_Hotel_Room_A1_19.jpg"
                  alt="Big Blue Hotel provides comfortable rooms and wonderful experiences"
                  width={200}
                  height={200}
                  layout="responsive"
                  objectFit="cover"
                  priority={true}
                  placeholder='blur'
                  blurDataURL='/assets/images/A1/Big_Blue_Hotel_Room_A1_19.jpg'
                />
                <Image
                  src="/assets/images/A2/Big_Blue_Hotel_Room_A2_13.jpg"
                  alt="Amaliapolis is a beautiful seaside village in Central Greece"
                  width={200}
                  height={200}
                  layout="responsive"
                  objectFit="cover"
                  priority={true}
                  placeholder='blur'
                  blurDataURL='/assets/images/A2/Big_Blue_Hotel_Room_A2_13.jpg'
                />
                <Image
                  src="/assets/images/A3/Big_Blue_Hotel_Room_A3_7.jpg"
                  alt="Big Blue Hotel won Top Hotel in Amaliapolis for 2023"
                  width={200}
                  height={200}
                  layout="responsive"
                  objectFit="cover"
                  priority={true}
                  placeholder='blur'
                  blurDataURL='/assets/images/A3/Big_Blue_Hotel_Room_A3_7.jpg'
                />
                <Image
                  src="/assets/images/I2/Big_Blue_Hotel_Room_I2_18.jpg"
                  alt="Big Blue Hotel is located in Amaliapolis and provides comfortable rooms with many services and affordable prices"
                  width={200}
                  height={200}
                  layout="responsive"
                  objectFit="cover"
                  priority={true}
                  placeholder='blur'
                  blurDataURL='/assets/images/I2/Big_Blue_Hotel_Room_I2_18.jpg'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Rooms Section */}
    </div>
  )
}

export default Rooms
