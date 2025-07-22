import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Hero() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="column">
              <h1 className="hero-heading text-xxl">
                Big Blue Hotel <br /> <span style={{ fontSize: 'large' }}>Amaliapoli</span>
              </h1>
              <p className="hero-text">
                Visit now Amaliapolis, just outside Almyros and Volos, Greece and dive into Pagasetic Gulf to experience its endless blue!
              </p>
              <p className="hero-text">
                Book now to Big Blue Hotel, designed with love and creativity by its creators.
              </p>
              <p className="hero-text">
                The only hotel in Amaliapolis with a private pool and a jacuzzi!
              </p>
              <div className="hero-buttons">
                <Link href="/book" aria-label="Booking Page of Big Blue Hotel in Amaliapolis. Book Now!" className="btn btn-primary">
                  <i className="fas fa-user"></i> Book Now
                </Link>
                <Link href="#aboutUs" aria-label="More Information About Big Blue Hotel in Amaliapolis" className="btn">Learn More</Link>
              </div>
            </div>
            <div className="column">
              <Image 
                src="/assets/images/BigBlue/Big_Blue_Hotel_Room_BigBlue_9.webp"
                alt="Big Blue Hotel in Amaliapolis Magnesia Greece is the only hotel in Amaliapolis and Almyros with private pool"
                width={700}
                height={800}
                layout="responsive"
                objectFit="cover"
                priority={true}
                placeholder='blur'
                blurDataURL='/assets/images/BigBlue/Big_Blue_Hotel_Room_BigBlue_9.webp'
              />
              <Image
                src="/assets/images/A1/Big_Blue_Hotel_Room_A1_1.webp"
                alt="Big Blue Hotel in Amaliapolis a town near Almyros Greece with a luxurious room."
                width={700}
                height={800}
                layout="responsive"
                objectFit="cover"
                priority={true}
                placeholder='blur'
                blurDataURL='/assets/images/A1/Big_Blue_Hotel_Room_A1_1.webp'
              />
            </div>
          </div>
          <div className="column">
            <Image
              src="/assets/images/BigBlue/Big_Blue_Hotel_Room_BigBlue_1.webp"
              alt="Big Blue Hotel in Amaliapolis, near Almyros, with a private pool and a jacuzzi"
              width={700}
              height={800}
              layout="responsive"
              objectFit="cover"
              priority={true}
              placeholder='blur'
              blurDataURL='/assets/images/BigBlue/Big_Blue_Hotel_Room_BigBlue_1.webp'
            />
            <Image
              src="/assets/images/BigBlue/Big_Blue_Hotel_Room_BigBlue_4.webp"
              alt="Big Blue Hotel in Amaliapolis is the only hotel in Amaliapolis and Almyros with Jacuzzi"
              width={700}
              height={800}
              layout="responsive"
              objectFit="cover"
              priority={true}
              placeholder='blur'
              blurDataURL='/assets/images/BigBlue/Big_Blue_Hotel_Room_BigBlue_4.webp'
            />
            <Image
              src="/assets/images/BigBlue/Big_Blue_Hotel_Room_BigBlue_12.webp"
              alt="A luxurious room in Big Blue Hotel in Amaliapolis with many facilities and services provided including the price"
              width={700}
              height={800}
              layout="responsive"
              objectFit="cover"
              priority={true}
              placeholder='blur'
              blurDataURL='/assets/images/BigBlue/Big_Blue_Hotel_Room_BigBlue_12.webp'
            />
          </div>
        </div>
      </section>
      {/* End Hero Section */}
    </div>
  );
}

export default Hero;
