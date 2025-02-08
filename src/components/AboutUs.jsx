import React from 'react'

function AboutUs() {
  return (
    <div>
        {/* <!-- About Us Section --> */}
    <section className="about-us" id="aboutUs">
        <div className="container-sm">
            
            <h2 className="about-us-heading text-xl text-center">
                Welcome to the <br /> <span style={{color: '#4891ff', fontStyle: 'italic'}}>Big Blue Hotel!</span>
            </h2>
            
            
            <p className="about-text">
                Big Blue Hotel was founded in May 2022 and is located in the beautiful town of Amaliapolis Magnesia, Greece!
            </p>
        
            <p className="about-text">
                Just a few kilometers away from Almyros and Volos. Amaliapolis is 280 kilometers away from Athens and 240 kilometers from
                Thessaloniki.
            </p>
            <p className="about-text-down">
                Feel free to press the button below to know more about Big Blue Hotel.
            </p>
            <a className="btn btn-primary" href="/about" aria-label="Page with Information about Big Blue Hotel in Amaliapolis Greece. Know More about Big Blue Hotel">
                Read More
            </a>
        </div>
    </section>
    </div>
  )
}

export default AboutUs