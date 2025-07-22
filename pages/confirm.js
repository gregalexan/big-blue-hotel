import Head from 'next/head'
import React from 'react'
import Link from 'next/link'

function Confirmation() {
  return (
    <>
        <Head>
            <title>Big Blue Hotel | Reservation Request</title>
            <meta charSet="UTF-8" />
            <meta name="language" content="en"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            
            {/* Confirmation of Ownership */}
            <meta name="google-site-verification" content="CctGWGYNVEGFlEqhIop1nIuWzauQEqLElNPIy1MH1rI" />
            
            
            <meta name="description" content="Big Blue Hotel | Reservation request completed" />
            
            <Link rel="shortcut icon" href="https://bigbluehotel.net/images/images2/logo.JPG" type="image/x-icon" />
        </Head>

        <div>
            <div className='container-lg'>
                <div className='not-found'>
                <h1 style={{color: '#4891ff'}}>
                        Success!
                    </h1>
                    <p>
                        We got your reservation request and we will get back to you within 1 hour!
                    </p>
                    <p>
                        Navigate to the <a href='/'>Home Page</a>
                    </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Confirmation