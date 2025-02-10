import Image from 'next/image'
import React from 'react'

function RoomsGreek() {
  return (
    <div>
      {/* Rooms Section */}
      <section className="rooms">
        <div className="container-lg">
          <h2>Τα Δωμάτιά μας</h2>
          <div className="room-more">
            <a className="btn btn-primary room-btn" href="/gallery" aria-label="Γκαλερί με φωτογραφίες του Big Blue Hotel στην Αμαλιάπολη, Ελλάδα.">
              <i className="far fa-images">  </i> Γκαλερί
            </a>
          </div>

          {/* Room Grid Section */}
          <div className="room-1">
            <div className="container">
              <div className="rooms-grid">
                {/* Room A1 */}
                <div className="rooms-box">
                    <h3>Δωμάτιο A1</h3>
                    <div className="rooms-images">
                        <Image
                        src="/assets/images/A1/Big_Blue_Hotel_Room_A1_1.jpg"
                        alt="Το Big Blue Hotel στην Αμαλιάπολη με άνετα οικογενειακά δωμάτια"
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
                    <h3>Δωμάτιο A2</h3>
                    <div className="rooms-images">
                        <Image
                        src="/assets/images/A2/Big_Blue_Hotel_Room_A2_16.jpg"
                        alt="Το Big Blue Hotel στην Αμαλιάπολη αξιολογήθηκε με 9.8/10 από τους ταξιδιώτες της Booking"
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
                    <h3>Δωμάτιο A3</h3>
                    <div className="rooms-images">
                        <Image
                        src="/assets/images/A3/Big_Blue_Hotel_Room_A3_16.jpg"
                        alt="Η Αμαλιάπολη είναι ένα παραλιακό χωριό στην Κεντρική Ελλάδα"
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
                    <h3>Δωμάτιο I2</h3>
                    <div className="rooms-images">
                        <Image
                        src="/assets/images/I2/Big_Blue_Hotel_Room_I2_20.jpg"
                        alt="Το Big Blue Hotel στην Αμαλιάπολη διαθέτει ιδιωτική πισίνα και τζακούζι για τους πελάτες του"
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
                    alt="Το Big Blue Hotel βρίσκεται στην Αμαλιάπολη και παρέχει άνετα δωμάτια με πολλές υπηρεσίες"
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
                    alt="Το Big Blue Hotel στην Αμαλιάπολη είναι το μόνο ξενοδοχείο με Πισίνα και Τζακούζι"
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
                    alt="Το Big Blue Hotel Αμαλιάπολης διαθέτει 4 δωμάτια"
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
                    alt="Το Big Blue Hotel είναι ένα πολυτελές boutique ξενοδοχείο στην Αμαλιάπολη, Βόλος, Ελλάδα"
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
                    alt="Το Big Blue Hotel παρέχει άνετα δωμάτια και υπέροχες εμπειρίες"
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
                    alt="Η Αμαλιάπολη είναι ένα όμορφο παραλιακό χωριό στην Κεντρική Ελλάδα"
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
                    alt="Το Big Blue Hotel κέρδισε τον τίτλο του Καλύτερου Ξενοδοχείου στην Αμαλιάπολη για το 2023"
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
                    alt="Το Big Blue Hotel βρίσκεται στην Αμαλιάπολη και παρέχει άνετα δωμάτια με πολλές υπηρεσίες και προσιτές τιμές"
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

export default RoomsGreek
