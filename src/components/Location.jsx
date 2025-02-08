import React from 'react'

function Location() {
  return (
    <div>
        {/* <!-- Location Section --> */}
    <section className="location" id="location">
        <div className="container-lg">
            <h2 className="location-heading text-xl text-center">
                Specific <span style={{color: '#4891ff'}}>Location</span>
            </h2>
            <div className="map-container">
                <div className="google-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3093.4297951890326!2d22.887933475418862!3d39.16494893087412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a74545f9da3e99%3A0x3efeb15acf84263!2sBig%20Blue%20Hotel!5e0!3m2!1sel!2sgr!4v1708376622120!5m2!1sel!2sgr"
                            width="800" title='Big Blue Hotel' height="600" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <a className="btn btn-primary" href="/location" aria-label="Big Blue Hotel is located in Amaliapolis and provides some information about Amaliapolis. Amaliapolis is very close to Almyros and Volos, Magnesia Greece">
                    Explore Amaliapolis!
                </a>
            </div>
        </div>
    </section>
    {/* <!-- End Location Section --> */}
    </div>
  )
}

export default Location